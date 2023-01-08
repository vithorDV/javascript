let num = document.getElementById("fnum")
let lista = document.querySelector('#flista')
let res = document.querySelector('#resultado')
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100)
        return true
    else{
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML=''
    }
    else{
        alert("Número inválido ou já se encontra na lista.")
    }
    num.value=''
    num.focus()
}
function finalizar(){
    if(valores.lenght == 0){
        alert('Adicione um número!!!')
    }
    else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML=''
        res.innerHTML=`Ao todo temos ${tot} números cadastrados.</br>`
        res.innerHTML+=`O maior número é ${maior} e o menor é ${menor}</br>.`
        res.innerHTML+=`A soma de todos os números é ${soma}.</br>`
        res.innerHTML+=`A média de todos os números é ${media}.`
    }
}