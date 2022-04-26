class Tetris{

    constructor(width,height,squaresArray,position=0,newShape=[],clickPause=false,current=0,array=0,result=0,indexColor=0,index=0,mini_grid=[]){
        this.widthTetris=width;
        this.heightTetris = height;
        this.grid=squaresArray;
        this.position=position;
        this.newShape=newShape;
        this.clickPause=clickPause;
        this.data=[];
        this.currentRotation=current;
        this.currentArray=array;
        this.resultNumber=result;
        this.colorIndex=indexColor;
        this.index=index;
        this.nextArray=array;
        this.nextRotation=current;
        this.displayNextShapeArray=miniGrid;
       
    }
    color=["red", "blue","green","black","gray","pink","orange","purple","aqua","chartreuse",
        "blueviolet","cyan","DarkOrchid","Fuchsia","IndianRed","LightSalmon","MediumVioletRed","Peru","Teal" ];
    

    createShape(){
        this.widthTetris=10;
        this.position = Math.floor(Math.random()*7+1);
        let iShapes =[
                    [this.position, this.position+this.widthTetris,this.position+2*this.widthTetris,this.position+3*this.widthTetris],
                    [this.position,this.position+1,this.position+2,this.position+3],
                    [this.position, this.position+this.widthTetris,this.position+2*this.widthTetris,this.position+3*this.widthTetris],
                    [this.position,this.position+1,this.position+2,this.position+3],
                ]
        let  LShapes = [
                    [this.position,this.position+this.widthTetris,this.position+2*this.widthTetris, this.position+2*this.widthTetris+1],
                    [this.position,this.position+this.widthTetris,this.position+2*this.widthTetris, this.position+1],
                    [this.position,this.position+this.widthTetris,this.position+2*this.widthTetris, this.position-1],
                    [this.position,this.position+this.widthTetris,this.position+2*this.widthTetris, this.position+2*this.widthTetris-1]
                ]
        let  OShapes=[
                    [this.position,this.position+1,this.position+this.widthTetris,this.position+this.widthTetris+1],
                    [this.position,this.position+1,this.position+this.widthTetris,this.position+this.widthTetris+1],
                    [this.position,this.position+1,this.position+this.widthTetris,this.position+this.widthTetris+1],
                    [this.position,this.position+1,this.position+this.widthTetris,this.position+this.widthTetris+1]
                ]
        let  ZShapes=[
                    [this.position, this.position+this.widthTetris, this.position+1+this.widthTetris,this.position-1+this.widthTetris],
                    [this.position, this.position+this.widthTetris, this.position+1+this.widthTetris,this.position+this.widthTetris*2],
                    [this.position, this.position+this.widthTetris, this.position-1+this.widthTetris,this.position+this.widthTetris*2],
                    [this.position,this.position+1,this.position-1,this.position+1+this.widthTetris]
                ]
    
        let arrayWithShapes = [ZShapes,OShapes,LShapes,iShapes];

        this.newShape= arrayWithShapes[this.currentArray][this.currentRotation];
    
         this.data=[ZShapes,OShapes,LShapes,iShapes];

            }
        nextShape(){
            this.position=1;
            this.widthTetris=5;
            
    let iShapes =[
                [this.position, this.position+this.widthTetris,this.position+2*this.widthTetris,this.position+3*this.widthTetris],
                [this.position,this.position+1,this.position+2,this.position+3],
                [this.position, this.position+this.widthTetris,this.position+2*this.widthTetris,this.position+3*this.widthTetris],
                [this.position,this.position+1,this.position+2,this.position+3],
            ]
    let  LShapes = [
                [this.position,this.position+this.widthTetris,this.position+2*this.widthTetris, this.position+2*this.widthTetris+1],
                [this.position,this.position+this.widthTetris,this.position+2*this.widthTetris, this.position+1],
                [this.position,this.position+this.widthTetris,this.position+2*this.widthTetris, this.position-1],
                [this.position,this.position+this.widthTetris,this.position+2*this.widthTetris, this.position+2*this.widthTetris-1]
            ]
    let  OShapes=[
                [this.position,this.position+1,this.position+this.widthTetris,this.position+this.widthTetris+1],
                [this.position,this.position+1,this.position+this.widthTetris,this.position+this.widthTetris+1],
                [this.position,this.position+1,this.position+this.widthTetris,this.position+this.widthTetris+1],
                [this.position,this.position+1,this.position+this.widthTetris,this.position+this.widthTetris+1]
            ]
    let  ZShapes=[
                [this.position, this.position+this.widthTetris, this.position+1+this.widthTetris,this.position-1+this.widthTetris],
                [this.position, this.position+this.widthTetris, this.position+1+this.widthTetris,this.position+this.widthTetris*2],
                [this.position, this.position+this.widthTetris, this.position-1+this.widthTetris,this.position+this.widthTetris*2],
                [this.position,this.position+1,this.position-1,this.position+1+this.widthTetris]
            ]
            let arrayWithShapes = [ZShapes,OShapes,LShapes,iShapes];
      
            this.currentRotation = Math.floor(Math.random()*4);
            this.currentArray = Math.floor(Math.random()*4);
            this.colorIndex = Math.floor(Math.random()*this.color.length);
    
            
        
            miniGrid.forEach(square => {
                square.classList.remove('shape');
                 square.style.backgroundColor = '';
           })
       
        
           this.newShapeMini= arrayWithShapes[this.currentArray][this.currentRotation];
           this.newShapeMini.forEach(item=>{
                miniGrid[item].style.backgroundColor=this.color[this.colorIndex];
           })
           

    }
        
        draw(){
            this.newShape.forEach(index=>{
                this.grid[index].classList.add('shape');
                this.grid[index].style.backgroundColor=this.color[this.colorIndex];

            })
    
        }
        undraw(){
            this.newShape.forEach(index=>{
                this.grid[index].classList.remove('shape');
                this.grid[index].style.backgroundColor= '';
            })
           
        }
        freeze(){
      
           
            if(this.newShape.some((index) => this.grid[index].classList.contains('floor'))){
                this.newShape.forEach(index=>this.grid[index].classList.add('taken'));
                
                this.nextShape();
                setTimeout('',100);
                this.createShape();
            }
            else if(this.newShape.some((index) => this.grid[index+10].classList.contains('taken'))){
               
                this.newShape.forEach(index=>this.grid[index].classList.add('taken'));
                this.nextShape();
                setTimeout('',100);
                this.createShape();
            }
        }
        moveDown(){
            if(this.checkMoveDown){
                this.gameOver();
                this.draw();
                this.gameOver();
                if(this.pauseGame()){
        
                    this.undraw();
                    this.newShape.forEach((item,index)=>{
                        item+=10;
                        this.newShape[index]=item;
                    })
                    this.gameOver();
                    this.draw();
                    this.gameOver();
                    this.freeze();
                    this.gameOver();
                    this.result();
                }
            }
            
            
        }
        moveLeft(){
            let isLeft = this.newShape.some(item=> item % 10 === 0)
            if(isLeft){
                return;
            }
            else{
                if(this.checkLeft()){

                    this.undraw();
                    this.newShape.forEach((item,index)=>{
                    item-=1;
                    this.newShape[index]=item;
                    })
                    this.draw();

                }
                
            }
           
        }
        checkRotatedPosition(P){

            P = P || this.currentRotation
            if ((P+1) % this.widthTetriswidth < 4) {         //add 1 because the position index can be 1 less than where the piece is (with how they are indexed).     
                if (this.newShape.some(item=> item % 10 === 9)){            //use actual position to check if it's flipped over to right side
                  this.currentRotation += 1    //if so, add one to wrap it back around
                  checkRotatedPosition(P) //check again.  Pass position from start, since long block might need to move more.
                  }
              }
              else if (P % this.widthTetriswidth > 5) {
                if (this.newShape.some(item=> item % 10 === 0)){
                this.currentRotation -= 1
                checkRotatedPosition(P)
                }
              }
        }
        checkLeft(){
            if( this.newShape.some(item=> this.grid[item-1].classList.contains('taken'))){
                return false
            }
            else{

                return true
            }
            
        }
        checkRight(){
            if( this.newShape.some(item=> this.grid[item+1].classList.contains('taken'))){
                return false
            }
            else{

                return true
            }
        }
        checkMoveDown(){
            if( this.newShape.some(item=> this.grid[item+10].classList.contains('taken'))){
         
                return false
            }
            else{

                return true
            }
        }
        moveRight(){

            let isRight = this.newShape.some(item=> item % 10 === 9)
            if(isRight){
                return;
            }
            else{
                if(this.checkRight()){

                    this.undraw();
                    this.newShape.forEach((item,index)=>{
                    item+=1;
                    this.newShape[index]=item;
                    })
                    this.draw();

                }
                    
            }

        }
        rotate(){

            // this.data=[ZShapes,OShapes,LShapes,iShapes,arrayWithShapes,currentRotation,currentArray];
            this.undraw();

            this.currentRotation++;
 
            if(this.currentRotation===4){
                this.currentRotation=0;
            }
  
            let Z=this.data[0]
            let O=this.data[1]
            let L=this.data[2]
            let I=this.data[3]
            let array =[Z,O,L,I];
            this.newShape=array[this.currentArray][this.currentRotation];
            this.checkRotatedPosition()
            this.draw();
        }
        control(e){
     

            if(e.keyCode === 37) {
  
                this.moveLeft()
              } 
              else if (e.keyCode === 38) {
        
                this.rotate()
              }
               else if (e.keyCode === 39) {
          
                this.moveRight()
              } 
              else if (e.keyCode === 40) {

                this.moveDown()
              }
            }
        
        result(){
            for(let i=0; i<200;i+=10){
                let row = [i,i+1,i+2,i+3,i+4,i+5,i+6,i+7,i+8,i+9]
               
                if(row.every(item=>this.grid[item].classList.contains('taken')) && (!(row.every(item=>this.grid[item].classList.contains('result')))) ){
   
                    this.resultNumber = 10;
                    score.innerHTML= Number(score.innerHTML)+this.resultNumber;
                 
                    row.forEach(index => this.grid[index].classList.add('result'));
                }
            }
            
        }
        clear(){

            score.textContent="0";
            gameOverText.textContent="";
            click=0;
            btnStart.textContent==="Start game again";    
            
        }
        getterResult(){
            gameOver=true;
            return score.textContent;
        }
        gameOver(){


        
            if(this.newShape.some(item=>this.grid[item].classList.contains('taken')) && this.newShape.some(item=>this.grid[item].classList.contains('game-over'))){
                    gameOverText.textContent="Game over";
                    gameOverText.style.color="red";
                    btnStart.textContent="Start game again";
                    this.addScore();
                    btnStart.removeAttribute('disabled');
                    setTimeout('',1000)
                    this.grid.forEach(item=>{
                        item.classList.remove('taken');   
                       })
                    this.grid.forEach(item=>{
                        item.style.backgroundColor="";   
                       })
                    this.grid.forEach(item=>{
                        item.classList.remove('shape');   
                       })
                    miniGrid.forEach(square => {
                        square.classList.remove('shape');
                         square.style.backgroundColor = '';
                   })
                    this.getterResult();
                    
                    clearInterval(this.index);
                    
             }
            
          
        }


        addScore(){
            
            let scoreNumber = score.textContent;
            const divScore = document.createElement('div');
            divScore.classList.add('individual-player-score');
            let array = Array.from(document.querySelectorAll('.individual-player-score'));
            divScore.setAttribute("id",array.length);
            divScore.textContent=scoreNumber;
            divPlayerScores.appendChild(divScore);
          
        }
        
        pauseGame(){
          if(click%2==0){
            return true
          }
          else{
            return false
          }
       
        }
        startGame(){

            btnStart.textContent="START";
            this.nextShape()
            this.createShape();
            this.draw();
            this.index = setInterval(this.moveDown.bind(this),1000);
            this.clear();
                        
        }

        
    }