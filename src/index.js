const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  " ": " "
};

function decode(expr) {
  const exprArr = expr.split("");
  const letters = [];
  for (let i = 0; i < exprArr.length; i += 10) {
    let letter = exprArr.slice(i, i + 10);
    letters.push(letter);
  }
  const result = [];
  for (let i = 0; i < letters.length; i++) {
    const tmp = [];
    if (letters[i].join("") === "**********") {
      result.push(" ");
    } else {
      for (let j = 9; j > 0; j -= 2) {
        if (letters[i][j - 1] + letters[i][j] === "11") {
          tmp.unshift("-");
        } else if (letters[i][j - 1] + letters[i][j] === "10") {
          tmp.unshift(".");
        }
      }
      result.push(tmp.join(""));
    }
  }
 return result.reduce((accum, item) => {
    accum = accum + MORSE_TABLE[item];
    return accum;
  }, '');

}

module.exports = {
  decode,
};
