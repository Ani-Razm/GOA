// 2) შექმენით პროგრამა რომელელიც მომხამრებელს შეამოაყვანინებს ორ რიცხვს და გამოიტანს მათ ნამრავლს, თუ მომხმარებელმა ოპერაციის შემდეგ შეიყვანა 'exit' მაშინ გამოიყვანეთ ის პროგრამიდან თუ არადა გააგრძელეთ სანამ მომხმარებელი 'exit'-ს არ შეიყვანს 

const exit = false;

while (!exit) {
    const num1 = Number(prompt('enter num1: '));
    const num2 = Number(prompt('enter num2: '));
    alert(num1 + num2);
    const answer = prompt('do you want to continue? yes/no');
    if (answer == 'no') {
        exit = true;
    } 
}