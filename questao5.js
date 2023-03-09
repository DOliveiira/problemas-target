let str = "Target";
let newStr = "";

for (let i = str.length - 1; i >= 0; i--) { // Loop que percorre a string original do fim ao começo
  newStr += str[i];
}

console.log(newStr);