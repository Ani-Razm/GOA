for (let i = 1; i <= 5; i++) {
    document.querySelector(".d" + i).addEventListener("click", function (e) {
        if (i % 2 == 0) {
            e.stopPropagation()
        }
        console.log(i)
    })
}
