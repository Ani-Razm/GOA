function sort(initialArray, sortingArray) {
    let arr = Array.from(initialArray);

    for (let i = 0; i < sortingArray.length; i++) {
        arr[sortingArray[i]] = initialArray[i]
    }
    return arr
}