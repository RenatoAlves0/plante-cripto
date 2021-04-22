let _msg = 'Renato Alves de Oliveira'
let _key = 'senha45fujeodisl6217dfcaiolkpjg'
// let _key = 's9x'

// text2binary = (text) => text.split('').map(char => char.charCodeAt(0).toString(2))
// text2hex = (text) => text.split('').map(char => char.charCodeAt(0).toString(16))
text2charcode = (text) => text.split('').map(x => x.charCodeAt())

// binary2text = (binary) => binary.map(bloco => String.fromCharCode(parseInt(bloco, 2))).join('')
// hex2text = (hex) => hex.map(bloco => String.fromCharCode(parseInt(bloco, 16))).join('')
charcode2text = (charcode) => charcode.map(bloco => String.fromCharCode(bloco)).join('')

let msg = text2charcode(_msg)
let key = text2charcode(_key)

// console.log(text2binary(msg))
// console.log(binary2text(text2binary(msg)))

// console.log(text2hex(msg))
// console.log(hex2text(text2hex(msg)))

// console.log(text2charcode(msg))
// console.log(charcode2text(text2charcode(msg)))

enc_charCode = (texto, chave) => {
    let result = [], i = 0
    texto.forEach(el => {
        if (!chave[i]) i = 0
        if (i % 2)   //É ímpar?
            result.push(chave[i] - el)
        else
            result.push(chave[i] + el)
        i++
    })
    return result
}

enc_binary = (texto, chave) => {
    let result = [], i = 0
    texto.forEach(el => {
        if (!chave[i]) i = 0
        result.push(chave[i] ^ el)
        i++
    })
    return result
}

dec_charCode = (texto, chave) => {
    let result = [], i = 0
    texto.forEach(el => {
        if (!chave[i]) i = 0
        if (i % 2)  //É ímpar?
            result.push(chave[i] - el)
        else
            result.push(el - chave[i])
        i++
    })
    return result
}

dec_binary = (texto, chave) => {
    let result = [], i = 0
    texto.forEach(el => {
        if (!chave[i]) i = 0
        result.push(chave[i] ^ el)
        i++
    })
    return result
}

console.log('\n####### CHAVE #######\n')
console.log(charcode2text(key))

console.log('\n####### TEXTO ORIGINAL #######\n')
console.log(charcode2text(msg))

//ENCRIPTAÇÃO
let enc1 = enc_charCode(msg, key)
// console.log(enc1 + ' #enc1')
console.log('\n####### 1º rodada de ENCRIPTAÇÃO #######\n')
console.log(charcode2text(enc1))

let enc2 = enc_binary(enc1, key)
// console.log(enc2 + ' #enc2')
console.log('\n####### 2º rodada de ENCRIPTAÇÃO #######\n')
console.log(charcode2text(enc2))

let enc3 = enc_binary(enc2, key.reverse())
// console.log(enc3 + ' #enc3')
console.log('\n####### 3º rodada de ENCRIPTAÇÃO #######\n')
console.log(charcode2text(enc3))

//DECRIPTAÇÃO
let dec3 = dec_binary(enc3, key.reverse())
// console.log(dec3 + ' #dec3')
console.log('\n####### 1º rodada de DECRIPTAÇÃO #######\n')
console.log(charcode2text(dec3))

let dec2 = dec_binary(enc2, key)
// console.log(dec2 + ' #dec2')
console.log('\n####### 2º rodada de DECRIPTAÇÃO #######\n')
console.log(charcode2text(dec2))

let dec1 = dec_charCode(dec2, key)
// console.log(dec1 + ' #dec1')
console.log('\n####### 3º rodada de DECRIPTAÇÃO #######\n')
console.log(charcode2text(dec1) + '\n')