// 6) Create a promise that rejects after 1 second with a specific error message.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject('✨Specific error message✨'), 1000);
});

promise.catch(error => console.error(error));