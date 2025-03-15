// 5. Create a function that returns a Promise which rejects after 2 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.

function task5() {
    return new Promise((resolve, reject) => setTimeout(() => reject('Task 3 failed'), 2000));
}

task5().catch((error) => console.log(error));