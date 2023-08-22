/* Server */
/* Proměnné */
const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const app = express();
const cors = require("cors");
const port = 3001;
const mysql = require("mysql");
const createShort = require("../src/functions/modifyString");
require("../src/functions/modifyString");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mantis",
});
module.exports = db;

/* Zapnutí corsu kvůli ukládání obrázků */
app.use(cors());

/* Funkce na založení storage na fotky ve složce images na publicu, aby se k nim dalo dostat */
const createDiskStorage = (directory) => {
  return multer.diskStorage({
    destination: path.join(__dirname, directory),
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
};

/* Přístup ke storage */
const star_storage = multer({
  storage: createDiskStorage(".././public/images/stars"),
});
const planet_storage = multer({
  storage: createDiskStorage(".././public/images/planets"),
});

/* Api na přidání hvězdy */
app.post("/api/v1/star", star_storage.single("photo"), (req, res) => {
  const star = JSON.parse(req.body.star);
  const short = createShort(star.title);
  res.status(200).json({ message: "File saved" });
  db.query(
    "INSERT INTO stars (title, const, content, img, short) VALUES (?,?,?,?,?)",
    [star.title, star.cons, star.desc, star.img, short]
  );
});

/* Select hvězd */
app.get("/api/v1/stars", (req, res) => {
  db.query("SELECT * FROM stars", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

/* Vložení planety */
app.post("/api/v1/planet", planet_storage.single("photo"), (req, res) => {
  const planet = JSON.parse(req.body.planet);
  const short = createShort(planet.title);
  res.status(200).json({ message: "File saved" });
  db.query(
    "INSERT INTO planets (title, short, nickname, content, img) VALUES (?,?,?,?)",
    [planet.title, short, planet.nickname, planet.content, planet.img]
  );
});

/* Select planet */
app.get("/api/v1/planets", (req, res) => {
  db.query("SELECT * FROM planets", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

app.get("/api/v1/hvezda/:name", (req, res) => {
  const short = req.params.name;
  db.query("SELECT * FROM stars where short ='" + short + "'", (err, rows) => {
    rows.length > 0
      ? res.status(200).json(rows)
      : res.status(400).send("Hvezda nenalezena");
  });
});

/* Spuštění serveru */
app.listen(port, () => {
  console.log(`Server běží na portu ${port}`);
});
