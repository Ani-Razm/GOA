function Pet(color, size, fluffy) {
    this.color = color;
    this.size = size;
    this.fluffy = fluffy;
};

const laki = new Pet("white", "small", true);
console.log(laki);

const chiko = new Pet("white and yellow", "medium", false);
console.log(chiko);

const killua = new Pet("white", "small", true);
console.log(killua);

const tesa = new Pet("brown, white, orange", "medium", true);
console.log(killua);

const kapu = new Pet("kapucino", "medium", true);
console.log(killua);

//კონსტუნსტრუქტორი არის ფუნქცია რომლითაც ჩვენ ვქმნით ახალ ობიექტებს, ხოლო new ქეივორდით ჩვენ ვაწვდით კონსტრუქტორს ცარიელ ობიექტს სადაც ის ჩაამატებს კუთვნილებებს და მნიშვნელობებს.


// ---

// ### 1. **Basic Constructor**
//    - Create a constructor function `Person` that takes two parameters: `name` and `age`.
//    - Add a method `introduce()` that logs:  
//      `"Hi, I am <name> and I am <age> years old."`

//    **Example Input:**
//    ```javascript
//    const person1 = new Person('Alice', 25);
//    person1.introduce();
//    // Output: Hi, I am Alice and I am 25 years old.
//    ```

    function Person(name, age){
        this.name = name;
        this.age = age;
        this.introduce = function() {
            console.log("Hi, I am " + name + " and i am " + age + " years old.")
        }
    }

    const person1 = new Person('Alice', 25);
    person1.introduce();


// ---

// ### 2. **Constructor with Default Values**
//    - Create a constructor function `Car` with parameters `brand` and `year`.
//    - If the `year` isn't provided, set a default value of `2020`.
//    - Add a method `describe()` to print:  
//      `"This is a <brand> from <year>."`

//    **Example Input:**
//    ```javascript
//    const car1 = new Car('Toyota', 2018);
//    car1.describe(); // Output: This is a Toyota from 2018.

//    const car2 = new Car('Ford');
//    car2.describe(); // Output: This is a Ford from 2020.
//    ```

function Car(brand, year = "2020") {
    this.brand = brand;
    this.year = year;
    this.describe = function() {
       console.log("This is a " + brand + " from " + year) ;
    }
}

   const car1 = new Car('Toyota', 2018);
   car1.describe(); // Output: This is a Toyota from 2018.

   const car2 = new Car('Ford');
   car2.describe(); // Output: This is a Ford from 2020.



// ---

// ### 3. **Constructor with Arrays as Properties**
//    - Create a `Library` constructor that takes `name` and an array of `books`.
//    - Add a method `listBooks()` to log all books.

//    **Example Input:**
//    ```javascript
//    const myLibrary = new Library('City Library', ['1984', 'To Kill a Mockingbird']);
//    myLibrary.listBooks();
//    // Output: ['1984', 'To Kill a Mockingbird']
//    ```

function Library(name, books) {
    this.name = name;
    this.books = books;
    this.listBooks = function() {
        console.log(this.books);
    }
}

   const myLibrary = new Library('City Library', ['1984', 'To Kill a Mockingbird']);
   myLibrary.listBooks();
   // Output: ['1984', 'To Kill a Mockingbird']

// ---

// ### 4. **Adding Methods Inside a Constructor**
//    - Create a `Rectangle` constructor with parameters `width` and `height`.
//    - Add a method `area()` that returns the area of the rectangle.

//    **Example Input:**
//    ```javascript
//    const rect1 = new Rectangle(10, 5);
//    console.log(rect1.area()); // Output: 50
//    ```

function Rectangle(width, height) {
    this.width = width;
    this.width = height;
    this.area = function() {
        return width * height
    }
}

   const rect1 = new Rectangle(10, 5);
   console.log(rect1.area()); // Output: 50

// ---

// ### 5. **Constructor with Conditional Logic**
//    - Create a `Student` constructor that takes `name` and `marks` (an array of numbers).
//    - Add a method `hasPassed()` that returns `true` if the average of marks is 50 or above; otherwise, `false`.

//    **Example Input:**
//    ```javascript
//    const student1 = new Student('John', [60, 70, 80]);
//    console.log(student1.hasPassed()); // Output: true

//    const student2 = new Student('Jane', [40, 30, 45]);
//    console.log(student2.hasPassed()); // Output: false
//    ```

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
    this.hasPassed = function() {
        let sum = 0;
        for(let i = 0; i < this.marks.lenght; i++){
            sum += this.marks[i]
        }
        return sum >= 50
    };
};

   const student1 = new Student('John', [60, 70, 80]);
   console.log(student1.hasPassed()); // Output: true

   const student2 = new Student('Jane', [40, 30, 45]);
   console.log(student2.hasPassed()); // Output: false

// ---

// ### 6. **Using `this` to Track State**
//    - Create a `Counter` constructor with an initial value of `0`.
//    - Add methods `increment()` and `getValue()` to increase the counter by 1 and retrieve the current value, respectively.

//    **Example Input:**
//    ```javascript
//    const counter = new Counter();
//    counter.increment();
//    counter.increment();
//    console.log(counter.getValue()); // Output: 2
//    ```

function Counter() {
    this.value = 0;
    this.increment = function() {
        this.value ++;
    }
    this.getValue = function() {
        return(this.value)
    }
}

   const counter = new Counter();
   counter.increment();
   counter.increment();
   console.log(counter.getValue()); // Output: 2

// ---

// ### 7. **Using Objects as Constructor Parameters**
//    - Create a `Phone` constructor that takes an object parameter with `brand`, `model`, and `price`.
//    - Add a method `info()` to print the phone’s details:  
//      `"This is a <brand> <model> priced at <price> USD."`

//    **Example Input:**
//    ```javascript
//    const phone1 = new Phone({ brand: 'Apple', model: 'iPhone 13', price: 999 });
//    phone1.info(); 
//    // Output: This is an Apple iPhone 13 priced at 999 USD.
//    ```

function Phone(infos) {
    this.infos = infos;
    this.info = function() {
        console.log("This is a " + this.infos.brand + " " + this.infos.model + " priced at " + this.infos.price + " USD.")
    }
}

   const phone1 = new Phone({ brand: 'Apple', model: 'iPhone 13', price: 999 });
   phone1.info(); 
   // Output: This is an Apple iPhone 13 priced at 999 USD.
// ---