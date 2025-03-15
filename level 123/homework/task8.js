// 8. Create a function that returns a Promise which rejects after a random delay between 1 and 4 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.

function task8() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Task 3 failed'), (Math.random() * 4) * 1000);
    });
}

task8().catch((error) => console.log(error));