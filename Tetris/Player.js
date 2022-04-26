class Player{

   
    constructor(name="",score=0){
        this.score=score;
        this.name=name;
    }

    addName(name){
    
    
        this.name=name;
        const divName = document.createElement('div');
        divName.classList.add('individual-player-name');
        let array = Array.from(document.querySelectorAll('.individual-player-name'));
        divName.setAttribute("id",array.length);
        divName.textContent=this.name;
        divPlayerScores.appendChild(divName);
        
    }
    

}