// Declaração de função (Funcao hoisting)

welcomeMessage(); // isso só funciona em funcao hoisting
function welcomeMessage() {
  console.log("seja bem vindo");
} // esse tipo de função é elevado pelo js permitindo que ele seja chamado antes da declaração

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado.");
};

souUmDado;

function executaFuncao(funcao) {
  console.log("Vou executar sua função abaixo");
  funcao();
}
executaFuncao(souUmDado);

// Arrow function
const arrowFunction = () => {
  console.log("Sou uma arrow function");
};

arrowFunction();

// setInterval(funcao, 1000)
// setInterval(() => {
//     funcao();
// }, 1000)

// Dentro de um objeto
const obj = {
  falar() {
    console.log("Estou falando...");
  },
};
obj.falar();
