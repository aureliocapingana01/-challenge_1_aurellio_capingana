//A letra "a" é convertida para "ai"
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

/*
A .- / B -... /C -.-. /D -.. /E . /F ..-. /G --. /H .... /I .. /J .--- /K -.-
L .-.. /M -- /N -. /O --- /P .--. /Q --.- /R .-. /S ... /T - /U ..-
V ...- /W .-- /X -..- /Y -.-- /Z --..
*/
const codificarTexto = () => {
    let textUser = document.querySelector('#textarea').value

    // let a = textUser.replace(/a/gi, '01000001')
    // let b = a.replace(/b/gi, '01000010')
    // let c = b.replace(/c/gi, '01000011')
    // let d = c.replace(/d/gi, '01000100')
    // let e = d.replace(/e/gi, '01000101')
    // let f = e.replace(/f/gi, '01000110')
    // let g = f.replace(/g/gi, '01000111')
    // let h = g.replace(/h/gi, '01001000')
    // let i = h.replace(/i/gi, '01001001')
    // let j = i.replace(/j/gi, '01001010')
    // let k = j.replace(/k/gi, '01001011')
    // let l = k.replace(/l/gi, '01001100')
    // let m = l.replace(/m/gi, '01001101')
    // let n = m.replace(/n/gi, '01001110')
    // let o = n.replace(/o/gi, '01001111')
    // let p = o.replace(/p/gi, '01010000')
    // let q = p.replace('q', '01010001')
    // let r = q.replace('r', '01010010')
    // let s = r.replace('s', '01010011')
    // let t = s.replace('t', '01010100')
    // let u = t.replace('u', '01010101')
    // let v = u.replace('v', '01010110')
    // let w = v.replace('w', '01010111')
    // let x = w.replace('x', '01011000')
    // let y = x.replace('y', '01011001')
    // let z = y.replace('z', '01011010')

    let criptogafrado = a

    
    let newCripto = document.querySelector('.criptografa-texto')
    newCripto.innerHTML = criptogafrado

    let removeText = document.querySelector('#cripto')
    removeText.style.visibility = 'hidden'
    

    // document.getElementById('textarea').value=''
};


const descodificarTexto = () => {
    let descodificar = document.querySelector('.criptografa-texto').value;
    let a = descodificar.replace('mg');

    console.log('botao clicado', descodificar);
    console.log('descodificado', a);
    
    // let a = cod.replace(/mg/gi, 'a');
    // let b = a.replace('01000010', 'b')
    // let c = b.replace('01000011', 'c')
    // let d = c.replace('01000100', 'd')
    // let e = d.replace('01000101', 'e')
    // let f = e.replace('01000110', 'f')
    // let g = f.replace('01000111', 'g')
    // let h = g.replace('01001000', 'h')
    // let i = h.replace('01001001', 'i')
    // let j = i.replace('01001010', 'j')
    // let k = j.replace('01001011', 'k')
    // let l = k.replace('01001100', 'l')
    // let m = l.replace('01001101', 'm')
    // let n = m.replace('01001110', 'n')
    // let o = n.replace('01001111', 'o')
    // let p = o.replace('01010000', 'p')
    // let q = p.replace('01010001', 'q')
    // let r = q.replace('01010010', 'r')
    // let s = r.replace('01010011', 's')
    // let t = s.replace('01010100', 't')
    // let u = t.replace('01010101', 'u')
    // let v = u.replace('01010110', 'v')
    // let w = v.replace('01010111', 'w')
    // let x = w.replace('01011000', 'x')
    // let y = x.replace('01011001', 'y')
    // let z = y.replace('01011010', 'z')

    // let descriptogafrado = b

    // let descodificar = document.querySelector('#textarea')
    // descodificar.innerHTML = descriptogafrado

    // let removeText = document.querySelector('#cripto')
    // removeText.style.visibility = 'hidden'
    

    // document.querySelector('.criptografa-texto').value=''

}
