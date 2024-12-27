let pos = 0; // ინახება საწყისი პოზიცია
let direction = 1; // ეს არის მიმართულება, ანუ ამ ცვლადით განვსაზღვრავთ ზემოთ ავა ბურთი თუ ქვემოთ ჩამოვა
let ball = document.getElementById("ball"); 
let btn = document.querySelector("button"); 

function moveOnce() {
    direction = 1; // ვაყენებთ მიმართულებას საწყის მნიშვნელობაზე, ყოველ ჯერზე როდესაც გაიშვება ფუნქცია

    const t = setInterval(bounce, 1); // ვაყენებთ ინტერვალს, რომელიც ყოველ 1 მილსწამში გაუშვებს bounce ფუნქციას

    function bounce() {

        pos += direction; // ვამატებთ ყოველ 1 მილწამში პოზიციას მიმართულების ცვლადს
        ball.style.bottom = pos + "px"; // ანახლებს ბურთის პოზიციას

        if (pos > 500) {
                direction = -1; // თუ ბურთი ზემოთ გაივლის 500 პიქსელზე მეტ მანძილს, მაშინ ბურთის მიმართულება შეიცვლება უარყოფითი ნიშნით და ამგვარად ბურთი დაიწყებს დაბლა მოძრაობას
        } else if (pos <= 1 && direction === -1) {
                // გააჩერებს ინტერვალს როგორც კი ბურთი დაუბრუნდება საწყის პოზიციას
                clearInterval(t);
        }
    }
}

btn.addEventListener("click", moveOnce);
