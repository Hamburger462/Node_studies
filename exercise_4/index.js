const path = require("path");

const files = ["photo.jpg", "document.pdf", "music.mp3", "script.js"];

files.forEach((file) => {
    const file_path = path.join(__dirname, "uploads", file);

    console.log(path.parse(file_path));
})