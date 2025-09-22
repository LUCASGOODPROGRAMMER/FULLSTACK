// crie uma função que recebe dois valores e retorna qual é o maior

// function Maior (x, y) {
//     if(x > y){
//         console.log(`${x} > ${y}`)
//     } else if(y > x) {
//         console.log(`${y} > ${x}`)
//     } else{
//         console.log(`${y} = ${x}`)
//     }
// }
// Maior(20, 20)
// Maior(200, 2000)
// Maior(200, 20)

// const MaiorEasy = (x, y) => (x > y ? x : y);
// console.log(`o maior número é ${MaiorEasy(2, 5)}`)

// function MaiorHardcore(values) {
//   let index = 0;
//   let maiorValor = values[index];
//   while (index < values.length) {
//     if (maiorValor < values[index]) {
//       maiorValor = values[index];
//     }
//     index++;
//   }
//   console.log(maiorValor)
// }

// MaiorHardcore(values)

// function MaiorOtimizado(...args) {
//   console.log(`o maior número é ${Math.max(...args)}`);
// }
// MaiorOtimizado(5, -5, -20, 10, 1);

const values = [1, 7, -200, 10, -5, 12];
const MaiorOtimizadoMais = (...args) => Math.max(...args);
console.log(`o maior número é ${MaiorOtimizadoMais(...values)}`);
