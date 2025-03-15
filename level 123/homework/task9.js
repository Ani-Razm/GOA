// 9. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete" if the random number is greater than 0.5, otherwise, it should resolve with the message "Task 1 was quick".

function task9() {
    return new Promise((resolve, reject) => {
        let randomNum = Math.random() * 5;
        if (randomNum > 0.5) {
            setTimeout(() => resolve('Task 1 complete'), randomNum * 1000);
        } else {
            setTimeout(() => resolve('Task 1 was quick'), randomNum * 1000);
        }
    });
}

task9().then((message) => console.log(message));