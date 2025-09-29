function* geradora() {
  yield "Valor 1"; // na primeira geração a função para aqui e retorna um objeto
  yield "Valor 2"; // quando for chamada dnv vai retornar o próximo yield e assim por diante...
  yield "Valor 3";
} // tenho que chamar a função geradora três vezes para retornar os três yield

const g1 = geradora();
// console.log(g1); // Object[Generator] {} // o done indica se terminou as gerações
// console.log(g1.next().value); // retorna o primeiro yield
// console.log(g1.next().value); // retorna o segundo yield
// console.log(g1.next().value); // retorna o terceiro yield
// console.log(g1.next().done); // o done só fica true quando não acha o próximo yield, indicando que acabou os valores

// for (let value of g1) {
//     console.log(value)
// } // o for of interpreta a função geradora;

function* segundoGerador() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
} // gerador infinito
const g2 = segundoGerador();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* terceiroGerador() {
  yield 0;
  yield 1;
  yield 2;
  yield 3;
}

function* quartoGerador() {
  yield* terceiroGerador(); // deleguei o outro gerador
  yield 3;
  yield 4;
  yield 5;
}

const g4 = quartoGerador();
for (let value of g4) {
  console.log(value);
}

function* quintoGerador() {
  yield function () {
    console.log("Vim do y1");
  };

  return function() {
    console.log("Vim do return")
  } // o return quebra o gerador, ele não vai gerar os próximos yield

  // ...

  yield function () {
    console.log("Vim do y2");
  };
}

const g5 = quintoGerador();
const func1 = g5.next().value;
const func2 = g5.next().value

func1();
func2();

// for (let func of g5) {
//   func();
// }
