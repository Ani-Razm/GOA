// Easy
// დავალება NUM 1: შექმენი ფუნქცია, რომელიც მიიღებს რიცხვს და პირობით შეამოწმებს, არის თუ არა ის კენტი ან ლუწი.

function evenOrOdd(num) {
    if(num % 2 == 0){
        return "even"
    } else { 
        return "odd"
    }
}

console.log(evenOrOdd([2]))

// დავალება NUM 2: შექმენი პირობა, რომელიც შეამოწმებს, არის თუ არა სია ცარიელი და თუ არა, იპოვოს რიცხვების ჯამი.

function sumOfLst(lst) {
    if(lst.length == 0) {
        return "list is empthy"
    } else {
        sum = 0
        for(num of lst)[
            sum += num
        ]
        return sum
    }
}

console.log(sumOfLst([1,2,3]))

// დავალება NUM 3: შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას, გაამრავლებს ყველა რიცხვს 3-ზე და დაიბრუნებს მხოლოდ იმ რიცხვებს, 
// რომლებიც 20-ზე მეტია.

function over20(nums) {
    multiply3 = []
    for (let num of nums){
        multiply3.push(num * 3)
    }

    result = []
    for (let num of multiply3) {
        if(num > 20){
            result.push(num)
        }
    }

    return result
}

console.log(over20([1,2,3,4,5,6,7,8]))
// Medium
// დავალება NUM 4: შექმენი პირობა, რომელიც შეამოწმებს სიაში უდიდეს რიცხვს და დააბრუნებს მას.
function max(nums){
    max_num = nums[0];
    for(let num of nums){
        if(max_num < num){
            max_num = num;
        };
    }
    return max_num
}

console.log(max([1,9,3]))

// დავალება NUM 5: დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და პირობით შეამოწმებს, თუ მათი ნამრავლი 100-ზე მეტია.
function is100(num1, num2) {
    return num1 * num2 > 100
}

console.log(is100(2,40))

// Chad
// დავალება NUM 6: შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და შეამოწმებს, თუ ტექსტის პირველ და ბოლო ასოები ერთნაირია.
function startEndSame(str) {
    return str[0] == str[str.length - 1]
}

console.log(startEndSame("ani"))

// დავალება NUM 7: შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და დააბრუნებს თითოეული ასოს სიხშირეს, ანუ რამდენჯერ გვხვდება თითოეული ასო ტექსტში.
function counter(str){
   dict = {}

   for(let letter of str)
   if(dict[letter]) {
    dict[letter] ++
   } else [
    dict[letter] = 1
   ];

   return dict;
}

console.log(counter("anii"))

// Giga chad
// დავალება NUM 8: შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და შეამოწმებს, არის თუ არა ის პალინდრომი (ტექსტი, რომელიც წაკითხვისას ერთნაირად ჩანს როგორც წინ და უკან, მაგალითად: "level").

function palindrome(word){
   return word.split("").reverse().join("") == word;
}

console.log(palindrome("anni")) 