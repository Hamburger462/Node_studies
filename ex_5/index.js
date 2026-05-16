const path = require("path");
const fs = require("fs");

const file_path = path.join(__dirname, "..", "large_file.txt");
const copy_path = path.join(__dirname, "copy_file.txt");

const readStream = fs.createReadStream(file_path);
const writeStream = fs.createWriteStream(copy_path);

const finalStream = readStream.pipe(writeStream);

finalStream.on("finish", () => {
    console.log("Copy complete");
})