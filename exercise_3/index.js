const path = require("path");
const fs = require("fs");

const file_path = path.join(__dirname, "..", "data", "inventory.txt");

try {
    fs.writeFileSync(file_path, "10", { flag: "a" });
} catch {
    console.error("No inventory present");
}
