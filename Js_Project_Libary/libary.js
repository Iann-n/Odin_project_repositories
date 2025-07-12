const myLibary = []

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.id = crypto.randomUUID();
        this.read = false;
    }
}

function addBookToLibary(title, author, year) {
    const book = new Book(title, author, year);
    myLibary.push(book);
    return;
}

libaryGrid = document.querySelector('.libaryGrid')
function displayLibary() {
    
    console.log(myLibary)
    for (const book of myLibary) {
        card = document.createElement('div');
        card.dataset.id = book.id;
        card.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Year: ${book.year}</p>
        <p>Read Status: ${book.read ? 'Read' : 'Not Read'}</p>
        <button class="removeBook">Remove Book</button>
        <button class="readBook">Mark as Read</button>`

        const readButton = card.querySelector('.readBook')
        readButton.addEventListener('click', (e) => {
            const bookId = e.target.parentElement.dataset.id;
            console.log(bookId);
            const book = myLibary.find(book => book.id === bookId);
            console.log(book);
            if (book) {
                book.read = true;
                displayLibary();
            }
    })
        const removeButton = card.querySelector('.removeBook')
        removeButton.addEventListener('click', (e) => {
        const bookId = e.target.parentElement.dataset.id;
        const index = myLibary.findIndex(book => book.id === bookId);
        console.log(index)
        if (index !== -1) {
            myLibary.splice(index, 1);
            displayLibary();
        }
        })

        libaryGrid.appendChild(card);
    }
}

form = document.querySelector('#formPopup')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    title = document.querySelector('#inputBookName').value;
    author = document.querySelector('#inputYear').value;
    year = document.querySelector('#inputAuthor').value;
    addBookToLibary(title, author, year);
    displayLibary();
})
