const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let numero of numeros) {
//   if (numero % 2 !== 0) {
//     continue; // o continue faz o for of pular para a próxima interação de laço, ignorando o loop atual e todo o código que vem logo em seguida no bloco maior
//   }
//   if (numero === 10) {
//     console.log("eu achei o último número par: 10");
//     break; // posso usar o break para matar um loop assim que eu conseguir o que quero.
//   }
//   console.log(`o número ${numero} é par`);
// }

let i = 0;
do {
  let numero = numeros[i];
  if (numero % 2 !== 0) {
    console.log(`pulei o número ímpar ${numero}`)
    i++
    continue; // o continue faz o for of pular para a próxima interação de laço, ignorando o loop atual e todo o código que vem logo em seguida no bloco maior
  }
  if (numero === 10) {
    console.log("eu achei o último número par: 10");
    i++
    break; // posso usar o break para matar um loop assim que eu conseguir o que quero.
  }
  console.log(`o número ${numero} é par`);
  i++
} while (i < numeros.length) 
