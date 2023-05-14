// Elements
let minutesArea = document.querySelector('#minutes')
let secondsArea = document.querySelector('#seconds')
let miliSecondsArea = document.querySelector('#milliseconds')

let secondsValue = 0;
let minutesValue = 0;
let milliSecondsValue = 0;
let isPaused = false;
let interval;



let start = document.querySelector('#startBtn')
let pause = document.querySelector('#pauseBtn')
let resume = document.querySelector('#resumeBtn')
let reset = document.querySelector("#resetBtn")


//Events
start.addEventListener('click', startTime)
pause.addEventListener('click', pauseTime)
resume.addEventListener('click', resumeTime)
reset.addEventListener('click', resetTime)

//Functions
function startTime(){
    interval = setInterval(()=>{
        if(!isPaused){
            milliSecondsValue += 10;

            if(milliSecondsValue === 100){
                secondsValue += 1;
                milliSecondsValue = 0;
            }
            if(secondsValue === 60){
                minutesValue += 1;
                secondsValue = 0;
            }

            minutesArea.textContent = formatTime(minutesValue);
            secondsArea.textContent = formatTime(secondsValue);
            miliSecondsArea.textContent = formatMiliSeconds(milliSecondsValue);
        }
    },10)
    start.style.display = 'none';
    pause.style.display = 'block'
}

function pauseTime(){
    isPaused = 'true';
    pause.style.display = 'none';
    resume.style.display = 'block';

}

function resumeTime(){
    isPaused = false;
    pause.style.display = 'block';
    resume.style.display = 'none';
}

function resetTime(){
    clearInterval(interval)
    isPaused = false;

    secondsValue = 00;
    minutesValue = 00;
    milliSecondsValue = 000;

    minutesArea.textContent = formatTime(minutesValue);
    secondsArea.textContent = formatTime(secondsValue);
    miliSecondsArea.textContent = formatMiliSeconds(milliSecondsValue);

    start.style.display = 'block';
    pause.style.display = 'none';
    resume.style.display = 'none';
}
function formatTime(time){
    return time < 10 ? '0'+time : time;
}

function formatMiliSeconds(milliSecondsValue){
    return milliSecondsValue < 100 ? `${milliSecondsValue}`.padStart(3, '0'): milliSecondsValue;
}