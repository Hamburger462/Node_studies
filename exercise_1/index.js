const path = require("path");
const fs = require("fs");

function checkDir(dir_path) {
    if (!fs.existsSync(dir_path)) {
        console.log("DIRECTORY IS NOT PRESENT");
        fs.mkdirSync(dir_path);
    } else {
        console.log("DIRECTORY IS PRESENT");
    }
}

function createFile(file_path) {
    fs.writeFileSync(file_path, "Product name: quantity");
}

const data_path = path.join(__dirname, "..", "data");
const file_path = path.join(__dirname, "..", "data", "inventory.txt");

checkDir(data_path);
createFile(file_path);
