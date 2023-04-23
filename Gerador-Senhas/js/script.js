//Element Selection
let generatePasswordButton = document.querySelector('#generate-password')
let generatedPasswordArea = document.querySelector('#generated-password')

//Functions
let getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

let getLetterUpperCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

let getNumber = () =>{
    return Math.floor(Math.random() * 10).toString()
}

let getSymbol = () =>{
    let symbols = '(){}[]=<>/,.!@#$%&=-+'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

let generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) =>{
    let password = '';

    const passwordLength = 10;

    let generator = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    for(let i = 0; i < passwordLength; i = i + generator.length){
        generator.forEach(()=>{
            let ramdomValue = generator[Math.floor(Math.random() * generator.length)]()

            password += ramdomValue;
        })
    }
    password = password.slice(0, passwordLength)
    generatedPasswordArea.style.display = 'block';
    generatedPasswordArea.querySelector('p').innerHTML = `${password}`;
    
}
//Events

generatePasswordButton.addEventListener('click',()=>{
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    )
})

