// 1) შექმენით ფუნქცია რომელსაც გადაეცემა მატრიცა ( 2დ მასივი ) და დააბრუნებს მასივს უნიკალური ელემენტებით (ელემენტი რომელიც მთლიან მასივში ერთხელაა)

function getUniqueElements(matrix) {
    const counter = {};
    matrix.flat().forEach(element => {
        counter[element] = (counter[element] || 0) + 1;
    });
    return Object.keys(counter).filter(key => counter[key] === 1);
}

console.log(getUniqueElements([[1, 2], [1, 1]]));
console.log(getUniqueElements([[1, 2], [3, 1, 1]]));
console.log(getUniqueElements([["a", "b"], ["b", 1, 1]]));

// 2) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგი და დააბრუნებს რომელი ელემენტი (ასო ან ქარაქთერი) ხვდება ყველაზე ხშირად, თუმცა თუ რამოდენიმე ქარაქთერი ერთი და იგივე სიხშირისაა მაშინ მასივში დააბრუნოს ისინი.
// წარმატებები❤️  (მინიშნება: მეორე ამოცანისთვის შეგიძლიათ გამოიყენოთ სიხშირეების მაგიდა, თუმცა სხვა გზებიც არსებობს💜 )

function getMostFrequentCharacters(s) {
    // creating the characters frequencies table
    const frequenciesTable = {};

    for (let char of s) {
        // if the character is already in the frequencies table, then its value will be incremented. else, a new key will be created with the value of 1.
        frequenciesTable[char] = (frequenciesTable[char] || 0) + 1;
    }

    // calculating the max value
    const maxValue = Math.max(...Object.values(frequenciesTable));

    // returning the most frequent characters
    return Object.keys(frequenciesTable).filter(key => frequenciesTable[key] === maxValue);
}

console.log(getMostFrequentCharacters("hello wwworld"));