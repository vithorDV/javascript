
 function carregar ()  {
var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minutos}`

if (hora <=12 && hora >=7)
{
    imagem.innerHTML = '<img src ="dia.jpg">'
    document.body.style.background='#ff0'
    msg.innerHTML += ' <br/>Agora está amanhecendo'
}
else if (hora >=13 && hora <= 17){
    imagem.innerHTML='<img src="tarde.jpg">'
    document.body.style.background='#f70'
    msg.innerHTML += '<br/>Agora está de tarde'
}
else
{
    imagem.innerHTML='<img src="noite.jpg">'
    document.body.style.background='#007'
    msg.innerHTML += ' <br/>Agora está anoitecendo'
}
}