//Elements
let turnOn = document.querySelector("#turnOn")
let turnOff = document.querySelector("#turnOff")
let light = document.querySelector('#light')
let repair = document.querySelector('#repair')
broke = false;
//Events
turnOn.addEventListener('click', lightOn)
turnOn.addEventListener('dblclick', brokeLight)
turnOff.addEventListener('click', lightOff)


light.addEventListener('mouseover',lightOn)
light.addEventListener('mouseout',lightOff)
light.addEventListener('dblclick', brokeLight)

repair.addEventListener('click', repairLight)

//Functions
function lightOn(){
    if(broke == false){
        light.setAttribute('src','assets/img/ligada.jpg')
    }
}

function lightOff(){
    if(broke == false){
        light.setAttribute('src','assets/img/desligada.jpg')
    }
}

function brokeLight(){
    broke = true;
    light.src = 'assets/img/quebrada.jpg'
}

function repairLight(){
    if(broke == true){
        broke = false;
        light.setAttribute('src','assets/img/desligada.jpg')
    }
}