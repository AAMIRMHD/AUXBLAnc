const fs = require("fs");
const path = require("path");

const srcDir = "/Users/admin/.gemini/antigravity/brain/8080c5ba-3065-47bb-a06d-583ba2e802c2";
const destDir = path.join(__dirname, "public");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const assets = [
  { src: "media__1782100161177.jpg", dest: "boardroom.jpg" },
  { src: "media__1782100168055.jpg", dest: "logo.jpg" },
  { src: "media__1782100175692.jpg", dest: "boardroom-office.jpg" }
];

assets.forEach((asset) => {
  const srcPath = path.join(srcDir, asset.src);
  const destPath = path.join(destDir, asset.dest);
  
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Successfully copied ${asset.src} to public/${asset.dest}`);
    } else {
      console.warn(`Source asset not found at path: ${srcPath}`);
    }
  } catch (err) {
    console.error(`Error copying asset ${asset.src}:`, err.message);
  }
});
