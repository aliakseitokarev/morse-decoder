const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodedMassage = '';

    function decodeSymb(code) {
        let morseSymbol = parseInt(code);
        let decodSymbol = '';
        let symbol = '';
        while (morseSymbol % 100 > 1) {
            morseSymbol % 100 === 10 ? decodSymbol = `.${decodSymbol}` : decodSymbol = `-${decodSymbol}`;
            morseSymbol = Math.floor(morseSymbol /100);
        }
        symbol = MORSE_TABLE[decodSymbol];
        return symbol;
    }

    for (let i = 0; i < expr.length; i = i+10) {
        expr.slice(i, i+10) === '**********' ? decodedMassage += ' ' : decodedMassage += decodeSymb(expr.slice(i, i+10));  
    }

    return decodedMassage;
}

module.exports = {
    decode
}