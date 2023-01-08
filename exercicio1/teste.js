function carregar(){
    let msg = document.getElementById('msg')
    let foto = document.getElementById('foto')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if(hora <=12 && hora > 6){
        msg.innerHTML += '<br/>Está amanhecendo'
        document.body.style.background = '#ff0'
        foto.innerHTML = '<img src = "dia.jpg">'
    }
    if (hora > 12 && hora < 21){
        msg.innerHTML +='<br/>Está ficando tarde'
        foto.innerHTML = '<img src="tarde.jpg">'
        document.body.style.background = '#f70'
    }
    if (hora >=21 && hora <= 6){
        msg.innerHTML +='<br/>Está de noite'
        foto.innerHTML = '<img src="noite.jpg">'
        document.body.style.background= '#007'
    }
}