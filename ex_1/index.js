const path = require("path");
const fs = require("fs");

const file_path = path.join(__dirname, "..", "large_file.txt");

function readFileWithStream(path){
    const stream = fs.createReadStream(path);

    stream.on("open", () => {
        console.log("File open");
    });

    stream.on("data", (data) => {
        console.log(`The data is ${data.length} characters in length`);
    });

    stream.on("end", () => {
        console.log("Stream ended");
    });
}

readFileWithStream(file_path);