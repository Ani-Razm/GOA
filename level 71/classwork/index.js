let comp_p = document.getElementById('cp');
let user_p = document.getElementById('up');

c_points = 0;
u_points = 0;

//computer choice
function getComputerChoice() {
    let computer = Math.trunc(Math.random() * 10);
    if(3 >= computer){
        computer_choice = 0;
    } else if(6 >= computer){
        computer_choice = 1;
    } else {
        computer_choice = 2;
    }
}

function incrementComputerScore(){
    c_points += 1;
    comp_p.textContent = "computer points: " + c_points;
}

function incrementUserScore() {
    u_points += 1;
    user_p.textContent = "your points: " + u_points;
}

//user choice
let scissors = document.getElementById("scissors");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");

scissors.onclick = function() {
    getComputerChoice();
    if(computer_choice == 0){
        alert("draw");
    } else if(computer_choice == 1){
        alert("you win!🎉");
        incrementUserScore();
    } else {
        alert("you lose");
        incrementComputerScore();
    }
}

rock.onclick = function() {
    getComputerChoice();
    if(computer_choice == 0){
        alert("you win!🎉");
        incrementUserScore();
    } else if(computer_choice == 1){
        alert("you lose");
        incrementComputerScore();
    } else {
        alert("draw");
    }
}

paper.onclick = function() {
    getComputerChoice();
    if(computer_choice == 0){
        alert("you lose");
        incrementComputerScore();
    } else if(computer_choice == 1){
        alert("draw");
    } else {
        alert("you win!🎉");
        incrementUserScore();
    }
}

//const arr = ["scissors", "paper", "rock"]