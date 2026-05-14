const path = require("path");
const fs = require("fs/promises");

const books_path = path.join(__dirname, "books.json");

// Exercise 1
async function initShelf() {
    try {
        await fs.access(books_path);
    } catch (err) {
        console.error(err);
        await fs.writeFile(books_path, JSON.stringify([]));
    }
}

// Exercise 2
async function addBook(title, author, year) {
    const book_object = {
        id: crypto.randomUUID(),
        title: title,
        author: author,
        year: year,
    };
    try {
        const books_arr = JSON.parse(await fs.readFile(books_path));
        books_arr.push(book_object);
        await fs.writeFile(books_path, JSON.stringify(books_arr));
    } catch (err) {
        console.error(err);
    }
}

// Exercise 3
async function findBooksByAuthor(author) {
    try {
        const books_arr = JSON.parse(await fs.readFile(books_path));
        for (let book of books_arr) {
            if (book.author == author) {
                console.log(book);
            }
        }
    } catch (err) {
        console.error(err);
    }
}

// Exercise 4
async function issueBook(id) {
    try {
        const books_arr = JSON.parse(await fs.readFile(books_path));
        for (let book of books_arr) {
            if (book.id == id) {
                book.isIssued = true;
            }
        }
        await fs.writeFile(books_path, JSON.stringify(books_arr));
    } catch (err) {
        console.error(err);
    }
}

// Exercise 5
async function deleteOldBooks(currentYear) {
    try {
        const books_arr = JSON.parse(await fs.readFile(books_path));
        books_arr.map((value, index) => {
            if (currentYear - value.year > 50) {
                books_arr.splice(index, 1);
            }
        });
        await fs.writeFile(books_path, JSON.stringify(books_arr));
    } catch (err) {
        console.error(err);
    }
}

// initShelf();

// addBook("123", "abc", 1000);

// findBooksByAuthor("abc")

// issueBook(1);

// deleteOldBooks(2000);
