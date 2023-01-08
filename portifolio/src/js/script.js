let aba1 = document.querySelectorAll('.tab')[0]
let aba2 = document.querySelectorAll('.tab')[1]
aba2.addEventListener('click',()=>{
    aba1.classList.remove('selected')
   aba2.classList.add('selected')
   document.querySelector('.my-info').classList.remove('activate')
   document.querySelector('.my-social-networks').classList.add('activate')
})
aba1.addEventListener('click',()=>{
    aba2.classList.remove('selected')
    aba1.classList.add('selected')
    document.querySelector('.my-social-networks').classList.remove('activate')
    document.querySelector('.my-info').classList.add('activate')
})
/*const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab =>{
    tab.addEventListener('click',function() {
        const tabSelected = document.querySelector('.tab.selected')
        tabSelected.classList.remove('selected')
        tab.classList.add('selected')





        const myinfoActivate = document.querySelector('.my-info')
        myinfoActivate.classList.remove('activate')
        
        
        const mysocialActivate = document.querySelector('.my-social-networks')
        mysocialActivate.classList.add('activate')

        
    })
})*/