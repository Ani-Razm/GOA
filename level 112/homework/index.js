// creating classes
class Books {
    constructor(title, pages, author) {
        this.title = title;
        this.pages = pages;
        this.author = author;
    }

    get info() {
        return `${this.pages} pages, by ${this.author}`;
    }

    reading() {
        return 'reading ' + this.title;
    }


    getTitle() {
        return this.title;
    }
}

class Adventure extends Books {
    constructor(title, pages, author, adventureType, year) {
        super(title, pages, author);
        this.adventureType = adventureType;
        this.year = year;
    }

    getTitle() {
        return this.title + " " + this.year;
    }

    get info() {
        return `${this.pages} pages, by ${this.author}. year: ${this.year}; type: ${this.adventureType}.`;
    }

    get AdventureType() {
        return this.adventureType;
    }
}


class Fantasty extends Books {
    constructor(title, pages, author, FantastyType, cover) {
        super(title, pages, author);
        this.FantastyType = FantastyType;
        this.cover = cover;
    }

    getTitle() {
        return "title: " + this.title;
    }

    get info() {
        return `${this.pages} pages, by ${this.author}. cover: ${this.cover}; type: ${this.FantastyType}.`;
    }

    get coverInfo() {
        return this.cover;
    }
}


class Comedy extends Books {
    constructor(title, pages, author, ComedyType, isPopular) {
        super(title, pages, author);
        this.ComedyType = ComedyType;
        this.isPopular = isPopular;
    }

    getTitle() {
        return "title: " + this.title;
    }

    get info() {
        return `${this.title}: ${this.pages} pages, by ${this.author}. cover: ${this.cover}; type: ${this.ComedyType}.`;
    }

    get isKnown() {
        return this.isPopular ? "This is a very well-known book" : "This book isn't well-known";
    }

    reading() {
        return super.reading() + " with a smile";
    }
}


// creating objects and testing
const book = new Books("To Kill a Mockingbird", 200, "Harper Lee");

console.log(book.getTitle());
console.log(book.info);

const book2 = new Adventure("The Lost City", "John Smith", 200, "treasure hunt", 2020);

console.log(book2.getTitle());
console.log(book2.info);
console.log(book2.adventureType);

const book3 = new Fantasty("The Lost City", "John Smith", 200, "Elderwood", "colorful");

console.log(book3.getTitle());
console.log(book3.info);
console.log(book3.coverInfo);

const book4 = new Comedy("The Lost City", "John Smith", 200, "dark-humor", true);

console.log(book4.getTitle());
console.log(book4.reading());
console.log(book4.isKnown);


// function to display books
function addBook(obj) {
    let books = document.querySelector('.wrapper');
    let book = document.createElement('div');
    book.classList.add('book');
    book.innerHTML = `
    <img src="image.png" alt="book">
    <h2>${obj.getTitle()}</h2>
    <p>${obj.info}</p>
    <button class="read-btn">read</button>
    `;
    books.appendChild(book);

    book.querySelector('.read-btn').addEventListener('click', () => alert(obj.reading()));
}

let books = [book, book2, book3, book4];

for (let i = 0; i < books.length; i++) {
    addBook(books[i]);
}