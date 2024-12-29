// 1) შექმენით ობიექტი და გამოიტანეთ მისი ინფორმაცია შემდეგი ფორმატით ( key: value )
// Bonus) გააკეთეთ იგივე თუმცა გამოიტანეთ ინფორმაცია თუ value-ს 5-ზე ნაკლები ასო აქვს 

obj = {
    name: "ani",
    surname: "razmadze",
    age: 18,
};

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
};

for (let key in obj) {
    if (obj[key].length < 5) {
        console.log(`${key}: ${obj[key]}`);
    }
};