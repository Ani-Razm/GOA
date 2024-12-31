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

    function remove_repeats(arr) {
        let result = []
        for (let e of arr) {
            if (!result.includes(e)) {
                result.push(e);
            }
        }
        return result
    }

    let result = {}

    let arr2 = remove_repeats(arr)

    for (let e of arr2) {
        function count(arr, char) {
            let counter = 0
            for (let e of arr) {
                if (e == char) {
                    counter++;
                }
            }
            return counter
        }

        result[e] = count(arr, e);
    }

    return result
}


console.log(frequences([1, 1, 2, 4, 4, 4]))