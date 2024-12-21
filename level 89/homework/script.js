// cards list
const cards = document.querySelectorAll(".card");

// buttons
const expensiveThanAverage = document.querySelector("#average");
const sortAcsending = document.querySelector("#ascending");
const sortDescending = document.querySelector("#descending");
const sortRandom = document.querySelector("#random");
const showAll = document.querySelector("#showAll");

// show animals, that are more expensive than average

// calculating average
let sum = 0;
for (let card of cards) {
    // accesing every card price
    price = card.querySelector("span").innerHTML.replace("$", "");
    // adding price to sum
    sum += Number(price);
};
console.log(sum);

const average = sum / cards.length;
console.log(average);

// adding event listener
expensiveThanAverage.addEventListener("click", function () {
    for (let card of cards) {
        // accesing every card price
        price = Number(card.querySelector("span").innerHTML.replace("$", ""));
        // if card price is less than average, it will disapear from website
        if (price < average) {
            card.style.display = "none";
        }
    }
})

// show all animals
showAll.addEventListener("click", function () {
    // goes through every card in cards list and shows them on website 
    for (let card of cards) {
        card.style.display = "flex";
    }
})

// sort animals by prices in acsending order
sortAcsending.addEventListener("click", function () {
    cards.forEach(card => {
        card.style.order = "0";
    })

    let crds = Array.from(cards);

    crds.sort((a, b) => {
        let priceA = Number(a.querySelector("span").textContent.replace("$", ""));
        let priceB = Number(b.querySelector("span").textContent.replace("$", ""));

        return priceA - priceB;
    })

    let parent = cards[0].parentElement;

    for (let card of crds) {
        parent.appendChild(card);
    }

})

// sort animals by prices in descending order
sortDescending.addEventListener("click", function () {
    cards.forEach(card => {
        card.style.order = "0";
    })

    let crds = Array.from(cards);

    crds.sort((a, b) => {
        let priceA = Number(a.querySelector("span").textContent.replace("$", ""));
        let priceB = Number(b.querySelector("span").textContent.replace("$", ""));

        return priceB - priceA;
    })

    let parent = cards[0].parentElement;

    for (let card of crds) {
        parent.appendChild(card);
    }

})

// sort animals in random order
sortRandom.addEventListener("click", function () {
    cards.forEach(card => {
        card.style.order = Math.floor(Math.random() * 10);
    })
})