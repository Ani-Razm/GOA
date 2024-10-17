//-------------------------------------------------------------
function findAverage(array) {
    if(array.length > 0) {
        sum = 0
     for(let num of array){
       sum += num
     }
    return sum / array.length   
    }
    return 0
  }

//-------------------------------------------------------------
function smash (words) {
    return words.join(" ")
 };

//-------------------------------------------------------------

function abbrevName(name){
    name = name.split(" ")
    return name[0][0].toUpperCase() + "." + name[1][0].toUpperCase()
 }

//-------------------------------------------------------------
function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U")
  }

//-------------------------------------------------------------
function getCount(str) {
    count = 0
    for(let l of str){
      if(l == "a" || l == "e" || l == "i" || l == "o" || l == "u"){
        count += 1
      }
    }
    return count
  }

//-------------------------------------------------------------
var John = {
  name: "John",
  age: 25
};
var James = {
  name: "James",
  age: 21
};