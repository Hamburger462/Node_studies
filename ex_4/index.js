const path = require("path");
const fs = require("fs");

const file_path = path.join(__dirname, "orig.txt");
const stream = fs.createWriteStream(file_path, { flags: "a" });

stream.write(`${String(Date.now())}\n`);
stream.write("Line 1\n");
stream.write("Line 2\n");
stream.write("Line 3\n");