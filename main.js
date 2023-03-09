
let button = document.querySelector('button')
let note = document.getElementById('note')

button.addEventListener('click',()=>{
    addNote()
})



function saveNote(){
    const data=[]
    let notes= document.querySelectorAll('.notepad textarea')
   notes.forEach(note=>data.push(note.value))
   localStorage.setItem('notes',JSON.stringify(data))
}




function addNote(text='') {
    let notepad = document.createElement('div')
    notepad.classList.add('notepad')
    notepad.innerHTML = `
    
    <div class="icon" id="note">
    <p>Note</p>
    <div>
    <i class="fa-solid fa-floppy-disk" id="save"></i>
    <i class="fa-solid fa-trash" id="delete"></i>
    </div>
    </div>
    <textarea name="" id="typenote" placeholder="Type..." value="dinesh">${text}</textarea>`
    notepad.querySelector('#delete').addEventListener('click',function(){
        notepad.remove()
        saveNote()
    })
    notepad.querySelector('#save').addEventListener('click',function(){
        saveNote()
    })
    note.appendChild(notepad)
    saveNote()
}






(function(){
    let getNotes=JSON.parse(localStorage.getItem("notes"))
    getNotes.forEach((get)=>{
        addNote(get)
    })

})()


