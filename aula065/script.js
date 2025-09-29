// Filter sempre retorna um array com a mesma quantidade de elementos ou menos

// Retorne números maiores que 20
const numeros = [23, 24, 1, 44, 4, 12, 3, 34, 12, 4, 43 - 14, -124];

// console.log("numeros > 20:");
// for (let numero of numeros) {
//   if (numero > 20) {
//     console.log(numero);
//   }
// }

// filter é um método exclusivo dos arrays
// const filteredNumbers = numeros.filter((numero) => numero > 20); // vai retorna um novo array que contêm todos os elemento que compriram a condição
// console.log(`valores > 20: ${filteredNumbers}`);

// function callbackFilter(value) {
//   return value > 20;
// } // se eu não for reutilizar a função é melhor jogar direto no filter

// const numerosFiltrados = numeros.filter(callbackFilter); // automaticamente o value, index e array vai ser passado para a função
// console.log(numerosFiltrados);

const numerosFiltrados = numeros.filter((value, index) =>
  value > 20 ? console.log(`${value} no index [${index}] é maior que 20`) : ""
);

const pessoas = [
  {
    nome: "Lucas",
    idade: 18,
    cidade: "Ji-Paraná",
    profissao: "Estudante",
  },
  {
    nome: "Fernanda",
    idade: 25,
    cidade: "São Paulo",
    profissao: "Designer",
  },
  {
    nome: "João",
    idade: 30,
    cidade: "Rio de Janeiro",
    profissao: "Programador",
  },
  {
    nome: "Ana",
    idade: 22,
    cidade: "Curitiba",
    profissao: "Médica",
  },
  {
    nome: "Maria",
    idade: 16,
    cidade: "Porto Velho",
    profissao: "Aluna",
  },
];

const pessoasFilteredByName = pessoas.filter(
  (pessoa) => pessoa.nome.length > 4
);
const pessoasFilteredByAge = pessoas.filter((pessoa) => pessoa.idade < 19);
console.log(pessoasFilteredByName);
// console.log(`menores de idade: `, pessoasFilteredByAge) // se eu tentar colocar o array dentro do template strings o js vai converter para objetos
console.log(
  "menores de idade: ",
  JSON.stringify(pessoasFilteredByAge, null, 2)
);

console.log("filtrado por final a");
// const pessoasFilteredByEndLetter = pessoas.filter(
//   (pessoa) => pessoa.nome.toLowerCase()[pessoa.nome.length - 1] === "a"
// );

const pessoasFilteredByEndLetter = pessoas.filter((pessoa) =>
  pessoa.nome.toLowerCase().endsWith("a")
);
console.log(pessoasFilteredByEndLetter);
