// 3
let p1 = document.getElementById("p1");
p1.textContent = "Text1";
alert(p1.textContent);


// 4
let p2 = document.getElementById("p2");

const styles = {
    color: p2.style.color,
    bgColor:  p2.style.backgroundColor,
    fontWeight:  p2.style.fontWeight,
    fontSize:  p2.style.fontSize,
};

console.log(styles);

// 5
let div = document.getElementById("div0");
div.style.display = "flex";
div.style.width = "200px";
div.style.height = "200px";
div.style.backgroundColor = "red";

