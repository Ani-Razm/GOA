class Animal {
    constructor(name, size, weight, lifespan) {
        this.name = name;
        this.size = size;
        this.weight = weight;
        this.lifespan = lifespan;
    }

    getInfo() { 
        return `
            <div class="info">
                <h2>${this.name}</h2>
                <img src="./imgs/${this.name.toLowerCase()}.jpg" alt="${this.name}">
                <ul>
                    <li><span>name:</span>${this.name}</li>   
                    <li><span>lifespan:</span>${this.lifespan}</li>
                    <li><span>size:</span>${this.size}</li>
                    <li><span>weight:</span>${this.weight}</li>
                </ul>
            </div>
        `
    }
}

const bengal = new Animal('Bengal', '6-9.8 cm', '9-11.2 kg', '12-15 years');
const ara = new Animal('Ara', '46cm', '1.0-1.5kg', '20-30 years');
const akita = new Animal('Akita', '60cm', '27-60kg', '12-15 years');
const borderCollie = new Animal('BorderCollie', '50cm', '30-40kg', '10-15 years');

let animalsDataBase = [bengal, borderCollie, akita, ara];

const infosDiv = document.querySelector('.infos');

function renderInfo(searchinfo) {

    for (let obj of animalsDataBase) {
        console.log(obj.name)
        if (obj.name.toLowerCase().includes(searchinfo.toLowerCase())) {
            infosDiv.innerHTML = obj.getInfo();
            return;
        }
    }
    console.log('No animal found')
    infosDiv.innerHTML = `<p>No animal found with this name</p>`;
}

const search = document.querySelector('.search input');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    renderInfo(search.value);
});