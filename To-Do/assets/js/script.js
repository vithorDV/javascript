// Elements Selection
let ToDoForm = document.querySelector('#ToDo-form')
let ToDoInput = document.querySelector('#ToDo-input')
let ToDoList = document.querySelector('#ToDo-list')
let editForm = document.querySelector('#edit-form')
let editInput = document.querySelector('#edit-input')
let cancelEditBtn = document.querySelector('#cancel-edit-btn')

let oldInputValue;

//Events
ToDoForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    let inputValue = ToDoInput.value;

    if(inputValue){

    }

})

editForm.addEventListener('submit',(e) =>{
    e.preventDefault()

    let editInputValue = editInput.value;

    if(editInputValue){
        updateToDo(editInputValue)
    }

    toggleForms()
})

document.addEventListener('click',(e)=>{
    let targetE = e.target;
    let parentE = targetE.closest('div');
    let todoTitle;

    if(parentE && parentE.querySelector('h3')){
        todoTitle = parentE.querySelector('h3').innerText;
    }

    if(targetE.classList.contains('finish-ToDo')){
        parentE.classList.toggle('done')
    }

    if(targetE.classList.contains('remove-ToDo')){
        parentE.remove()
    }   

    if(targetE.classList.contains('edit-ToDo')){
        toggleForms()
        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }   
})

cancelEditBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    toggleForms()
})

//Function

function saveTodo(text){

    let ToDo = document.createElement('div');
    ToDo.classList.add('ToDo')

    let ToDoTitle = document.createElement('h3');
    ToDoTitle.innerText = text;
    ToDo.appendChild(ToDoTitle)

    let doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-ToDo')
    doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    ToDo.appendChild(doneBtn)

    let editBtn = document.createElement('button');
    doneBtn.classList.add('edit-ToDo')
    doneBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
    ToDo.appendChild(editBtn)

    let deleteBtn = document.createElement('button');
    doneBtn.classList.add('delete-ToDo')
    doneBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    ToDo.appendChild(deleteBtn)

    ToDoList.appendChild(ToDo)

    ToDoInput.value = '';
    ToDoInput.focus()
}

function toggleForms(){
    editForm.classList.toggle('hide')
    ToDoForm.classList.toggle('hide')
    ToDoList.classList.toggle('hide')
}

function updateToDo(text){
    let ToDos = document.querySelectorAll('.ToDo')
    ToDos.forEach((ToDo)=>{
        let todoTitle = ToDo.querySelector('h3');

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;
        }

    })
}