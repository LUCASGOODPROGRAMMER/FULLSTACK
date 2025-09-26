// // return
// // Retorna um valor
// // Termina a função
// function soma(a, b){
//     return a + b
// }

// let soma1 = soma(2, 7)
// console.log(soma1)

// function createPerson(name, age, surname, sex) {
//   return {
//     nome: name,
//     sobrenome: surname,
//     idade: age,
//     sexo: sex,
//   };
// }

// const p1 = createPerson("lucas", 17, "hubner", "masculino");
// const p2 = {
//   nome: "lucas",
//   sobrenome: "hubner",
//   idade: 17,
//   sexo: "Masculino",
// };

// console.log(typeof p1);
// console.log(typeof p2);

// function falaFrase(comeco) {
//   function falaResto(resto) {
//     return comeco + ' the giant ' + resto;
//   }
//   return falaResto;
// } // essa função retorna uma outra função

// const hello = falaFrase("hello")
// console.log(hello)
// console.log(hello('world'))

// function duplica(n) {
//   return n * 2;
// }

// function triplica(n) {
//   return n * 3;
// }

// function quadriplica(n) {
//   return n * 4;
// }

// Função Closure
// clássico exemplo de closure, uma função que retorna outra função
function createMultiply(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = createMultiply(2);
const triplica = createMultiply(3);
const quadriplica = createMultiply(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
