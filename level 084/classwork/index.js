// 2) ჯავასკიპტის ობიექტების მასივის საშუალებით შევქმნათ ვებსაიტი სამი კარტის დიზაინით ( ონლაინ მაღაზია )

const cards_div = document.querySelector("div");

const cards_info = [
    {title: "fujinomiya", image:"fujinomiya.jpg", price: '200$', color: "#ebccb7"},
    {title: "kiyoto", image:"kiyoto.jpg", price: '490$', color: "#feaf90"},
    {title: "osaka", image:"osaka.jpg", price: '300$', color: "#d8dce1"},
]

for(let card of cards_info){
    const card_div = document.createElement("div");
    card_div.innerHTML += `
        <div class="title">
            <h1>${card.title}</h1>
            <p>${card.price}</p>
        </div>
        <button>Explore more</button>
    `
    card_div.style.backgroundImage = `url(${card.image})`;
    card_div.style.backgroundSize = 'cover';
    card_div.style.color = card.color;
    card_div.classList = "card";
    cards_div.appendChild(card_div)
}
