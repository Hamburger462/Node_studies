const path = require("path");

const file_path = path.join(__dirname, "..", "config", "app.json");

const file = path.parse(file_path);

console.log(file.name, file.ext);