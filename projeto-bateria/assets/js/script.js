document.body.addEventListener('keyup', (event) => {
    tocarSom(event.code.toLowerCase());
});

document.querySelector('#botao').addEventListener('click',()=>{
    let song = document.getElementById('input').value
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
        
    }
})

function tocarSom(sound){
let audioElement = document.querySelector(`#s-${sound}`);
let keyElement = document.querySelector(`div[data-key="${sound}"]`);

if(audioElement){
    audioElement.currentTime = 0;
    audioElement.play()
}

if(keyElement){
    keyElement.classList.add('active')
    
    setTimeout(()=>{
        keyElement.classList.remove('active')
    },300)
}
}

function playComposition(songArray){
    let wait = 0;

for(let songItem of songArray) {
    setTimeout(()=>{
        tocarSom(`key${songItem}`);
    },wait);

    wait += 250
    }
}