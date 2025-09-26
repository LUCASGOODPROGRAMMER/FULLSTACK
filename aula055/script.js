// funções auto invocadas
// IIFE -> Immediately invoked function expression

// function qualquerCoisa() {
//   console.log(43124);
// }

// qualquerCoisa();

(function (name, surname, nickname) {
  const nome = "lucas";
  function hello(nome) {
    return `hey ${nome}`;
  }
  hello();

  console.log(name, surname, nickname);
})("L", "hubner", "botx"); // crio uma função sem nome que se autoinvoca, ela não pode interferir no escopo global
