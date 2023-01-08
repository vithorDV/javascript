var voto = document.querySelector('.op1 span');
let cargo = document.querySelector('.op2 span');
let descriçao = document.querySelector('.op4');
let aviso = document.querySelector('.D2');
let lateral = document.querySelector('.direita');
let numeros= document.querySelector('.op3');

let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = []

function começarEtapa (){
    let etapa = etapas[etapaAtual];

    let numeroHtml = ' ';

    numero = '';
    votoBranco = false;

    for(let i=0;i<etapa.numeros;i++){
        if(i===0){
        numeroHtml += '<div class="numero pisca"></div>'
        }else{
        numeroHtml += '<div class="numero"></div>'
        }
    }


    voto.style.display = 'none'
    cargo.innerHTML = etapa.titulo;
    descriçao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml ;
    
}

function atualizaInterface(){
   let etapa = etapas[etapaAtual]
   let candidato = etapa.candidatos.filter((item)=>{
    if(item.numero === numero){
        return true;
    }
    else{
        return false;
    }
   })

   if(candidato.length > 0){
    candidato = candidato[0]
    voto.style.display = 'block'
    aviso.style.display = 'block';
    descriçao.innerHTML = `Nome: ${candidato.nome}</br>Partido ${candidato.partido}`;
    
    let fotosHTML = '';
    for(let i in candidato.fotos){
        if(candidato.fotos[i].small){
            fotosHTML += `<div class="image small"><img src="assets/images/${candidato.fotos[i].url}"alt="">${candidato.fotos[i].legenda}</div>`
        }
        else{
        fotosHTML += `<div class="image"><img src="assets/images/${candidato.fotos[i].url}"alt="">${candidato.fotos[i].legenda}</div>`
        }
    }

    lateral.innerHTML = fotosHTML;
   }
   else{
    voto.style.display = 'block'
    aviso.style.display = 'block';
    descriçao.innerHTML =`<div class="aviso-grande pisca">VOTO NULO</div>` 
   }
}

function clicou(n){
    let elNum = document.querySelector('.numero.pisca');
    if(elNum !== null){
        elNum.innerHTML = n;
        numero = `${numero}${n}`;
        elNum.classList.remove('pisca')
        if(elNum.nextElementSibling !== null){
        elNum.nextElementSibling.classList.add('pisca')
        }
        else{
            atualizaInterface()
        }
    }   
}
function branco (){
if(numero === ''){

votoBranco = true;
voto.style.display = 'block'
aviso.style.display = 'block';
numeros.innerHTML = '';
descriçao.innerHTML =`<div class="aviso-grande pisca">VOTO EM BRANCO</div>`
lateral.innerHTML ='' 
}
else{
    numero = ''
}
}
function corrige (){
começarEtapa()
}
function confirma(){
let etapa = etapas[etapaAtual];

let votoConfirmado = false

if(votoBranco===true){
votoConfirmado = true;

votos.push({
    etapa:etapas[etapaAtual].titulo,
    voto:'branco'
})
}
else if(numero.length ===etapa.numeros){
votoConfirmado = true;

votos.push({
    etapas:etapa[etapaAtual].titulo,
    voto:numero
})
}

if(votoConfirmado){
    etapaAtual++;
    if(etapas[etapaAtual] !== undefined){
        começarEtapa();
    }
    else{
        document.querySelector('.tela').innerHTML = `<div class="aviso-gigante pisca">FIM</div>`
    }
}
}
começarEtapa()

