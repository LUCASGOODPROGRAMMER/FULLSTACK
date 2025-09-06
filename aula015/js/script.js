// objeto math
let num1 = 9.43532;

// Math.floor() arredonda para baixo
let num2 = Math.floor(num1);
console.log(num2);

// Math.ceil() arredonda para cima
num2 = Math.ceil(num1);
console.log(num2);

// Math.round() arredonda para o inteiro mais próximo
num2 = Math.round(num1);
console.log(num2);

// Math.max() busca o maior valor de um array
console.log(Math.max(3, 1, 9, 22, -7, -30, 21));

// Math.max()
const maxNumber = [1, 7, 2, -9];
console.log(Math.max(...maxNumber)); // math não aceita arrays diretamente, é necessário usar um spread operator

// Math.min() busca o menor valor de um array
console.log(Math.min(3, 1, 9, 22, -7, -30, 21));

// Math.min()
const minNumber = [3, 1, 9, 22, -7, -30, 21];
console.log(Math.min(...minNumber));

// spred operator
console.log(...minNumber); // transforma o array em argumentos individuais

// Math.random() gera um número aleatório entre 0 e 1
const randomNumber = Math.round(Math.random() * 5 + 5); // posso passar o maior e o menor valor que o math.random pode gerar
console.log(randomNumber);

// Math.sqrt()
const raizQuadrada = 25
console.log(raizQuadrada ** (1/2)); // raiz quadrada usando fórmula
console.log(raizQuadrada ** 0.5); // raiz quadrada usando fórmula
console.log(Math.sqrt(raizQuadrada)) // raiz quadrada usando Math.sqrt()

// Math.PI()

// Math.pow() usado para fazer potenciação
const baseNumber = 5
console.log(Math.pow(baseNumber, 2)) // 5 elevado a 2 com Math.pow()
console.log(baseNumber ** 2) // 5 elevado a 2 com operador aritmético

// dividindo por 0
console.log(100 / 0); // retorna infinity
console.log(!!(100 / 0)) // true boolean



