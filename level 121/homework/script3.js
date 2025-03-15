// Interactive Callback with User Input and Delay
// Goal: გამოიყენე callback და setTimeout() მომხმარებლის შეყვანის რეაგირებისთვის და დინამიური შინაარსის ცვლილებისთვის.

// Task:
// წერე ფუნქცია, რომელიც სთხოვს მომხმარებელს მათი სახელის შეყვანას. setTimeout()-ის გამოყენებით, 3 წამში უნდა გამოვიდეს ინტერაქტიული შეტყობინება, რომელიც მიულოცავს მათ, რომ დაეხმარა. 

function func() {
    let name = prompt('please enter your name: ');
    setTimeout(() => console.log('thanks for helping ' + name), 3000);
}