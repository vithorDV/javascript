let horaDigital = document.querySelector('#digital');
let sElement = document.querySelector('.pontS');
let mElement = document.querySelector('.pontM');
let hElement = document.querySelector('.pontH');

function updateClock(){
let now = new Date();
let hora = now.getHours();
let minuto = now.getMinutes();
let segundos = now.getSeconds();

horaDigital.innerHTML = `${fixZero(hora)}:${fixZero(minuto)}:${fixZero(segundos)}`

let sDeg = ((360 / 60) * segundos) - 90;
let mDeg = ((360 / 60) * minuto) - 90;
let hDeg = ((360/12) * hora) - 90;

sElement.style.transform = `rotate(${sDeg}deg)`
mElement.style.transform = `rotate(${mDeg}deg)`
hElement.style.transform = `rotate(${hDeg}deg)`


}

function fixZero(tempo){
    if(tempo < 10){
        return '0' + tempo;
    }
    else{
        return tempo
    }
}
setInterval(updateClock,1000);
updateClock();