
const defaultCharacter = {
    name: "",
    life: 0,
    maxLife: 0,
    attack: 0,
    defense: 0
}


const createKnight = (name) => {

return {
    ...defaultCharacter,
    name,
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 12
}

}


const createSorcerer = (name) => {

    return{
        ...defaultCharacter,
        name: name,
        life: 50,
        maxLife: 50,
        attack: 16,
        defense: 4
    }

}

const createLittleMonster = () => {
    return{
        ...defaultCharacter,
        name: 'Little Monster',
        attack: 4,
        defense: 4,
        life: 40,
        maxLife: 40
    }
}

const createBigMonster = () =>{
return{
    ...defaultCharacter,
    name: 'Big Monster',
    attack:14,
    defense:6,
    life:120,
    maxLife:120
}
}


const stage = {
    figther1: null,
    figther2: null,
    figther1El: null,
    figther2El: null,


    start(figther1, figther2, figther1El, figther2El) {
        this.figther1 = figther1;
        this.figther2 = figther2;
        this.figther1El = figther1El;
        this.figther2El = figther2El;


        this.figther1El.querySelector(".attackButton").addEventListener('click', () => this.doAttack(this.figther1, this.figther2))

        this.figther2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.figther2, this.figther1))

        this.update()
    },
    update(){
        //fighter1
        this.figther1El.querySelector('.name').innerHTML = `${this.figther1.name} - ${this.figther1.life.toFixed(1)}HP `

        let f1Pct = (this.figther1.life / this.figther1.maxLife) * 100;
        this.figther1El.querySelector('.bar').style.width = `${f1Pct}%`

        //figther2
        this.figther2El.querySelector('.name').innerHTML = `${this.figther2.name} - ${this.figther2.life.toFixed(1)}HP `

        let f2Pct = (this.figther2.life / this.figther2.maxLife) * 100;
        this.figther2El.querySelector('.bar').style.width = `${f2Pct}%`
    },

    doAttack(attacaking,attacked){
        if(attacaking.life <= 0 || attacked.life <= 0){
            log.addMessage('O oponente ja está morto')
            return;
        }
    
        const attackFactor = (Math.random() * 2).toFixed(2)
        const defenseFactor = (Math.random() * 2 ).toFixed(2)

        const actualAttack = attacaking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacaking.name} causou ${actualAttack.toFixed(2)} de dano  em ${attacked.name}`)

        }
        else{
            log.addMessage(`${attacked.name6} conseguiu defender`)
        }


        this.update()
    }
}

const log = {
    list: [],
    addMessage(msg){
        this.list.push(msg)
        this.render()
    },
    render(){
        const logEl = document.querySelector('.log')
        log.innerHTML = ''

        for(let i in this.list){
            logEl.innerHTML+= `<li>${this.list[i]}</li>`
        }
    }

}
