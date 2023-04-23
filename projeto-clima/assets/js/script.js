document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();

    let input = document.getElementById('searchInput').value;
    if(input !== ''){
        clearInfo()
        aviso('Carregando...')

        let url = 
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=fae16b8b668d812c294b9840e07b4298&units=metric&lang=pt_br`;

        let results = await fetch(url)
        let json = await results.json()
        console.log(json)

        if(json.cod === 200 ){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                icon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })
        }
        else{
            clearInfo()
            aviso("Esta localização não existe!")
        }

    }
    
});

function showInfo(json) {
    aviso('');

    document.querySelector('.resultado').style.display = 'block'
    
    document.querySelector('.titulo').innerHTML=`${json.name},${json.country}
    `
    document.querySelector('.tempInfo').innerHTML=`${json.temp}<sup>ºC</sup>,`
    document.querySelector('.ventoInfo').innerHTML=`${json.windSpeed} <span>km/h</span>`

    document.querySelector('.temp img').setAttribute('src',`http://openweathermap.org/img/wn/${json.icon}@2x.png`)

    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`
}

function clearInfo(){
    aviso('')
    document.querySelector('.resultado').style.display = 'none'
}

function aviso(msg){
    document.querySelector('.aviso').innerHTML = msg
}
