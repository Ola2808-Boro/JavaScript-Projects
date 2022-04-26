const ul = document.querySelector('ul');
const input = document.querySelector('input');
const form= document.querySelector('form');
const toDoElementLS = JSON.parse(localStorage.getItem('toDoElements'));

if(toDoElementLS){
    toDoElementLS.forEach(item=>{
        addNewToDo(item);
      
    })
}

function addNewToDo(item){
   
  
    let text = input.value;

    if(item){
        text = item.text;
    }
    if(text){
        const liElement = document.createElement('li');
        liElement.innerHTML= text;
      
    
        if(item && item.completed){
            liElement.classList.add('completed');
        }
       
    
        liElement.addEventListener('click',(event)=>{
            event.preventDefault();
            liElement.classList.toggle('completed');
            updateLocalStorage();
    
        })
        liElement.addEventListener('contextmenu',(event)=>{
            event.preventDefault();
            liElement.remove();
            updateLocalStorage();
        })
        ul.appendChild(liElement);
        input.value='';
        updateLocalStorage();
    }
   
}

function updateLocalStorage(){

    const allLiElements = document.querySelectorAll('li');
    const arrayLi = [];

    allLiElements.forEach(item=>{
        arrayLi.push({
            text: item.innerHTML,
            completed : item.classList.contains('completed'),
        })
    });
    localStorage.setItem('toDoElements',JSON.stringify(arrayLi));
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    addNewToDo();
    
})