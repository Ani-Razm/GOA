// 1) შექმენით წიგნების კლასი ორი ჩვეულებრივი მეთოდით, ერთი გეთერ მეტოით და სამი ფროფერთით.
//  შექმენით სამი წიგნის ჟანრის კლასი (მაგ. სათავგადასავლო, სატირა, ფანტაზია), სამივე მემკვიდრე წიგნის კლასის. 
// თითოეულს უნდა ჰქონდეს ერთი მშობელი კლასის მთლიანად შეცვლილი მეთოდი, 
// მეორე ერთ ერთ მეთოდზე დაშეენებული მეთოდი ( მშობელი კლასის მეთოდი + ახალი ფუნქციონალი ), 
// და ერთი სრუილად ახალი, უნიკლარი მეთოდი. 
// ასევე თითოეულს უნდა ჰქონდეს ორი ახალი ფროფერთი.

class Books {
    constructor(title, pages, author){
        this.title = title;
        this.pages = pages;
        this.author = author;
    }

    get info() {
        return `${this.title}: ${this.pages} pages, by ${this.author}`;
    }

    reading() {
        console.log('reading ' + this.title);
    }

    getTitle() {
        return this.title;
    }
}

const book = new Books("To Kill a Mockingbird", 200, "Harper Lee");

console.log(book.getTitle());
console.log(book.info);

class Adventure extends Books {
    constructor(title, pages, author, adventureType, year){
        super(title, pages, author);
        this.adventureType = adventureType;
        this.year = year;
    }

    getTitle() {
        return this.title + " " + this.year;
    }

    get info() {
        return `${this.title}: ${this.pages} pages, by ${this.author}. year: ${this.year}; type: ${this.adventureType}.`;
    }

    get AdventureType() {
        return this.adventureType;
    }  
}

const book2 = new Adventure("The Lost City", "John Smith", 200, "treasure hunt", 2020);

console.log(book2.getTitle());
console.log(book2.info);
console.log(book2.adventureType);

class Fantasty extends Books {
    constructor(title, pages, author, FantastyType, cover){
        super(title, pages, author);
        this.FantastyType = FantastyType;
        this.cover = cover;
    }

    getTitle() {
        return "title: " + this.title;
    }

    get info() {
        return `${this.title}: ${this.pages} pages, by ${this.author}. cover: ${this.cover}; type: ${this.FantastyType}.`;
    }

    get coverInfo() {
        return this.cover;
    }  
}

const book3 = new Fantasty("The Lost City", "John Smith", 200, "Elderwood", "colorful");

console.log(book3.getTitle());
console.log(book3.info);
console.log(book3.coverInfo);

class Comedy extends Books {
    constructor(title, pages, author, ComedyType, isPopular){
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
}

const book4 = new Comedy("The Lost City", "John Smith", 200, "dark-humor", true);

console.log(book4.getTitle());
console.log(book4.info);
console.log(book4.isKnown);