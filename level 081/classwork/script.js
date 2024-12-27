const div = document.querySelector("div");

let right = 0;
let down = 0;
let left = 0;
let up = 0;

function move() {
    if(right <= 1300 ){
        right += 10;
        div.style.left = right + "px";
    } else if(right >= 1300 && down <= 500) {
        down += 10;
        div.style.top= down + "px";
    } else if(down >= 500 && left <= 1300) {
        left -= 10;
        div.style.left = left + "px";
    }
}

const interval = setInterval(move, 1);