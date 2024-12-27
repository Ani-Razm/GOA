const dog = {
    name : "Laki",
    color : "white",
    size: "small",
    breed: "poodle",
    personality: "warm in house, but angry outside"
}

console.log(dog.name)
console.log(dog.color)
console.log(dog.size)
console.log(dog.breed)
console.log(dog.personality)

console.log(dog)

delete dog.size
dog.personality = "warm"

//ობიექტი არის ინფორმაციის ტიპი, რომელშიც ელემენტების მისამართები არის სიტყვები და ამგვარად იმის გაგება თუ რა მნიშვნელობა ინახება რაღაც კონკრეტულ მისამართზე არის უფრო მარტივი. წერტილის ნოტაციით ჩვენ ვაკონკრეტებთ რომელი ობიექტიდან გვინდა კუთვნილების გამოტანა.