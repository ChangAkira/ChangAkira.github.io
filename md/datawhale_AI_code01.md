	!pip install simple-aesthetics-predictor

	!pip install -v -e data-juicer

	!pip uninstall pytorch-lightning -y
	!pip install peft lightning pandas torchvision

	!pip install -e DiffSynth-Studio

	from modelscope.msdatasets import MsDataset

	ds = MsDataset.load(
		'AI-ModelScope/lowres_anime',
		subset_name='default',
		split='train',
		cache_dir="/mnt/workspace/kolors/data"
	)

	import json, os
	from data_juicer.utils.mm_utils import SpecialTokens
	from tqdm import tqdm


	os.makedirs("./data/lora_dataset/train", exist_ok=True)
	os.makedirs("./data/data-juicer/input", exist_ok=True)
	with open("./data/data-juicer/input/metadata.jsonl", "w") as f:
		for data_id, data in enumerate(tqdm(ds)):
			image = data["image"].convert("RGB")
			image.save(f"/mnt/workspace/kolors/data/lora_dataset/train/{data_id}.jpg")
			metadata = {"text": "二次元", "image": [f"/mnt/workspace/kolors/data/lora_dataset/train/{data_id}.jpg"]}
			f.write(json.dumps(metadata))
			f.write("\n")

	data_juicer_config = """
	# global parameters
	project_name: 'data-process'
	dataset_path: './data/data-juicer/input/metadata.jsonl'  # path to your dataset directory or file
	np: 4  # number of subprocess to process your dataset

	text_keys: 'text'
	image_key: 'image'
	image_special_token: '<__dj__image>'

	export_path: './data/data-juicer/output/result.jsonl'

	# process schedule
	# a list of several process operators with their arguments
	process:
		- image_shape_filter:
			min_width: 1024
			min_height: 1024
			any_or_all: any
		- image_aspect_ratio_filter:
			min_ratio: 0.5
			max_ratio: 2.0
			any_or_all: any
	"""
	with open("data/data-juicer/data_juicer_config.yaml", "w") as file:
		file.write(data_juicer_config.strip())

	!dj-process --config data/data-juicer/data_juicer_config.yaml

	import pandas as pd
	import os, json
	from PIL import Image
	from tqdm import tqdm


	texts, file_names = [], []
	os.makedirs("./data/data-juicer/output/images", exist_ok=True)
	with open("./data/data-juicer/output/result.jsonl", "r") as f:
		for line in tqdm(f):
			metadata = json.loads(line)
			texts.append(metadata["text"])
			file_names.append(metadata["image"][0])

	df = pd.DataFrame({"text": texts, "file_name": file_names})
	df.to_csv("./data/data-juicer/output/result.csv", index=False)

	df

	from transformers import CLIPProcessor, CLIPModel
	import torch

	model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
	processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

	images = [Image.open(img_path) for img_path in df["file_name"]]
	inputs = processor(text=df["text"].tolist(), images=images, return_tensors="pt", padding=True)

	outputs = model(**inputs)
	logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
	probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the probabilities

	probs

	from torch.utils.data import Dataset, DataLoader

	class CustomDataset(Dataset):
		def __init__(self, df, processor):
			self.texts = df["text"].tolist()
			self.images = [Image.open(img_path) for img_path in df["file_name"]]
			self.processor = processor

		def __len__(self):
			return len(self.texts)

		def __getitem__(self, idx):
			inputs = self.processor(text=self.texts[idx], images=self.images[idx], return_tensors="pt", padding=True)
			return inputs

	dataset = CustomDataset(df, processor)
	dataloader = DataLoader(dataset, batch_size=8)

	for batch in dataloader:
		outputs = model(**batch)
		logits_per_image = outputs.logits_per_image
		probs = logits_per_image.softmax(dim=1)
		print(probs)

	import torch
	from diffusers import StableDiffusionPipeline

	torch.manual_seed(1)
	pipe = StableDiffusionPipeline.from_pretrained("CompVis/stable-diffusion-v-1-4", torch_dtype=torch.float16)
	pipe = pipe.to("cuda")

	prompt = "二次元，一个紫色长发小女孩穿着粉色吊带漏肩连衣裙，在练习室练习唱歌，手持话筒"
	negative_prompt = "丑陋、变形、嘈杂、模糊、低对比度"
	guidance_scale = 4
	num_inference_steps = 50

	image = pipe(
		prompt=prompt,
		negative_prompt=negative_prompt,
		guidance_scale=guidance_scale,
		num_inference_steps=num_inference_steps,
		height=1024,
		width=1024,
	).images[0]

	image.save("example_image.png")
	image

	from PIL import Image

	torch.manual_seed(1)
	image = pipe(
		prompt="二次元，日系动漫，演唱会的观众席，人山人海，一个紫色短发小女孩穿着粉色吊带漏肩连衣裙坐在演唱会的观众席，舞台上衣着华丽的歌星们在唱歌",
		negative_prompt="丑陋、变形、嘈杂、模糊、低对比度",
		cfg_scale=4,
		num_inference_steps=50, height=1024, width=1024,
	)
	image.save("1.jpg")

	torch.manual_seed(1)
	image = pipe(
		prompt="二次元，一个紫色短发小女孩穿着粉色吊带漏肩连衣裙坐在演唱会的观众席，露出憧憬的神情",
		negative_prompt="丑陋、变形、嘈杂、模糊、低对比度，色情擦边",
		cfg_scale=4,
		num_inference_steps=50, height=1024, width=1024,
	)
	image.save("2.jpg")

	torch.manual_seed(2)
	image = pipe(
		prompt="二次元，一个紫色短发小女孩穿着粉色吊带漏肩连衣裙坐在演唱会的观众席，露出憧憬的神情",
		negative_prompt="丑陋、变形、嘈杂、模糊、低对比度，色情擦边",
		cfg_scale=4,
		num_inference_steps=50, height=1024, width=1024,
	)
	image.save("3.jpg")

	torch.manual_seed(5)
	image = pipe(
		prompt="二次元，一个紫色短发小女孩穿着粉色吊带漏肩连衣裙，对着流星许愿，闭着眼睛，十指交叉，侧面",
		negative_prompt="丑陋、变形、嘈杂、模糊、低对比度，扭曲的手指，多余的手指",
		cfg_scale=4,
		num_inference_steps=50, height=1024, width=1024,
	)
	image.save("4.jpg")

	torch.manual_seed(0)
	image = pipe(
		prompt="二次元，一个紫色中等长度头发小女孩穿着粉色吊带漏肩连衣裙，在练习室练习唱歌",
		negative_prompt="丑陋、变形、嘈杂、模糊、低对比度",
		cfg_scale=4,
		num_inference_steps=50, height=1024, width=1024,
	)
	image.save("5.jpg")

	torch.manual_seed(1)
	image = pipe(
		prompt="二次元，一个紫色长发小女孩穿着粉色吊带漏肩连衣裙，在练习室练习唱歌，手持话筒",
		negative_prompt="丑陋、变形、嘈杂、模糊、低对比度",
		cfg_scale=4,
		num_inference_steps=50, height=1024, width=1024,
	)
	image.save("6.jpg")

	torch.manual_seed(7)
	image = pipe(
		prompt="二次元，紫色长发少女，穿着黑色连衣裙，试衣间，心情忐忑",
		negative_prompt="丑陋、变形、嘈杂、模糊、低对比度",
		cfg_scale=4,
		num_inference_steps=50, height=1024, width=1024,
	)
	image.save("7.jpg")

	torch.manual_seed(0)
	image = pipe(
		prompt="二次元，紫色长发少女，穿着黑色礼服，连衣裙，在台上唱歌",
		negative_prompt="丑陋、变形、嘈杂、模糊、低对比度",
		cfg_scale=4,
		num_inference_steps=50, height=1024, width=1024,
	)
	image.save("8.jpg")

	import numpy as np
	from PIL import Image


	images = [np.array(Image.open(f"{i}.jpg")) for i in range(1, 9)]
	image = np.concatenate([
		np.concatenate(images[0:2], axis=1),
		np.concatenate(images[2:4], axis=1),
		np.concatenate(images[4:6], axis=1),
		np.concatenate(images[6:8], axis=1),
	], axis=0)
	image = Image.fromarray(image).resize((1024, 2048))
	image
