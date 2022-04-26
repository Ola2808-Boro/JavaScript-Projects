const score = document.querySelector('span');
const miniGrid = Array.from(document.querySelectorAll('.showNextShape div'));
const btnStart = document.querySelector('.start');
const btnPause = document.querySelector('.pause');
const squaresArray = Array.from(document.querySelectorAll('.grid-wrapper div'));
const gameOverText = document.querySelector(' .game-over-text');
const inputPlayerName = document.querySelector('input');
const divPlayerIndvidual = Array.from(document.querySelectorAll('div.individual-player '));
const divPlayerScores = document.querySelector('div.player-scores');




const tetrisGame = new Tetris(10,10,squaresArray);


let click=0;
let gameOver=false;


btnStart.addEventListener('click',()=>{
 
    if(inputPlayerName.value===""){
        alert("Entrie your name")
    }
    else{
       
        inputPlayerName.value="";
        tetrisGame.startGame();
        btnStart.setAttribute('disabled',"");
       
    }
    

});
btnPause.addEventListener('click',()=>{
    
    click+=1;
    tetrisGame.pauseGame();
});

document.addEventListener('keydown',(e)=>{

    tetrisGame.control(e);
})

inputPlayerName.addEventListener('change',()=>{
        const player=new Player;
 
        player.addName(inputPlayerName.value);
         
})
    

    


