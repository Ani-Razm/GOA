// 2) გავაკეთოთ ფუნქცია როემლსაც გადაეცემა ობიექტების მასივი და გამოაქვს ყველა გასაღებ მნიშვნელობა შემდეგი ფორმატით: " key: value ".
// მაგ: [{name: 'lasha', age: 30}, {name: 'merabi', age: 15} ] --->
// name: lasha
// age: 30
// name: merabi
// age: 15

function allKeys(arr) {
    for (let obj of arr) {
        for (let key in obj) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

allKeys([{ name: 'lasha', age: 30 }, { name: 'merabi', age: 15 }])

// 3) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგი და აბრუნებს სიხშირეების ცხრილს.

function frequences(arr) {
    const result = {}
    for (let char of arr) {
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result
}

console.log(frequences([2, -1, 1, 2, 4, 4, 4]))