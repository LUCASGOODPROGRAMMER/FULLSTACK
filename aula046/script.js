// SET INTERVAL E SET TIMEOUT

function mostrarHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

// console.log(mostrarHora());

// function funcaoDoInterval() {
//   console.log(mostrarHora());
// }

// setInterval(function () {
//     console.log(mostrarHora)
// }, 1000); // sem colocar os parênteses eu passo a referência da função

// const timer = setInterval(function () {
//     console.log(mostrarHora())
// }, 1000); // posso guardar dentro de uma variável

// setTimeout(function() {
//     clearInterval(timer) // posso usar o clear interval para para o timer
// },6000) // setTimeout executa uma única vez após o tempo de espera determinado: 5000 milissegundos

setTimeout(function() {
    console.log("hello friend")
}, 5000)