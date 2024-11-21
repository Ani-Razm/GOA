//cards hover animation

const cards = document.getElementsByClassName("card");

cards[0].addEventListener("mouseover", function (){
    cards[0].textContent = `cool guitar`;  
});

cards[0].addEventListener("mouseout", function (){
    cards[0].innerHTML = `<img src="p_region_AZ2204NWL_MGR_00_01_sub_1.jpg" alt="electro guitar">`;
});

cards[1].addEventListener("mouseover", function (){
    cards[1].textContent = `cool guitar`;   
});

cards[1].addEventListener("mouseout", function (){
     cards[1].innerHTML = `<img src="p_region_MGFM10_OBL_1P_01_sub_1.jpg" alt="electro guitar">`;
});

cards[2].addEventListener("mouseover", function (){
    cards[2].textContent = `cool guitar`;
});

cards[2].addEventListener("mouseout", function (){
     cards[2].innerHTML = `<img src="p_region_TOD70_1P_01_sub_1.jpg" alt="electro guitar">`;
});

//light and dark mode

const btns = document.getElementsByTagName("button");

btns[0].addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
    for(let i = 0; i < cards.length; i++){
        cards[i].style.boxShadow = "5px 5px 20px gray";
    };
});

btns[1].addEventListener("click", function () {
    document.body.style.backgroundColor = "rgb(240, 240, 240)";
    for(let i = 0; i < cards.length; i++){
        cards[i].style.boxShadow = "10px 10px 20px rgb(226, 224, 224)";
    };
});