import cloudinary from '../config/cloudinary';

export const getBandsType = (items) => {
  return items.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.type === value.type)
  );
};

export const getBandsByType = (items, type) => {
  return items.filter((item) => item.type === type);
};

export const getLimitedEditions = (editions, centeredDial) => {
  for (const band of editions) {
    if (
      band.name === centeredDial.name &&
      band.bodyType === centeredDial.bodyType
    ) {
      return band.img;
    }
  }
  return null;
};

export const CopyToClipboard = async () => {
  try {
    const watchImage =
      "/assets/sideview/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR (1).jpeg";
    const dialImage =
      "/assets/dials/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF.png";
    const bandImage = "/assets/MYJD3_FV9.jpeg";

    const loadImage = (src) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = src;
      });

    const [watchImg, dialImg, bandImg] = await Promise.all([
      loadImage(watchImage),
      loadImage(dialImage),
      loadImage(bandImage),
    ]);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const canvasWidth = 3840;
    const canvasHeight = 2160;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    const padding = 120;
    const squareRadius = 50;
    const squareColor = "#ffffff";

    const largeSquareSize = 1600;
    const smallSquareSize = 750;

    const largeImageSize = Math.floor(largeSquareSize * 0.95);
    const smallImageSize = Math.floor(smallSquareSize * 0.95);

    const totalWidth = largeSquareSize + padding + smallSquareSize;
    const startX = (canvasWidth - totalWidth) / 2;

    const drawRoundedRect = (x, y, width, height) => {
      ctx.beginPath();
      ctx.moveTo(x + squareRadius, y);
      ctx.arcTo(x + width, y, x + width, y + height, squareRadius);
      ctx.arcTo(x + width, y + height, x, y + height, squareRadius);
      ctx.arcTo(x, y + height, x, y, squareRadius);
      ctx.arcTo(x, y, x + width, y, squareRadius);
      ctx.closePath();
      ctx.fill();
    };

    const leftSquareX = startX;
    const leftSquareY = (canvasHeight - largeSquareSize) / 2;

    ctx.fillStyle = squareColor;
    drawRoundedRect(leftSquareX, leftSquareY, largeSquareSize, largeSquareSize);

    const watchX = leftSquareX + (largeSquareSize - largeImageSize) / 2;
    const watchY = leftSquareY + (largeSquareSize - largeImageSize) / 2;
    ctx.drawImage(watchImg, watchX, watchY, largeImageSize, largeImageSize);

    const rightSquareX = startX + largeSquareSize + padding;
    const verticalGap = 60;
    const rightSquareY1 =
      (canvasHeight - (2 * smallSquareSize + verticalGap)) / 2;
    const rightSquareY2 = rightSquareY1 + smallSquareSize + verticalGap;

    ctx.fillStyle = squareColor;
    drawRoundedRect(
      rightSquareX,
      rightSquareY1,
      smallSquareSize,
      smallSquareSize
    );

    const dialX = rightSquareX + (smallSquareSize - smallImageSize) / 2;
    const dialY = rightSquareY1 + (smallSquareSize - smallImageSize) / 2;
    ctx.drawImage(dialImg, dialX, dialY, smallImageSize, smallImageSize);

    drawRoundedRect(
      rightSquareX,
      rightSquareY2,
      smallSquareSize,
      smallSquareSize
    );

    const bandX = rightSquareX + (smallSquareSize - smallImageSize) / 2;
    const bandY = rightSquareY2 + (smallSquareSize - smallImageSize) / 2;
    ctx.drawImage(bandImg, bandX, bandY, smallImageSize, smallImageSize);

    ctx.fillStyle = "#666666";
    ctx.font = "32px sans-serif";

    const watermarkText1 = "Build by https://x.com/oyemehraxyz";
    const watermarkX = canvasWidth - 750;
    const watermarkY1 = canvasHeight - 80;
    ctx.fillText(watermarkText1, watermarkX, watermarkY1);

    const watermarkText2 = "https://www.linkedin.com/in/shubhammehracs/";
    const watermarkY2 = canvasHeight - 40;
    ctx.fillText(watermarkText2, watermarkX, watermarkY2);

    canvas.toBlob(async (blob) => {
      const clipboardItem = new ClipboardItem({ "image/png": blob });
      await navigator.clipboard.write([clipboardItem]);
      return true;
    });
  } catch (error) {
    console.error("Error copying image to clipboard:", error);
  }
};

