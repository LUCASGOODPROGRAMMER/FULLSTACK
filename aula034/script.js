// For - clássico - Estrutura de repetição

// console.log("linha 0")
// console.log("linha 1")
// console.log("linha 2")
// console.log("linha 3")
// console.log("linha 4")
// console.log("linha 5")
// console.log("linha 6")

// for(let i = 0; i <= 5; i++){
//     console.log(`linhas ${i + 1}`)
// }

// for(let i = 30; i >=0; i--){
//     console.log(i)
// }

// let impares = "";
// let pares = "";

// for(let i = 0; i <= 20; i++){
//     if(i % 2 === 0){
//         pares += `\t${i} é par\n`
//     } else{
//         impares += `\t${i} é ímpar\n`
//     }
// }
// console.log(pares, impares)

// let pares = [];
// let impares = [];

// for (let i = -20; i <= 20; i++) {
//   (i % 2 === 0 ? pares : impares).push(
//     `${i} é um número ${i % 2 === 0 ? "par" : "ímpar"}`
//   );
// }

// console.log(pares.join("\n"));
// console.log(impares.join("\n"));

const frutas = ["banana", "morango", "maçã", "laranja", "tangerina"];

let todasFrutas = [""];

for (let i = 0; i < frutas.length; i++) {
  todasFrutas.push(frutas[i]);
}

console.log(`frutas á venda: ${todasFrutas.join("\n")}`);
