let v = true;
let v2 = false;

console.log(v2 && v1); //false
console.log(v2 || v1); //true

let v3 = 5 > 1;
let v4 = 5 < 1;

console.log(v3 && v4); //false
console.log(v3 || v4); //true

let v5 = 5 == "5";
let v6 = 5 === "5";

console.log(v5 && v6); //false
console.log(v5 || v6); //true

let v7 =  10 >= 10;
let v8 = 5 > 5;

console.log(v7 && v8); //false
console.log(v7 || v8); //true

let v9 =  true || false;
let v10 = true && false ;

console.log(v9 && v10); //false
console.log(v9 || v10); //true

let v11 =  100 > 0;
let v12 = 100 < 0;

console.log(v11 && v12); //false
console.log(v11 || v12); //true

let v13 =  100 >= 0;
let v14 = 100 <= 0;

console.log(v13 && v14); //false
console.log(v13 || v14); //true

let v15 =  1001 >= 0;
let v16 = 1001 <= 10;

console.log(v15 && v16); //false
console.log(v15 || v16); //true

let v17 = true && true;
let v18 = true && false;

console.log(v17 && v18); //false
console.log(v17 || v18); //true

let v19 = 1001 != 0;
let v20 = 1001 == 10;

console.log(v19 && v20); //false
console.log(v19 || v20); //true

//-------------------------------------------------------------------------------

// let var1 = 0 || false; //false
// let var2 = "" || true; //false
// let var3 = -0 && false; //false
// let var4 = [] && true; //true
// let var5 = "adasd" ; //false
// let var6 = -1; //true
// let var7 = 1; //true
// let var8 = NaN; //false
// let var9 = undefined; //false
// let var10 = {}; //true

//-------------------------------------------------------------------------------

let var1 = 0 || false; //false
let var2 = "" || true; //false
let var3 = -1; //true
let var4 = [] && true; //true
let var5 = "adasd" ; //false

console.log(!var1)
console.log(!var2)
console.log(!var3)
console.log(!var4)
console.log(!var5)