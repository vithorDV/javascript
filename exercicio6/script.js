let ul = document.querySelector('ul')

let input = document.querySelector('input')

input.addEventListener('keydown',(e)=>{
    
    if(e.key == 'Enter'){
        let newli = document.createElement('li')
        let inputValue = input.value
        newli.innerHTML = inputValue
        ul.append(newli)
        input.value = ''
    }
    
}

)