export const watchesByCollection = (collection, watches) => {
  const collectionMap = {
    0: "Series 10",
    1: "Hermes",
    2: "SE",
  };

  const targetCollection = collectionMap[collection];
  return watches.filter((item) => item.collection === targetCollection);
};


export const uploadCanvasToCloudinary = async () => {
  try {
    const watchImage = "/assets/sideview/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR (1).jpeg";
    const dialImage = "/assets/dials/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF.png";
    const bandImage = "/assets/MYJD3_FV9.jpeg";

    const loadImage = (src) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = src;
      });

    const [watchImg, dialImg, bandImg] = await Promise.all([
      loadImage(watchImage),
      loadImage(dialImage),
      loadImage(bandImage),
    ]);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const canvasWidth = 3840;
    const canvasHeight = 2160;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    const padding = 120;
    const squareRadius = 50;
    const squareColor = "#ffffff";

    const largeSquareSize = 1600;
    const smallSquareSize = 750;

    const largeImageSize = Math.floor(largeSquareSize * 0.95);
    const smallImageSize = Math.floor(smallSquareSize * 0.95);

    const totalWidth = largeSquareSize + padding + smallSquareSize;
    const startX = (canvasWidth - totalWidth) / 2;

    const drawRoundedRect = (x, y, width, height) => {
      ctx.beginPath();
      ctx.moveTo(x + squareRadius, y);
      ctx.arcTo(x + width, y, x + width, y + height, squareRadius);
      ctx.arcTo(x + width, y + height, x, y + height, squareRadius);
      ctx.arcTo(x, y + height, x, y, squareRadius);
      ctx.arcTo(x, y, x + width, y, squareRadius);
      ctx.closePath();
      ctx.fill();
    };

    const leftSquareX = startX;
    const leftSquareY = (canvasHeight - largeSquareSize) / 2;

    ctx.fillStyle = squareColor;
    drawRoundedRect(leftSquareX, leftSquareY, largeSquareSize, largeSquareSize);

    const watchX = leftSquareX + (largeSquareSize - largeImageSize) / 2;
    const watchY = leftSquareY + (largeSquareSize - largeImageSize) / 2;
    ctx.drawImage(watchImg, watchX, watchY, largeImageSize, largeImageSize);

    const rightSquareX = startX + largeSquareSize + padding;
    const verticalGap = 60;
    const rightSquareY1 = (canvasHeight - (2 * smallSquareSize + verticalGap)) / 2;
    const rightSquareY2 = rightSquareY1 + smallSquareSize + verticalGap;

    ctx.fillStyle = squareColor;
    drawRoundedRect(rightSquareX, rightSquareY1, smallSquareSize, smallSquareSize);

    const dialX = rightSquareX + (smallSquareSize - smallImageSize) / 2;
    const dialY = rightSquareY1 + (smallSquareSize - smallImageSize) / 2;
    ctx.drawImage(dialImg, dialX, dialY, smallImageSize, smallImageSize);

    drawRoundedRect(rightSquareX, rightSquareY2, smallSquareSize, smallSquareSize);

    const bandX = rightSquareX + (smallSquareSize - smallImageSize) / 2;
    const bandY = rightSquareY2 + (smallSquareSize - smallImageSize) / 2;
    ctx.drawImage(bandImg, bandX, bandY, smallImageSize, smallImageSize);

    ctx.fillStyle = "#666666";
    ctx.font = "32px sans-serif";

    const watermarkText1 = "Build by https://x.com/oyemehraxyz";
    const watermarkX = canvasWidth - 750;
    const watermarkY1 = canvasHeight - 80;
    ctx.fillText(watermarkText1, watermarkX, watermarkY1);

    const watermarkText2 = "https://www.linkedin.com/in/shubhammehracs/";
    const watermarkY2 = canvasHeight - 40;
    ctx.fillText(watermarkText2, watermarkX, watermarkY2);

    const blob = await new Promise((resolve) => 
      canvas.toBlob(resolve, "image/png")
    );

    const formData = new FormData();
    formData.append('file', blob);
    formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
    formData.append('timestamp', Math.round((new Date).getTime()/1000));
    formData.append('upload_preset', 'apple-studio');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Upload failed');
    }

    const result = await response.json();
    console.log("Upload successful:", result);
    return { success: true, url: result.secure_url };

  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return { success: false, error: error.message };
  }
};