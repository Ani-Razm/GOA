
let age = prompt("enetr your age: ");

if(age >= 18) {
    alert("you are adult")
} else {
    alert("you are kid")
}

//--------------------------------------------------------------

lst = []
evens = []

for(let i = 1; i < 30; i++){
    lst.push(i)
    if(i % 2 == 0){
        evens.push(i)
    }
}

console.log(lst)
console.log(evens)