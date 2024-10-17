// 8 Kyu

// 1)
// https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
function booleanToString(b){
    return String(b)
  }

// 2)
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
function digitize(n) {
  let result = [];
  for(num of n.toString().split("").reverse()){
    result.push(Number(num))
  }
  return result
}

// 3)
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
function getGrade (s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
  if(90 <= score && score <= 100){
     return "A"
   } 
  else if(80 <= score && score < 90){
      return "B"
   }
  else if(70 <= score && score < 80){
      return "C"
   }
  else if(60 <= score && score < 70){
      return "D"
   }
  else if(0 <= score && score < 60){
      return "F"
   }
}; ////////////////////////-------

// 4)
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
const areaOrPerimeter = function(l , w) {
  if(l !== w) {
    return (l + w) * 2;
  } else {
    return l * w
  }
};


// 7 Kyu

// 1)
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
function dnaStrand(dna){
  let result = ""
  for(l of dna){
    if(l == "A"){
      result += ("T")
    } else if( l == "T"){
      result += ("A")
    } else if(l == "C"){
      result += ("G")
    } else if(l == "G"){
      result += ("C")
    }
  }
  return result
}

// 2)
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
function reverseWords(str) {
  str = str.split(" ");
  let result = [];
  for(let word of str){
    result.push(word.split("").reverse().join("")); 
  }
    return result.join(" ")
}

// 3)
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num){
  result = ""
  for(let digit of String(num)){
    result += Number(digit) ** 2
  }
  return Number(result)
}

// 4)
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
String.prototype.toJadenCase = function () {
  let result = [];
  for(let word of this.split(" ")){
    result.push(word[0].toUpperCase() + word.slice(1))
  };
  return result.join(" ")
};/////////////////////--------
