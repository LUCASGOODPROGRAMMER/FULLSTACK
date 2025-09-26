// escopo léxico
const nome = "Luiz";

function falaNome() {
  console.log(nome);
} // escopo léxico, se a variável não for achada no bloco atual, o js começa a caçar nos escopos pais
// falaNome();

function usaFalaNome() {
//   const nome = "Otávio"; // a função lembra de onde ela foi criado, isto não vai imprimir Otávio
  falaNome();
}
usaFalaNome();
