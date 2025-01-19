// # 2) შევქმნათ ფუნქცია რომელიც დააბრუნებს პირველ არა განმეორებად ელემეტს მასივში ან სტრინგში.
// # 'hannah' -> false
// # 'abbia' -> "i"

function first_non_repeated(s) {

    function count(arr, e) {
        let counter = 0;
        for (let element of arr) {
            if (element == e) {
                counter++;
            }
        }
        return counter
    }

    for (let l of s) {
        if (count(s, l) == 1) {
            return l
        }
    }

    return false
}

// test cases
console.log(first_non_repeated('hannah')) // false
console.log(first_non_repeated('abbia')) // i

// # 3) ( ვისაც მეორე გაქვთ გაკეთებული ) შევქმნათ ფუნქცია რომელიც იღებს სტრინგს და აბრუნებს ყველაზე გრძელ სტრინგის იმ ნაწილს სადაც ასოები არ მეორდება

function non_repeated_part(s) {

    function has_unique_chars(st) {
        function count(arr, e) {
            let counter = 0;
            for (let element of arr) {
                if (element == e) {
                    counter++;
                }
            }
            return counter
        }

        for (let char of st) {
            if (count(st, char) > 1) {
                return false
            }
        }
        return true
    }

    let longest_non_repeated = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (has_unique_chars(s.slice(i, j + 1)) && s.slice(i, j + 1).length > longest_non_repeated.length) {
                longest_non_repeated = s.slice(i, j + 1);
            }
        }
    }
    return longest_non_repeated
}

// test cases
console.log(non_repeated_part("12341123451")) // 1, 2, 3, 4, 5
console.log(non_repeated_part("abcdfdacdefg")) // acdefg