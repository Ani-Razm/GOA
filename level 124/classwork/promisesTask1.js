// 5)  Create three Promises that resolve based on random conditions (e.g., if a random number is greater than 0.5, resolve with a message; otherwise, resolve after 2 seconds with a different message)

function createPromise(name) {
    return new Promise((resolve, reject) => {
        let randomNum = Math.random() * 10;
        if (randomNum < 5) {
            resolve(`${name} completed`);
        }
        setTimeout(() => reject(`${name} rejected`), 2000);
    });
}

createPromise('Promise1')
.then(text => {
    console.log(text);
    return createPromise('Promise2');
})
.then(text => {
    console.log(text);
    return createPromise('Promise3');
})
.then(text => console.log(text))
.catch(error => console.error(error))
.finally(() => console.log('Operation ended!'))