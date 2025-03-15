

// 10. Create a function that returns a Promise which resolves after a random delay between 1 and 4 seconds. If the random number is less than 0.3, reject with an error message "Task 3 failed". Otherwise, resolve with the message "Task 3 complete". Handle the rejection with a .catch to log the error message.

function task10() {
    return new Promise((resolve, reject) => {
        let randomNum = Math.random() * 4;
        if (randomNum < 0.3) {
            setTimeout(() => reject('Task 3 failed'), randomNum * 1000);
        } else {
            setTimeout(() => resolve('Task 3 complete'), randomNum * 1000);
        }
    });
}

task10().then((message) => console.log(message)).catch((error) => console.log(error));