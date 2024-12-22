const cookies = document.getElementById('cookies').querySelector('span');
const coins = document.getElementById('coins').querySelector('span');
const cookie = document.getElementById('cookie');

const buttons = document.querySelectorAll('button');

let cookieCounter = 0;
let coinsCounter = 0;
let cookiePerClick = 1;
let coinsPerclick = 1;

cookie.addEventListener('click', () => {
    cookieCounter += cookiePerClick;
    coinsCounter += coinsPerclick;
    cookies.textContent = cookieCounter;
    coins.textContent = coinsCounter;
})

let biggerfingerprice = 50;
buttons[0].addEventListener('click', () => {
    if (coinsCounter >= biggerfingerprice) {
        coinsCounter -= biggerfingerprice;
        coins.textContent = coinsCounter;
        cookiePerClick++;
        biggerfingerprice *= 2;
        buttons[0].querySelector('span').textContent = biggerfingerprice + " gold";
    }
})

let betterMainsPrice = 100;
buttons[1].addEventListener('click', () => {

    if (coinsCounter >= betterMainsPrice) {
        coinsCounter -= betterMainsPrice;
        coins.textContent = coinsCounter;
        coinsPerclick++;
        betterMainsPrice *= 2;
        buttons[1].querySelector('span').textContent = betterMainsPrice + " gold";
    }
})

let doubleCookiePrice = 200;

buttons[2].addEventListener('click', () => {

    if (coinsCounter >= doubleCookiePrice) {
        coinsCounter -= doubleCookiePrice;
        coins.textContent = coinsCounter;
        cookiePerClick *= 2;
        doubleCookiePrice *= 2;
        buttons[2].querySelector('span').textContent = doubleCookiePrice + " gold";
    }
})