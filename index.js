let msg = 'Meu nome é Renato Alves de Oliveira\nTenho 23 anos\nSou mestrando em IoT\nGosto de Aves e Plantas'
let key = 'senha45fujeodisl6217dfcaiolkpjg'
// let key = '5f4d78s69g12g4j5k4g5scfg65bd9gf'

text2binary = (text) => text.split('').map(char => char.charCodeAt(0).toString(2)).join(' ')
text2hex = (text) => text.split('').map(char => char.charCodeAt(0).toString(16)).join(' ')
text2charcode = (text) => text.split('').map(x => x.charCodeAt()).join(' ')

binary2text = (binary) => binary.split(' ').map(bloco => String.fromCharCode(parseInt(bloco, 2))).join('')
hex2text = (hex) => hex.split(' ').map(bloco => String.fromCharCode(parseInt(bloco, 16))).join('')
charcode2text = (charcode) => charcode.split(' ').map(bloco => String.fromCharCode(bloco)).join('')

// console.log(text2binary(msg))
// console.log(binary2text(text2binary(msg)))

// console.log(text2hex(msg))
// console.log(hex2text(text2hex(msg)))

// console.log(text2charcode(msg))
// console.log(charcode2text(text2charcode(msg)))

encript = (text) => {
    let text_enc = ''
    let i = 0
    text.split('').forEach(el => {
        if (!key[i]) i = 0
        if (i % 2)  //É ímpar?
            text_enc += (key[i].charCodeAt() - el.charCodeAt()) + ' '
        else
            text_enc += (key[i].charCodeAt() + el.charCodeAt()) + ' '
        i++
    })
    return text_enc.slice(0, -1)
}

decript = (text_enc) => {
    let text_dec = ''
    let i = 0
    text_enc.split(' ').forEach(el => {
        // if (!el) return text_dec
        if (!key[i]) i = 0
        if (i % 2)  //É ímpar?
            text_dec += (key[i].charCodeAt() - el) + ' '
        else
            text_dec += (el - key[i].charCodeAt()) + ' '
        i++
    })
    return text_dec.slice(0, -1)
}

// let aux = encript(msg)
// console.log(charcode2text(aux) + '\n\n')
// console.log(charcode2text(decript(aux)) + '\n')