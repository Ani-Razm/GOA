// 7. Create a function that returns a Promise which resolves after a random delay between 1 and 3 seconds with the message "First". Chain another .then that waits for another random delay between 1 and 3 seconds before logging "Second".

function task7() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('First'), (Math.random() * 3) * 1000);
    })
}

task7().then(
    (message) => {
        console.log(message);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve('Second'), (Math.random() * 3) * 1000);
        });
    }
).then((message) => console.log(message));