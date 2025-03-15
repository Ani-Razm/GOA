// Set-ების დავალებები
// ნაკრებების გაერთიანება
// დაწერე ფუნქცია, რომელიც მიიღებს ნაკრებების მასივს და დააბრუნებს მათ გაერთიანებას.
// მაგალითი:
// ნაკრებებისგაერთიანება([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]); 
// // შედეგი: Set {1, 2, 3, 4}

function joinSets(arr) {
    const result = new Set();
    for (let set of arr) {
        for (let e of set) {
            result.add(e);
        }
    }
    return result;
}

console.log(joinSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]))

// 3)
// შექმენი ფუნქცია, რომელიც იპოვის ორ ნაკრებებს შორის სიმეტრიულ სხვაობას (ელემენტები, რომლებიც ერთ-ერთშია, მაგრამ არა ორივეში).
// მაგალითი:

function difference(set1, set2){
    const result = new Set(set1);
    for(let elem of set2){
        if(result.has(elem)){
            result.delete(elem);
        } else {
            result.add(elem);
        }
    }
    return result;
}

console.log(difference(new Set([1, 2, 3]), new Set([3, 4, 5])));
// სიმეტრიულისხვაობა(new Set([1, 2, 3]), new Set([3, 4, 5]));
// // შედეგი: Set {1, 2, 4, 5}


// 4) სიმბოლოების სიხშირე
// დაწერე ფუნქცია, რომელიც მიიღებს სტრინგს და დააბრუნებს რუკას, სადაც გასაღებები სიმბოლოებია, ხოლო მნიშვნელობები – მათი სიხშირეები.
// მაგალითი:

function counterMap(s) {
    const result = new Map();
    for (let l of s) {
        if (result.has(l)) {
            result.set(l, result.get(l) + 1);
        } else {
            result.set(l, 1);
        }
    }
    return result;
}

console.log(counterMap('hello'))
// სიმბოლოსიხშირე("hello");
// // შედეგი: Map {'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1}