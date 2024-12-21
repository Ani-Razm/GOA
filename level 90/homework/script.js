// 1) შექმენით მანუალური სორტის ფუნქცია
function manualSort(arr) {
    for (let i = 0; i < arr.length; i++) { // გადავუვლით თითოეულ რიცხვს სიაში
        for (let j = i + 1; j < arr.length; j++) { // გადავუვლით თითოეული რიცხვისთვის, ყველა მომდევნო რიცხვს და შევამოწმებთ, არის თუ არა რომელიმე, მიმდინარე რიცხვზე ნაკლები
            if (arr[i] > arr[j]) {
                let oldVersion = arr[i]; // თუ არის შევუცლით ადგილებს
                arr[i] = arr[j];
                arr[j] = oldVersion;
            }
        }
    }
    return arr
}

console.log(manualSort([1, 0, -3, 7]))

// 2) შექმენით მანუალური ფილტრის ფუნქცია ( ფუნქცია რომელსაც გადაეცემა ორი არგუმენტი, მასივი და ინტეჯერი რომლის ქვემოთ მყოფი რიცხვებიც უნდა ამოიღოს მასივიდან )
function manualFilter(arr, ...elemetstoRemove) {
    filteredArray = [];
    for (let num of arr) {
        if (!elemetstoRemove.includes(num)) {
            filteredArray.push(num)
        }
    }
    return filteredArray
}

console.log(manualFilter([1, 2, 3, 4], 1, 4))