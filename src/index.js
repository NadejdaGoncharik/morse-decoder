const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = [];
    let char;
    for (let i = 0; i < expr.length; i = i + 10) {
        char = [expr.substr(i, 10)];
        result.push(char);
    }
    let sign = [];
    result.forEach((element, index) => {
        sign[index] = "";
        for (let i = 0; i < 10; i = i + 2) {
            char = element[0].substr(i, 2);
            if (char === "10") {
                sign[index] += ".";
            }
            if (char === "11") {
                sign[index] += "-";
            }
        }
    });
    return sign
        .map((element) => (element !== "" ? MORSE_TABLE[element] : " "))
        .join("");
}

module.exports = {
    decode
}