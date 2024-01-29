//A letra "a" é convertida para "ai"
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

const criptografarTexto = () => {
    let textUser = document.querySelector('#textarea').value

    let newLetraA = textUser.replace('a', 'ai')
    let newLetraE = newLetraA.replace('e', 'enter')
    let newLetraI = newLetraE.replace('i', 'imes')
    let newLetraO = newLetraI.replace('o', 'ober')
    let newLetraU = newLetraO.replace('u', 'ufat')

    let criptogafrado = newLetraU

    
    let newCripto = document.querySelector('.criptografa-texto')
    newCripto.innerHTML = criptogafrado

    let removeText = document.querySelector('#cripto')
    removeText.style.visibility = 'hidden'
    

    document.getElementById('textarea').value=''
}
