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

function addBookToLibrary() {

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

const mazeRunner = new Book("The Maze Runner", "James Dashner", "2009", "222", "yes");
const numberFour = new Book("I am number Four", "Jobie Hughes", "2010", "440", "yes");
const bulletMissed = new Book("The Bullet That Missed", "Richard Osman", "2022", "432", "no");

myLibrary.push(mazeRunner);
myLibrary.push(numberFour);
myLibrary.push(bulletMissed);

console.log(myLibrary);