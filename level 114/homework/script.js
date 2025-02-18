// თერმომეტრი
// შექმენი ობიექტი, რომელიც ინახავს ტემპერატურას ცელსიუსში, მაგრამ როდესაც იღებ მას (getter), აბრუნებს ფარენჰეიტში გადაყვანილ მნიშვნელობას. setter უნდა იღებდეს მხოლოდ ცელსიუსში მნიშვნელობას.
class Thermometer {
    constructor(c) {
        this.c = c;
    }

    get temp() {
        return ((Number(this.c.slice(0, this.c.length - 1)) - 32) * 5 / 9).toFixed(2) + "F";
    }

    set setTemp(temp) {
        if (temp.toLowerCase().includes("c")) {
            this.c = temp;
        } else {
            console.log('enter celsius please');
        }
    }
}

const t = new Thermometer("12c");

console.log(t.temp);

t.setTemp = "20c";
console.log(t.c);

t.setTemp = "20f";

// სტუდენტის შეფასება
// შექმენი ობიექტი, სადაც setter იღებს სტუდენტის ქულას (0-დან 100-მდე) და getter აბრუნებს შეფასებას (A, B, C, D, F).
class Student {
    constructor(n, sn, score = 0) {
        this.n = n;
        this.sn = sn;
        this.score = score;
    }

    set scoreValue(n) {
        if (0 <= n && n <= 100) {
            this.score = n;
        } else {
           this.score = -1;
        }
    }

    get mark() {
        let s = this.score;
        if (s > 90) {
            return "A"
        } else if (s > 80) {
            return "B"
        } else if (s > 70) {
            return "C"
        } else if (s > 60) {
            return "D"
        } else if (s >= 0) {
            return "F"
        } else{                
            return 'Invalid score value';
        }
    }
}

const st = new Student('ani', 'razmi');

st.scoreValue = 100;
console.log(st.mark)

st.scoreValue = 80;
console.log(st.mark)

st.scoreValue = 200;
console.log(st.mark)
console.log(st)


// საიდუმლო პაროლი
// შექმენი ობიექტი, რომელიც ინახავს პაროლს. setter უნდა მიიღოს პაროლი და შეინახოს დაშიფრული სახით, ხოლო getter უნდა აბრუნებდეს "*****"-ს უსაფრთხოების მიზნით.
// (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ წარმატებები! ✨💫

const password = {
    password: '',
    passwordset: function (password){ 
        this.password = password.split("").reverse().join(""); 
    },
    passwordget: function (){ 
        return "*".repeat( this.password.length);
    }
}

password.passwordset('ani');
console.log(password.password);
console.log(password.passwordget());