function tabuada(){
    var num = document.getElementById("numeros")
    var tabu = document.getElementById("tab")
    if (num.value.length== 0){
        alert("Por favor, digite um número!")
    
    }
    else{
        var n = Number(num.value)
        var c = 1
        while(c <=10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabu.appendChild(item)
            c++
        }
    }

}