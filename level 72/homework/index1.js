let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timer = document.getElementById("timer")

let seconds = 10;

start.addEventListener("click", setInterval(function() {
    seconds--;
    minutes = Math.trunc(seconds / 60);
    timer.textContent = (`00:${minutes}:${seconds % 60}`);
    if (seconds < 0) {
        clearInterval();
    }
}, 1000));