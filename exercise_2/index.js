const path = require("path");
const fs = require("fs");

const file_path = path.join(__dirname, "..", "data", "inventory.txt");

try {
    console.log(fs.readFileSync(file_path, "utf-8"));
} catch {
    console.error("No inventory present");
}
