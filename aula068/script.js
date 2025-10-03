/** Retorne a soma do dobro de todos os pares
 * Filtrar pares
 * Dobrar valores
 * Reduzir (somar tudo)
 */

const numeros = [5, 12, 32, 8, -22, 21, 18];
console.log(numeros);

// 1 - forma de fazer
// const filteredNumbers = numeros.filter((number) => number % 2 === 0); // filter vai retornar os elementos que compriram as condições
// const doubleNumbers = filteredNumbers.map((number) => number * 2); // map vai retornar um array com todos elementos filtrados duplicados
// const sum = doubleNumbers.reduce((acumulador, value) => {
//   return (acumulador += value);
// }, 0); // reduce vai retornar a soma de todos valores pares em dobro

// console.log(`numeros pares:${filteredNumbers}`);
// console.log(`números em dobro:${doubleNumbers}`);
// console.log(`soma de todos valores:${sum}`);

// 2 - forma de fazer
const numerosPares = numeros
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2)
  .reduce((acumulador, value) => acumulador + value, 0);

console.log(numerosPares);
