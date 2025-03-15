// 4. Create a function that returns a Promise which resolves after 2 seconds with a message "First". Chain another then that waits 1 second before logging "Second".

function task4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('First'), 2000);
    }).then((message) => {
        console.log(message);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve('Second'), 1000);
        })
    }).then((message) => console.log(message));
}

task4();