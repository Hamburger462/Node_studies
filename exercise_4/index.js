const path = require("path");
const fs = require("fs");

const dir_path = path.join(__dirname, "..", "data");

const dir_content = fs.readdirSync(dir_path);
console.log(dir_content.length);
console.log(dir_content);