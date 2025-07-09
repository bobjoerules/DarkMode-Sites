from PIL import Image
import os

input_folder = 'new size'
output_folder = 'logos'
os.makedirs(output_folder, exist_ok=True)

# Resize dimensions (change these as needed)
new_width = 300
new_height = 60

for filename in os.listdir(input_folder):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        img_path = os.path.join(input_folder, filename)
        img = Image.open(img_path)
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        img.save(os.path.join(output_folder, filename))
        print(f"Resized: {filename}")
