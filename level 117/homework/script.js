// 1) შექმენით მათემატიკის დამხმარე კლასი, ფროფერთიებით ( მაგ: Pi ) და მეთოდებით ( მაგ: ხარისხში აყვანა )
class MathClass {
    static pi() {
        return Math.PI;
    }

    static pow(a, b) {
        return a ** b;
    }

    static multiply(...args){
        let result = 1;
        args.forEach((a) => result *= a);
        return result;
    }
}

console.log(MathClass.pi());
console.log(MathClass.pow(2, 2));
console.log(MathClass.multiply(2, 2, 2));

// 2) შექმენით რენდომ დამხმარე კლასი, ფროფერთიებით ( მაგ: CHAR_SET ) და მეთოდები ( მაგ: რენდომ ასო )
class RandomThings {
    static Charset
}

// 3) შექმენით დროის დამხმარე კლასი, ფროფერთიებით ( მაგ: CREATION_TIME ) და მეთოდები ( მაგ: მილიწამების გადაყვანა წასაკითხ დროსი ფორმატში )
// (╯✧∇✧)╯ წარმატებები! *:･ﾟ🌟