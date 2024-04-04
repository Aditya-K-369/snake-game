let play = document.querySelector(".game");
let snakex=10,snakey=10;
let foodx,foody;
let time;
let gameover = false;
let velocityx=0,velocityy=0;
let snakebody=[];
const foodchange = ()=>{
    foodx = Math.floor(Math.random()*30) + 1;
    foody = Math.floor(Math.random()*30) + 1;
};
const gameoverfun = ()=>{
    setInterval(time);
    alert("Game over!");
    location.reload();
};
const changedirection = (e)=>{
    if(e.key ==="ArrowUp" && velocityy!=1){
        velocityx=0;
        velocityy=-1;
    }
    else if(e.key ==="ArrowDown " && velocityy !=-1 ){
        velocityx=0;
        velocityy=1; 
    }
    else if(e.key ==="ArrowLeft "&& velocityx !=1 ){
        velocityx=-1;
        velocityy=0;
    }
    else if(e.key ==="ArrowRight" && velocityx !=-1 ){
        velocityx=1;
        velocityy=0;
    }
};
const mygame = ()=>{
    if(gameover){
        return gameoverfun();
    }
    let html = `<div class = "food" style="grid-area:${foody}/${foodx}"></div>`;
    if(snakex===foodx && snakey===foody){
        foodchange();
        snakebody.push(foodx,foody);
    }
    for(let i =snakebody.length-1;i>0;i--){
        snakebody[i]=snakebody[i-1];
    }
    snakebody[0]=[snakex,snakey];
    snakex+=velocityx;
    snakey+=velocityy;

    if(snakex<0 || snakex>30 || snakey<0 || snakey>30){
        gameover= true;
    }

   for(let i =0;i<snakebody.length;i++){
    html +=`<div class = "snake-head" style="grid-area:${snakebody[i][1]}/${snakebody[i][0]}"></div>`;
   }
    play.innerHTML=html;

};
foodchange();
 time = setInterval(mygame,125);
document.addEventListener("keydown",changedirection);