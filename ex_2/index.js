const path = require("path");
const fs = require("fs");

const file_path = path.join(__dirname, "..", "large_file.txt");

const stream = fs.createReadStream(file_path, {highWaterMark: 512});

let chunk_count = 0;

stream.on("data", () => {
    chunk_count++;
})

stream.on("end", () => {
    console.log(chunk_count);
})