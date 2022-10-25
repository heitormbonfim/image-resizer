import sharp from "sharp";

const oldImg = process.argv[2];
const newImgWidth = Number(process.argv[3]);
const newQuality = Number(process.argv[4]);
const newImgName = process.argv[5];

function resize(img, newWidth, newQuality, newName) {
  if (img.includes(".jpg")) {
    sharp(img)
      .resize({ width: newWidth })
      .jpeg({ quality: newQuality })
      .toFile(newName + ".jpg", (err) => {
        if (err) throw err;

        console.log(`Image ${img} resized as ${newName} successfully!`);
      });
  } else if (img.includes(".png")) {
    let quality = newQuality;

    if (quality > 9) {
      quality = newQuality / 10;
    }

    sharp(img)
      .resize({ width: newWidth })
      .png({ compressionLevel: quality })
      .toFile(newName + ".png", (err) => {
        if (err) throw err;

        console.log(`Image ${img} resized as ${newName} successfully!`);
      });
  } else if (img.includes(".webp")) {
    sharp(img)
      .resize({ width: newWidth })
      .webp({ quality: newQuality })
      .toFile(newName + ".webp", (err) => {
        if (err) throw err;

        console.log(`Image ${img} resized as ${newName} successfully!`);
      });
  }
}

resize(oldImg, newImgWidth, newQuality, newImgName);
