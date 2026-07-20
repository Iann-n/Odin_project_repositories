// DOM manipulations

// element declarations
const newBookBtn = document.getElementById("new-book-btn");
const closeBookBtn = document.getElementById("cancel-btn");
const submitBtn = document.getElementById("submit-btn");
const dialog = document.getElementById("book-dialog");

newBookBtn.addEventListener("click", () => {
    dialog.showModal();
})

closeBookBtn.addEventListener("click", () => {
    displayBooks();
    dialog.close();
})

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);

    displayBooks();

    dialog.close();
})

// Main algorithm
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

console.log(myLibrary);

function displayBooks() {
    const container = document.getElementById("library-container");
    container.innerHTML = "";
    myLibrary.forEach(book => {
        
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.dataset.id = book.id;

        const title = document.createElement("h2");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;

        const read = document.createElement("p");
        read.textContent = `Read: ${book.read}`

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Delete";
        removeBtn.addEventListener("click", () => {
            for (let i = 0; i < myLibrary.length; i++)
            {
                if (myLibrary[i].id === book.id)
                {
                    myLibrary.splice(i, 1);
                    break;
                }
            }

            displayBooks();
        });

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Modify Read";
        Book.prototype.toggleRead = function () {
            this.read = !this.read
        }
        toggleBtn.addEventListener("click", () => {
            book.toggleRead();
            displayBooks();
        })

        card.append(title, author, pages, read, removeBtn, toggleBtn);

        container.appendChild(card);

    });
}

displayBooks();