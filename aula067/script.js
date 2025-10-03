// Some todos os números reduce
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
// const total = numeros.reduce(function (acumulador, value, index, array) {
//   acumulador += value; // acumulando os valores
// //   console.log(acumulador, value);
//   return acumulador;
// }, 0); // valor inicial do acumulador, acumulador serve para acumular
// console.log(total)

// const total = numeros.reduce(function (acumulador, value) {
//   if (value % 2 === 0) acumulador.push(value);
//   return acumulador;
// }, []); // acumulador virou um array
// console.log(total);

const sumPares = numeros.reduce((acumulador, value) => {
  if (value % 2 === 0) {
    acumulador += value;
    console.log(` valor:${value}`);
  }
  return acumulador;
}, 0);

console.log(sumPares);

const sumImpares = numeros.reduce((acumulador, value) => {
  if (value % 2 !== 0) {
    acumulador += value;
    console.log(` valor:${value}`);
  }
  return acumulador;
}, 0);

console.log(sumImpares);

// função de um reduce tem o objetivo de diminuir um array em um único elemento

// Retorne a pessoa mais velha
const pessoas = [
  { nome: "lucas", idade: 17 },
  { nome: "maria", idade: 16 },
  { nome: "sthéfany", idade: 16 },
  { nome: "gabriel", idade: 18 },
];

const velho = pessoas.reduce((maisVelho, obj) => {
  if (obj.idade < maisVelho.idade) return maisVelho;
  return obj;
});

console.log(velho);
