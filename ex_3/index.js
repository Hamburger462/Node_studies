const path = require("path");
const fs = require("fs");

const file_path = path.join(__dirname, "..", "large_file.txt");

const readStream = fs.createReadStream(file_path);

function findWordAndHalt(word) {
    readStream.on("data", async (data) => {
        const foundIndex = data.indexOf(word);

        if(foundIndex == -1) return;

        console.log(`The index of found word is ${foundIndex}`);
        console.log("Timer started");
        readStream.pause();
        await setTimeout(() => {
            console.log("Timer out");
            readStream.resume();
        }, 3000)
    });
}

findWordAndHalt("fox");