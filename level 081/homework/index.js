const divs = document.getElementsByTagName("div");
const btns = document.getElementsByTagName("button");

//1
btns[0].addEventListener("click", function (){
    divs[0].style.opacity= 0;
    divs[0].style.transition = 'all 2s ease';
})

//2
btns[1].addEventListener("click", function (){
    divs[1].style.opacity= 1;
    divs[1].style.left= 0;
    divs[1].style.transition = 'all 1s ease';
})

//3
btns[2].addEventListener("click", function (){
    if(divs[2].style.left == '0px'){
        divs[2].style.left= '100px';
    } else {
        divs[2].style.left= '0px';
    }
    divs[2].style.transition = 'all 1s ease';
})

//4
btns[3].addEventListener("click", function (){;
    divs[3].style.fontSize = '60px';
    divs[3].style.transition = 'all 1s ease';
})

//5
deg = 0;

btns[4].addEventListener("click", function (){;
    deg += 360;
    divs[4].style.transform = `rotate(${deg}deg)`;
    divs[4].style.transition = 'all 1s ease';
})