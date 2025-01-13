function matrixColsRows(matrix){
    let cols = []
    for(let i = 0; i < matrix.length; i++){
        let col = [];
        for(let j = 0; j < matrix.length; j++)
            col.push(matrix[j][i])
        cols.push(col)
    }
    return cols
}
