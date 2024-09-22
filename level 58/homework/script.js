// Create an object: Make an object called car with properties like brand, model, and year.
const car = {
    brand : "BMW",
    model : "V5",
    year : 2005,
};

// Access object properties: Using the car object, access the brand and year properties and print them.
console.log(car.brand);
console.log(car.model);
console.log(car.year);

// Add a new property: Add a new property color to the car object.

car.color = "black";
console.log(car);

// Change a property value: Update the year property of the car object to a new value.
car.color = "white"

// Delete a property: Remove the model property from the car object.
delete car.model
console.log(car);

// Object inside an object: Create a new object owner inside the car object with properties like name and age.

const car = {
    owner : {
        name : "ani",
        age: 18,
    },
    brand : "BMW",
    model : "V5",
    year : 2005,
};
