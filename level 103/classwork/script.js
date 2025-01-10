// 3)  შევქმნათ მასივი ნივთების და მისი ელემენტები გავუტოლოთ, ობიექტში ქიებს, ( ქიები უნდა იყოს ინდექსები )
lst = ['table', 'grape', 'dog', 'tree', 'money'];
obj = {}

for (let i = 0; i < lst.length; i++) {
    obj[i] = lst[i];
}

console.log(obj)