// function funcao() {
//   console.log(arguments); // só funciona em function
//   console.log(arguments[0]); // acessando o primeiro argumento
//   let total = 0;
//   for (let argument of arguments) {
//     total += argument;
//   }
//   console.log(total)
// }
// funcao(1, 2, 3, 4, 5); // em vez de dar erro não acontece nada

// function funcao(a, b, c, d, e) {
//   console.log(a, b, c, d, e);
// }

// funcao(1, 2, 3); // 1 2 3 undefined undefined

// function funcao(a, b = 2, c = 4) {
//   // b = b || 0 // forma antiga de adicionar valor padrão
//   console.log(a + b + c);
// }
// funcao(2, "", 10);
// funcao(2, 0, 10);
// funcao(2, undefined, 10); // o valor padrão do parâmetro b vai permanecer

// function funcao({ nome, sobrenome, idade }) {
//   console.log(nome, sobrenome, idade);
// } // posso desestruturar um objeto pelos parâmetros

// const pessoa = {
//   nome: "lucas",
//   sobrenome: "hubner",
//   idade: 17,
// };

// funcao(pessoa);

// function frutinhas([a, b, c, d]) {
//   console.log(a, b, c, d);
// } // posso também desestruturar um array

// const frutas = ["banana", "maçã", "morango", "abacate"];

// frutinhas(frutas);

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    switch (operador) {
      case "+": {
        acumulador += numero;
        break;
      }
      case "-": {
        acumulador -= numero;
        break;
      }
      case "/": {
        acumulador /= numero;
        break;
      }
      case "*": {
        acumulador *= numero;
        break;
      }
      default: {
        console.log("operador inválido");
        return;
      }
    }
  }
  console.log(acumulador);
}

conta("*", 1, 2, 4, 6, 8);
