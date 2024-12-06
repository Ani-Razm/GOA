function XO(str) {
    str = str.toLowerCase();
    let count_x = 0;
    let count_o = 0;
    for(let letter of str){
      if(letter === "o"){
          count_o++;
      } else if(letter === "x"){
          count_x++;
      }
    }
    return count_x === count_o
}