// 1) სტუდენტების სახელებისა და ქულების შენახვა Map-ში
// აღწერა: შექმენით ფუნქცია, რომელიც მიიღებს სტუდენტების სიას (სახელები და ქულები) და Map-ს დააბრუნებს, სადაც სტუდენტების სახელები იქნება გასაღები, ხოლო მათი ქულები მნიშვნელობები.

function toMap(students){
    const result = new Map();
    for(let student of students){
        result.set(student.name, student.score);
    }
    return result;
}

console.log(toMap([{name: 'ani', score: 100}, {name: 'bani', score: 0}, {name: 'laki', score: 60}]))

// 2) შექმენით ფუნქცია, რომელიც მასივიდან დუბლიკატ ელემენტებს წაშლის და ახალ უნიკალურ მასივს დააბრუნებს.

function removeDubs(arr){
    return [...new Set(arr)];
}

console.log(removeDubs([1,2,2,3,4,4,4]))

// 3) დაწერეთ ფუნქცია, რომელიც მიიღებს სტუდენტების ქულების Map-ს, შექმნის მისი ასლს, თითოეული სტუდენტის ქულას გაზრდის 5 ქულით და ასლ Map-ს დააბრუნებს.
// (✨◡✨)   წარმატებები! *:･ﾟ🌟

function add5(students){
    result = new Map();
    students.forEach((score, name) => {
        result.set(name, score + 5);
    });
    return result;
}

const studentMap = new Map([
    ["ani", 85],
    ["bani", 90],
    ["laki", 78]
]);

console.log(add5(studentMap))