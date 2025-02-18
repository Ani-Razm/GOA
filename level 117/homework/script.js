// 1) შექმენით მათემატიკის დამხმარე კლასი, ფროფერთიებით ( მაგ: Pi ) და მეთოდებით ( მაგ: ხარისხში აყვანა )
class MathClass {
    static pi = Math.PI;
    static randomNum = Math.trunc(Math.random() * 10);

    static pow(a, b) {
        return a ** b;
    }

    static multiply(...args){
        let result = 1;
        args.forEach((a) => result *= a);
        return result;
    }
}

console.log(MathClass.pi);
console.log(MathClass.randomNum);
console.log(MathClass.pow(2, 2));
console.log(MathClass.multiply(2, 2, 2));

// 2) შექმენით რენდომ დამხმარე კლასი, ფროფერთიებით ( მაგ: CHAR_SET ) და მეთოდები ( მაგ: რენდომ ასო )
class RandomThings {
    static charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
    static nums = '0123456789';
    static get RandomChar() {
        return RandomThings.charSet[Math.floor(Math.random() * RandomThings.charSet.length)];
    }

    static get RandomNum() {
        return RandomThings.nums[Math.floor(Math.random() * RandomThings.nums.length)];
    }
}

console.log(RandomThings.RandomChar);
console.log(RandomThings.RandomNum);

// 3) შექმენით დროის დამხმარე კლასი, ფროფერთიებით ( მაგ: CREATION_TIME ) და მეთოდები ( მაგ: მილიწამების გადაყვანა წასაკითხ დროსი ფორმატში )
// (╯✧∇✧)╯ წარმატებები! *:･ﾟ🌟

class Time {
    static creationTime = new Date();
    
    static readableMillieseconds(s) {
        const milliseconds = s % 1000;
        const seconds = Math.floor(s / 1000) % 60;
        const minutes = Math.floor(s / (1000 * 60)) % 60;
        const hours = Math.floor(s / (1000 * 60 * 60)) % 24;
        const days = Math.floor(s / (1000 * 60 * 60 * 24));
        
        return `${days} days,${hours} hours,${minutes} minutes,${seconds} seconds,${milliseconds} milliseconds`;
    }

    static readableDate() {
        return Time.creationTime.toString()
    }
}

console.log(Time.readableMillieseconds(10000)); 
console.log(Time.readableDate())
console.log(Time.creationTime)