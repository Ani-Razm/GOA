function countRectangleArea(len, width) {
    return len * width;
};

function countCircleArea(r) {
    return Math.PI * r ** 2;
};

function countTriangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

console.log(countRectangleArea(10, 10));
console.log(countCircleArea(10));
console.log(countTriangleArea(10, 15, 20));