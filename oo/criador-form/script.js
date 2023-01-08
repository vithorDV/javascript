class Form{
    items = []
    method = 'GET'

    constructor(container, method, action){
        this.container = document.querySelector(container)
        this.method = method
        this.action = action
        

    }
    addItem(item){
        this.items.push(item)
    }
    render(){
        let formElement = document.createElement('form')
        formElement.setAttribute('method',this.method)
        formElement.setAttribute('action',this.action)

        for(let i in this.items) {
            this.items[i].render(formElement);
        }

        this.container.appendChild(formElement)
    }
}
class Input{
    _type = 'text'
    required = false

    constructor(name,label){
        this.name = name
        this.label = label
    }
    get type(){
        return this._type
    }
    set type(t){
        if(['text','password','email','submit'].includes(t)){
            this._type = t
        }
        else{
            throw new Error(`Input ${type} não existe`)
        }
    }
    render(formElement){
        let ele = document.createElement('input')
        ele.type = this.type
        ele.name = this.name
        ele.placeholder = this.label
        ele.required = this.required
          
        formElement.appendChild(ele)
    }
}

class Button extends Input{
constructor(label){
    super('',label)
    this.type = 'submit'
}
render(formElement){
let ele = document.createElement('input')
ele.type = this.type
ele.value = this.label
formElement.appendChild(ele)

}
}
let formulario = new Form('.formArea','GET','#')

let email = new Input("Email","digite seu email")
email.type = 'email'
email.required = true
formulario.addItem(email)

let password = new Input('password','digite sua senha')
password.type = 'password'
formulario.addItem(password)

let button = new Button('Enviar')
formulario.addItem(button)

formulario.render()