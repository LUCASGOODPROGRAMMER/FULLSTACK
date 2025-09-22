// // WHILE E DO WHILE
// const nome = 'Lucas'
// let control = 0;

// while (control < nome.length) {
//     console.log(nome[control])
//     control++
// }

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let min = Math.round(Math.random() * (20 - 5) + 5);
let max = Math.round(Math.random() * (100 - 20) + 20);
let rand = randomNumber(1, 50);

// while(rand !== 10){
//     min = Math.round(Math.random() * (20 - 5) + 5)
//     max = Math.round(Math.random() * (100 - 20) + 20)
//     rand = randomNumber(min, max);
//     console.log(rand)
// }
// console.log(rand);

let teste;

do {
  min = Math.round(Math.random() * (20 - 5) + 5);
  max = Math.round(Math.random() * (100 - 20) + 20);
  teste = randomNumber(min, max);
  console.log(teste);
} while (teste !== 10); // o do while executa pelo menos uma vez antes de verificar enquanto o while só executa se a condição for verdadeira
