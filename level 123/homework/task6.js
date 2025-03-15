// 6. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete".

function task6() {
    return new Promise((resolve, reject) => setTimeout(() => resolve("Task 1 complete"), Math.trunc(Math.random() * 5) * 1000));
}

task6().then((message) => console.log(message));