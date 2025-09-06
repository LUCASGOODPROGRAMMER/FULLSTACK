let variavelA = "A"; // B
let variavelB = "B"; // C
let variavelC = "C"; // A

// const variavelTemporaria = variavelA;
// variavelA = variavelB;
// variavelB = variavelC;
// variavelC = variavelTemporaria;

[variavelA, variavelB, variavelC] = [variavelB, variavelC, variavelA];

console.log(variavelA, variavelB, variavelC);
