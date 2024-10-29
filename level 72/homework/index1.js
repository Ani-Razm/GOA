//5
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timer = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerChange;

function pad(n) {
   if(n < 10){
    return "0" + String(n);
   } else {
    return n 
    }
}

start.onclick = function () {
        if(!timerChange){
            timerChange = setInterval(function(){
                seconds += 1
                if(seconds == 60){
                    seconds = 0;
                    minutes += 1;
                }
                if(minutes == 60){
                    minutes = 0;
                    hours += 1;
                }
                timer.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
            }, 1000)
        }
};

reset.onclick = function () {
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
};

stop.onclick = function() {
    clearInterval(timerChange);
    timerChange = null;
};