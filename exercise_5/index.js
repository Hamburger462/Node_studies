const path = require("path");
const fs = require("fs");

const temp_path = path.join(__dirname, "..", "data", "temp_log.txt");

if(fs.existsSync(temp_path)){
    fs.unlinkSync(temp_path);

    const old_path = path.join(__dirname, "..", "data", "inventory.txt");
    const new_path = path.join(__dirname, "..", "data", "inventory_final.txt");

    fs.renameSync(old_path, new_path);
}