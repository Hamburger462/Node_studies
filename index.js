const path = require("path");
const fs = require("fs/promises");

const storage_path = path.join(__dirname, "storage");

// Exercise 1
async function setup() {
    const status_path = path.join(storage_path, "status.txt");

    try {
        console.log(await fs.readdir(storage_path));
    } catch (err) {
        await fs.mkdir(storage_path);
        console.error(err);
    } finally {
        await fs.writeFile(status_path, "System is ready");
    }
}

// Exercise 2
async function readTasks() {
    const task_path = path.join(storage_path, "tasks.txt");

    try {
        console.log(await fs.readFile(task_path, "utf-8"));
    } catch {
        console.log("File not found");
    }
}

// Exercise 3
async function addLog(message) {
    const log_path = path.join(storage_path, "activity.log");

    const current_time = Date();

    try {
        await fs.appendFile(log_path, `${current_time}-${message}`);
    } catch (err) {
        console.error(err);
    }
}

// Exercise 4
async function replaceSource() {
    const source_path = path.join(storage_path, "source.txt");
    const copy_path = path.join(storage_path, "copy.txt");

    try {
        const source_text = await fs.readFile(source_path, "utf-8");
        await fs.writeFile(copy_path, source_text);
        await fs.unlink(source_path);
    } catch (err) {
        console.error(err);
    }
}

// Exercise 5
const files = [
    "activity.log",
    "copy.txt",
    "source.txt",
    "status.txt",
    "env.txt",
];
async function checkAllFiles() {
    const check_promises = files.map(async (file) => {
        const file_path = path.join(storage_path, file);
        try {
            await fs.access(file_path);
            return { file, exists: true };
        } catch {
            return { file, exists: false };
        }
    });

    const results = await Promise.all(check_promises);

    console.log(results);
}

// Testing
setup();

readTasks();

// Testing asynchronous stream
console.log("Hello, World");

addLog("New Log");

replaceSource();

checkAllFiles();
