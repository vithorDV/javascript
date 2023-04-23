class Character{

    _life = 1;
    maxLife  = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }

    get life (){
        return this._life;
    }
    set life (newLife){
        return this._life = newLife < 0 ? 0 : newLife;
    }

}

class Knigth extends Character {
    constructor(name){
        super(name)
        this.life = 100;
        this.attack = 10;
        this.defense = 12;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character {
    constructor (name){
        super(name)
        this.life = 80 ;
        this.attack = 15;
        this.defense = 4 ;
        this.maxLife =  this.life;
    }
}

class LittleMonster extends Character {
    constructor(){
        super('Little Monster')
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;

    }
}

class BigMonster extends Character {
    constructor(){
        super('Big Monster')
        this.life = 120;
        this.attack = 16;
        this.defense = 8;
        this.maxLife = this.life;
    }
}


class Stage {

    constructor(figther1, figther2, figther1El, figther2El, logObject){
        this.figther1 = figther1;
        this.figther2 = figther2;
        this.figther1El = figther1El;
        this.figther2El = figther2El;
        this.log = logObject;
    }

    start(){
        this.update();
        
        this.figther1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.figther1, this.figther2))
        this.figther2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.figther2, this.figther1))
    }

    update(){
        
        this.figther1El.querySelector('.name').innerHTML = `${this.figther1.name} - ${this.figther1._life.toFixed(1)} HP`;
        let f1Pct = (this.figther1._life / this.figther1.maxLife) * 100;
        document.querySelector('.bar').style.width = `${f1Pct}%`;


        this.figther2El.querySelector('.name').innerHTML = `${this.figther2.name} - ${this.figther2._life.toFixed(1)} HP`;
        let f2Pct = (this.figther2._life / this.figther2.maxLife) * 100;
        document.querySelector('#monster .lifeBar .bar').style.width = `${f2Pct}%`;

    }

    doAttack(attacking, attacked){
        if(attacking.life <= 0  || attacked.life <= 0){
            this.log.addMessage('O oponente já está derrotado.')
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenseFactor = (Math.random() * 2).toFixed(2)

        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacked.defense * defenseFactor

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano ao ${attacked.name}`)
        }
        else{
            this.log.addMessage(`${attacked.name} conseguiu defender`)
        }


        this.update()
    }
}

class Log {
    list = [];

    constructor(listEl){
        this.listEl = listEl
    }

    addMessage(msg){
        this.list.push(msg)
        this.render()

    }
    
    render() {
        this.listEl.innerHTML = '';

        for (let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }

}