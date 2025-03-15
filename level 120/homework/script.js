// ქვნენაკრების შემოწმება
// დაწერე ფუნქცია, რომელიც შეამოწმებს, არის თუ არა ერთი ნაკრები მეორის ქვნენაკრები.
// მაგალითი:
// არისქვნენაკრები(new Set([1, 2]), new Set([1, 2, 3])); 
// // შედეგი: true 

function isSubset(set1, set2) {
    if (set1.size > set2.size) {
        return isSubset(set2, set1); // recursion
    }
    for (let l of set1) {
        if (!set2.has(l)) {
            return false;
        }
    }
    return true;
}

console.log(isSubset(new Set([1, 3]), new Set([1, 2, 3]))) // true
console.log(isSubset(new Set([1, 4, 2, 3]), new Set([1, 4]))) // true

// რუკის ინვერტირება
// დაწერე ფუნქცია, რომელიც გასაღებებს და მნიშვნელობებს შეცვლის ადგილმონაცვლეობით რუკაში. თუ მნიშვნელობები მეორდება, დაიტოვე ბოლო გასაღები.
// მაგალითი:
// ინვერტირებულრუკა(new Map([['a', 1], ['b', 2], ['c', 1]])); 
// // შედეგი: Map {1 => 'c', 2 => 'b'}

function swap(map) {
    result = new Map();
    for (let [key, value] of map) {
        result.set(value, key);
    }
    return result;
}

console.log(swap(new Map([['a', 1], ['b', 2], ['c', 1]]))) // {1 => 'c', 2 => 'b'}

// მაქსიმალური მნიშვნელობის გასაღებების პოვნა
// დაწერე ფუნქცია, რომელიც იპოვის ყველა გასაღებს რუკაში, რომელთაც აქვთ მაქსიმალური მნიშვნელობა.
// მაგალითი:
// მაქსიმალურისგასაღებები(new Map([['a', 5], ['b', 3], ['c', 5]])); 
// // შედეგი: ['a', 'c']

// function for finding max number in array
function max(arr) {
    max_num = arr[0];
    for (let num of arr) {
        if (num > max_num) {
            max_num = num;
        }
    }
    return max_num;
}

// function for finding keys with max values
function findMax(map) {
    let max_value = max(Array.from(map.values()));
    let result = [];
    for (let [key, value] of map) {
        if (value === max_value) {
            result.push(key);
        }
    }
    return result;
}

console.log(findMax(new Map([['a', 5], ['b', 3], ['c', 5]]))) // [ 'a', 'c' ]