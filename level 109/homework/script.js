// 2) მანუალური object.assign(): შექმენით ფუნქცია რომელიც იღებს მინიმუმ 2-ს მაქსიმუმ უთვალავ არგუმენტს (ობიექტებს) და აბრუნებს ამ ობიექტების გაერთიანებას
function assign(...args){
    const result = {}
    for(let obj of args){
        for(let key in obj){
            result[key] = obj[key];
        }
    }
    return result
}

console.log(assign({name: "ani", surname: 'razmadze'}, {age: 18, name: 'bani'}))