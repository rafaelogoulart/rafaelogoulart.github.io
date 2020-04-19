// DOM elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Generate event listener
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value; // lengthEl gives a string, '+' sign makes it number/integer
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = myGeneratePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  );
});

// Copy password to clipboard
clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("SENHA COPIADA COM SUCESSO");
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

// Generator functions - http://www.net-comber.com/charset.html
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+-={}[];:,./<>?";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// MY SOLUTION
function myGeneratePassword(lower, upper, number, symbol, length) {
  let char = "";
  var result = "";
  while (result.length < length) {
    let rndmFnctn = Math.floor(Math.random() * 4);
    switch (rndmFnctn) {
      case 0:
        if (upper) {
          char = getRandomUpper();
          result += char;
        } else {
          char = "";
        }
        break;
      case 1:
        if (lower) {
          char = getRandomLower();
          result += char;
        } else {
          char = "";
        }
        break;
      case 2:
        if (number) {
          char = getRandomNumber();
          result += char;
        } else {
          char = "";
        }
        break;
      case 3:
        if (symbol) {
          char = getRandomSymbol();
          result += char;
        } else {
          char = "";
        }
        break;
    }
  }
  return result;
}