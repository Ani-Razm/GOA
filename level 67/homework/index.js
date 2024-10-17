// 10 Simple Constructor Exercises
// Basic Constructor with Properties
// Create a Person constructor with properties name and age.
// Add a method introduce() that logs:
// "Hi, I am <name> and I am <age> years old."

// ---
function Person(name, age){
    this.name = name,
    this.age = age,
    this.introduce = function() {
      console.log("Hi, I am " + name + " and i am " + age + " years old")
    };
};

const ani = new Person("ani", 18);
ani.introduce();

// Constructor with Default Parameter Value
// Create a Book constructor with parameters title and author.
// If no author is provided, set it to "Unknown".
// Add a method getDetails() to print the book's details.

function Book(title, author = "Unknown") {
    this.title = title,
    this.author = author;
    this.getDetails = function() {
      console.log("title: " + title + ", author: " + author)
    }
}

const jeanEyre = new Book("Jean Eyre", "Charlotte Bronte");
jeanEyre.getDetails()

// ---

// Constructor with Arrays
// Create a Classroom constructor that takes an array of students.
// Add a method countStudents() to log the number of students in the array.

function Classroom(students) {
  this.students = students,
  this.countStudents = function() {
    console.log(this.students.length)
  }
}

const a1 = new Classroom(["ani", "luka", "ani", "nini", "giorgi", "tornike"])
a1.countStudents()

// ---

// State Management with Constructor
// Create a Counter constructor with an initial value of 0.
// Add methods increment() and getValue() to increase the counter by 1 and retrieve the current value.

function Counter() {
  this.value = 0,
  this.increment = function () {
    this.value += 1
  },
  this.getValue = function () {
    return this.value
  }
};

const num1 = new Counter();

num1.increment();
num1.increment();
console.log(num1.getValue());


// ---

// Constructor with Boolean State
// Create a Light constructor with a state property initialized to "off".
// Add a method toggle() to switch the state between "on" and "off".

function Light() {
  this.state = "off",
  this.toggle = function () {
    if(this.state == "off") {
      this.state = "on";
    } else {
      this.state = "off";
    };
  };
};

const light = new Light();

light.toggle();
console.log(light.state);
light.toggle();
console.log(light.state);


// ---

// Product Constructor with Properties
// Create a Product constructor with properties name and price.
// Add a method getDetails() to log:
// "Product: <name>, Price: <price> USD"

function Product(name, price) {
  this.name = name,
  this.price = price,
  this.getDetails = function () {
    console.log("Product: " + name + ", Price: " + price + " USD")
  };
};

const product = new Product("banana", "5");

product.getDetails();


// ---

// Constructor with Object Properties
// Create a User constructor with properties username and contact (an object containing email and phone).
// Add a method getContactInfo() to print the user’s contact information.

function User(username, contact) {
  this.username = username,
  this.contact = contact,
  this.getContactInfo = function () {
    console.log("contact: " + contact)
  };
};

const ani1 = new User("Ani12", "52612891279, sahbda@gmail.com");

ani1.getContactInfo();

// ---

// Constructor with Array of Objects
// Create a Library constructor that takes an array of book objects (each with title and author).
// Add a method listBooks() to print all books in the library.
function Library(books) {
  this.books = books;
  this.listBooks = function () {
    console.log(this.books)
  };
};

const book1 = {
  author: "J. K. Rowling",
  tittle: "harry potter"
};

const book2 = {
  author: "leo tolstoy",
  tittle: "ana karenina"
};


const library1 = new Library([book1, book2]);
library1.listBooks();

// ---

// Cart Constructor with Array Management
// Create a Cart constructor with an empty items array.
// Add methods addItem(item) to add an item and getItems() to print all items.

function Cart() {
  this.items = [];
  this.addItems = function (item) {
    this.items.push(item);
  }
  this.getItems = function () {
    console.log(this.items)
  };
};

const cart = new Cart();
cart.addItems("banana");
cart.addItems("apple");
cart.getItems();

// ---

// Conditional Logic in Constructor
// Create a Student constructor with properties name and marks (an array of numbers).
// Add a method hasPassed() that returns true if the average mark is 50 or above, otherwise false.

function Student(name, marks) {
  this.name = name;
  this.marks = marks;
  this.hasPassed = function () {
    return marks >= 50;
  };
};

const ani2 = new Student("ani", 40);
console.log(ani2.hasPassed());

// ---