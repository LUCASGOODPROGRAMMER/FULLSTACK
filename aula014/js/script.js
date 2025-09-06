// Numbers
let number1 = 1; // number
let number2 = 2.5; // number
const resultadoSoma = number1 + number2;

console.log(`${number1} + ${number2} = ${resultadoSoma}`); // soma
console.log(number1.toString() + number2); // concatenação e conversão para string
console.log(typeof number1); // tipagem da variável
number1 = number1.toString();
console.log(typeof number1);

let numberBinary = 10;
console.log(numberBinary.toString(2)); // 2 para ver representação binária

// para converter um número para binário devo dividir até não dar mais por dois. Os resto da divisão formarão o número binário

let decimal = 10.435245;
console.log(decimal.toFixed(2)); // para definir o número de casas decimais, se eu não passar nada ele mostra apenas o número inteiro

let valorInteiro = 10;
let valorDecimal = 10.2;
console.log(Number.isInteger(valorInteiro)); // .isInteger() usado para verificar se o valor passado é um inteiro
console.log(Number.isInteger(valorDecimal));

let temp = valorDecimal * "ola baby";
console.log(temp); // retorn NaN
console.log(Number.isNaN(temp)); // verificar se é inválido a conta

// IEEE 754-2008

let test = 0.7;
let test1 = 0.1;
console.log(test + test1);

test += test1;
console.log(test);
test += test1;
test += test1;
console.log(test); // javascript tem uma certa inprecisão
test = test.toFixed(2)
console.log(test) // agora tem o valor certo 1.00

console.log(Number.isInteger(1.00)) // true
console.log(Number.isInteger(test)) // false?

test = parseFloat(test)
console.log(Number.isInteger(1.00)) // true
console.log(Number.isInteger(test)) // true

// tenho que converter para float, assim eu resolvo a imprecisão
test += test1;

console.log(test)

// outra forma de resolver a imprecisão
let test3 = 0.7
let test4 = 0.1

test3 = (test3 * 100 + test4 * 100) / 100
console.log(test3)

// mais uma
let test5 = 0.7
let test6 = 0.1
test5 += test6
console.log(test5)
console.log(Number(test5.toFixed(2)))