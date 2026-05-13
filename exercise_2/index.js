const path = require("path");

const info = path.join(__dirname, "data", "info.txt");
console.log(info);

console.log(path.parse(info));