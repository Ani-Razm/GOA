let time = 20;
let timer = document.getElementById("timer");

const timeChange = setInterval(
    function () {
        time--;
        timer.textContent = `${time} left`;
        if (time == 0) {
            timer.textContent = "time is up";
            clearInterval(timeChange);
        };
    }, 1000
)

