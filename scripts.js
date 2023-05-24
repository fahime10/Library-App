let myLibrary = [];

function Book(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
}

const mazeRunner = new Book("The Maze Runner", "James Dashner", "2009", "222", "yes");

console.log(mazeRunner.info);