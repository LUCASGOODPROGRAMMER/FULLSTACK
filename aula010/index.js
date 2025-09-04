/**
 * Operadores Aritméticos
 * + Adição e Concatenação
 * - subtração
 * / divisão
 * * multiplicação
 * ** potenciação
 * % Resto da divisão
 */

const num1 = 2;
const num2 = 4;
const resultado1 = num1 + num2;
const resultado2 = num1 - num2;
const resultado3 = num1 / num2;
const resultado4 = num1 * num2;
const resultado5 = num1 ** num2;
const resultado6 = num1 % num2;

console.log(
  resultado1,
  resultado2,
  resultado3,
  resultado4,
  resultado5,
  resultado6
);

/** precedência de calculo
 * ()
 * **
 * * / %
 * + -
 */

let contador = 2;
contador++; // usado para autoincrementar + 1
console.log(contador);

let counter = 1;
console.log(counter++); // primeiro mostra o valor e depois incrementa
console.log(counter);

let counter2 = 1;
console.log(++counter2); // pré incrementa mais 1 e depois exibi o valor

// decrementação
let cont = 1;
console.log(--cont);

const passo = 10;
let conte = 0;

conte += passo; // conte = conte + 10
conte += passo; // conte = 10 + 10
conte += passo; // conte = 20 + 10
console.log(conte);

/*
let count = 2;
count += count;
count += count;
console.log(count);*/

// NaN -> Not a number
const numero1 = 10;
const numero2 = "Lucas";
console.log(numero1 * numero2);

const number = 10;
const string = "10";
console.log(number + string);

/** FORMAS DE CONVERTER PARA NUMBER
 * parseInt()
 * parseFloat()
 * Number()
 */

const teste1 = "10.50";
const teste2 = "10.50";
const teste3 = "10.50";

console.log(parseInt(teste1));
console.log(parseFloat(teste2));
console.log(Number(teste3));
