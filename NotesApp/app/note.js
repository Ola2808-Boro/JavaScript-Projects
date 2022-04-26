const btnAdd = document.querySelector('.add');
const notesFromLocalStoarge = JSON.parse(localStorage.getItem('note'));

//download from localStorage
if(notesFromLocalStoarge){
    notesFromLocalStoarge.forEach(note=>{
        addNewNote(note);
    })
}
btnAdd.addEventListener('click',()=>{
    addNewNote();
})

function updateLocalStorage(){
    const allNotes = document.querySelectorAll('textarea');
    const arrayNote=[];
    allNotes.forEach(note=>{
        arrayNote.push(note.value);
    })
    localStorage.setItem('note',JSON.stringify(arrayNote));
}

function addNewNote(text=""){
    const note = document.createElement('div');
    note.classList.add("note");
    note.innerHTML=`
    <div class="note">
    <div class="tools">
        <button class="important"><i class="fa-solid fa-star"></i></button>
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    <div class="main"></div>
    <textarea class="hidden"></textarea>
</div>
    `
    const btnDelete = note.querySelector('.delete');
    const btnEdit = note.querySelector('.edit');
    const btnImportant = note.querySelector('.important');
    const main = note.querySelector('.main');
    const textarea = note.querySelector('textarea');


    textarea.value = text;
    main.innerHTML = marked(text);

    btnEdit.addEventListener('click',()=>{
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })
    btnDelete.addEventListener('click',()=>{
        note.remove();
    })
    btnImportant.addEventListener('click',()=>{
    
        btnImportant.classList.toggle('important-active');
        updateLocalStorage();

    })
    textarea.addEventListener('input',(e)=>{
        const { value } = e.target;

        textarea.innerHTML = marked(value);

        updateLocalStorage();
    })


    document.body.appendChild(note);
}