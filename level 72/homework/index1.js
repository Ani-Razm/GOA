//5
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timer = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timer_change;

start.onclick = function () {
        timer_change = setInterval(function(){
        seconds += 1
        if(seconds == 60){
            seconds = 0;
            minutes += 1;
        }
        if(minutes == 60){
            minutes = 0;
            hours += 1;
        }
        timer.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000)
};

reset.onclick = function () {
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.textContent = `${hours}:${minutes}:${seconds}`
}

stop.onclick = function() {
    clearInterval(timer_change);
};