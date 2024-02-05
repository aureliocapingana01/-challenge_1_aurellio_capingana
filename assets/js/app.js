//A letra "a" é convertida para "ai"
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

let criptografado;
let descriptografado;

const criptografar = () => {
  let criptografaTexto = document.querySelector('#criptografar').value;

  criptografado = criptografaTexto
    .replace('e', 'enter')
    .replace('i', 'imes')
    .replace('a', 'ai')
    .replace('o', 'ober')
    .replace('u', 'ufat');

  let removeText = document.querySelector('#info');
  removeText.style.visibility = 'hidden';

  let newCripto = document.querySelector('#descriptografar');
  newCripto.innerHTML = criptografado;

  document.getElementById('criptografar').value = '';
}

const descriptografar = () => {
  let descriptografaTexto = document.querySelector('#descriptografar').value;

  descriptografado = descriptografaTexto
  .replace('enter', 'e')
  .replace('imes', 'i')
  .replace('ai', 'a')
  .replace('ober', 'o')
  .replace('ufat', 'u')

  let newText = document.getElementById('descriptografar');
  newText.innerHTML = descriptografado;
};

// funcao para copiar o texto
const copiarTexto = () => {
    let textoCopiado = document.querySelector('#descriptografar');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand('copy');
    alert(`O texto copiado é ${textoCopiado.value}`);
} 

// const copiarTexto = () => navigator.clipboard.writeText('#descriptografar').value