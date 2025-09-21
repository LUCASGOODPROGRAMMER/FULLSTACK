// escopo global

// let name1 = "lucas"; // let não pode ser redeclarado
// var name2 = "lucas"; // var pode ser redeclarado
// var name2 = "hubner"; // redeclaração de Var sobrescreve a declaração anterior

// // console.log(name2)

// const verdade = true;

// // Let tem escopo de bloco { ... bloco }, ou seja, posso declarar variáveis com o mesmo nome desde que estejam em escopos diferente.
// // Var só tem escopo de função
// if (verdade) {
//   // escopo de bloco
//   let name1 = "Júnior";
//   var name2 = "Alfred";

//   if (verdade) {
//     let name1 = "Keynner"; // se esse let for declarado depois da chamada o js vai ver que tem um let com o mesmo nome no bloco e vai dar erro em vez de buscar o mesmo let no escopo atual ou maior
//     var name2 = "Davi";
//     console.log(name1, name2); // keynner davi
//   }

//   console.log(name1, name2); // júnior davi
// }

// console.log(name1, name2); // lucas davi

// A última redeclaraçaõ do var afetou em todos os blocos

// var userName = "Alter White";
// var userInfo = "cozinheiro"; // pode ser acessado pelo escopo menor
// function welcomeMessage() {
//   var userName = "Heisenberg"; // não pode ser acessado pelos escopos maiores
//   console.log(`seja bem vindo ${userName} ${userInfo}`);
// }
// welcomeMessage();
// console.log(`seja bem vindo ${userName} ${userInfo}`);
// // console.log(userName) // vai dar erro pq var tem escopo de função
sobrenome = 'HUBNER'
console.log(sobrenome) // emprime undefined

// var sobrenome = "Hubner" // hoisting, o js eleva as declarações no topo do arquivo

// no let não ocorre o hoisting

console.log(hostName) // da erro
let hostName = 'Keynner'