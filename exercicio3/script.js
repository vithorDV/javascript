function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById('resultados')

    if (inicio.value.length == 0 ||fim.value.length == 0 || passo.value.length == 0)
    {
        res.innerHTML+="impossivel contar"
        alert("dados inválidos!")
    }
    else{
        res.innerText = 'contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f){//contagem crescente
        for(var c = i; c <= f; c += p)
        {res.innerHTML+= `${c} \u{1F449}`}
        }
        else{
            //contagem regressiva
            for(var c = i;c >= f;c-=p)
            {
                res.innerHTML+=`${c} \u{1f449}`
            }
        }

    }
    res.innerHTML+=`\u{1f3c1}`
    
}