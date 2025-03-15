// Color Change Example with DOM Manipulation and Delay
// Goal: გამოიყენე callback და setTimeout() DOM-სთან ურთიერთობისთვის და დროის დაგვიანებით გვერდის განახლებისთვის.

// Task:
// წერე ფუნქცია, რომელიც იღებს ფერს და callback ფუნქციას. setTimeout()-ის გამოყენებით უნდა ჩაიწეროს ცვლადში ფერი 2 წამში, შემდეგ callback უნდა შეცვალოს ტექსტის ფერი.

function changeColor(color) {
    document.querySelector('p').style.color = color;
}
function func(color, callback) {
    setTimeout(() => {
        callback(color);
    }, 2000)
}

func('red', changeColor);