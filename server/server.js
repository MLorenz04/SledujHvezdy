const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer"); // Import multer
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: path.join(__dirname, ".././public/images"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }); // Use the configured storage

app.post("/api/v1/star",  upload.single("photo"), (req, res) => {
  const imagesDirectory = path.join(__dirname, ".././public/images");
  const existingFiles = fs.readdirSync(imagesDirectory);

  const newFileName = req.file.originalname;
  const fileExists = existingFiles.includes(newFileName);

  if (!fileExists) {
    const filePath = path.join(imagesDirectory, newFileName);
    const fileData = fs.readFileSync(req.file.path);
    fs.writeFileSync(filePath, fileData);
  }
  res.status(200).json({ message: "File saved" });
});

app.get("*", (req, res) => {
  res.send("owo");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
