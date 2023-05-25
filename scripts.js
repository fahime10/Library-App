let myLibrary = [];
const newBookBtn = document.getElementById("new-book-btn");
const cancelBtn = document.getElementById("cancel-btn");

function Book(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
}

function renderContent() {
    let library = document.querySelector("#library-container");
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
        bookElement.innerHTML = 
        `<div class=card>
            <h3 class=title>${book.title}</h3>
            <h5 class=author>by ${book.author}</h5>
            <p>Pages: ${book.pages}</p>
            <p class="read">${book.read ? "Read" : "Not Read"}</p>
            <button class="remove-book-btn" onClick="removeBook(${i})">Remove</button>
        </div>`;
        library.appendChild(bookElement);
    }
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let year = document.querySelector("#year").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read");
    
    let newBook = new Book(title, author, year, pages, read.checked);
    myLibrary.push(newBook);
    renderContent();
    console.log(read.checked);
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    renderContent();
}

function viewAddForm() {
    document.querySelector("#add-book").style.display = "flex";
}
newBookBtn.addEventListener("click", viewAddForm);

function removeAddForm() {
    document.querySelector("#add-book").style.display = "none";
    document.querySelector("#add-book").reset();
}
cancelBtn.addEventListener("click", removeAddForm);

document.querySelector("#add-book").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
})

const mazeRunner = new Book("The Maze Runner", "James Dashner", "2009", "222", "yes");
const numberFour = new Book("I am number Four", "Jobie Hughes", "2010", "440", "yes");
const bulletMissed = new Book("The Bullet That Missed", "Richard Osman", "2022", "432", "no");

myLibrary.push(mazeRunner);
myLibrary.push(numberFour);
myLibrary.push(bulletMissed);