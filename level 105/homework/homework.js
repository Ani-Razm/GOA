// 1) შევქმნათ ფუნქცია, რომელიც დააბრუნებს გადაცემული მატრიცის ( 2D მასივის ) ჯამს. მაგ:
// [[1,3],[1,4], [4,1],[2,2]] —> 18
function sumMatrix(matrix) {
    let sum = 0;
    for (num of matrix.flat()) {
        sum += num;
    }
    return sum
}

console.log(sumMatrix([[1, 3], [1, 4], [4, 1], [2, 2]]))
// 2) შევქმნათ ფუნქცია რომელიც გადაცემულ nxn მატრიცას გაუცვლის რიგებს და სვეტებს
function matrixColsRows(matrix) {
    let cols = []
    for (let i = 0; i < matrix.length; i++) {
        let col = [];
        for (let j = 0; j < matrix.length; j++)
            col.push(matrix[j][i])
        cols.push(col)
    }
    return cols
}

console.log(matrixColsRows([[1, 3], [1, 4]]))
// 3) შევქმნათ ფუნქცია რომელიც გადაცემულდ nXn მატრიცის დიაგონალურად განწყობილი ელემენტების ჯამს დააბრუნებს (უნდა დაბრუნდეს ორი რიცხვი). 
function sumMatrixDiagonals(matrix) {
    let sum1 = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum1 += matrix[i][i];
    }

    let sum2 = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum2 += matrix[i][matrix.length - 1 - i];
    }

    return (`${sum1} ${sum2}`)
}

console.log(sumMatrixDiagonals([[1, 3], [1, 4]]))