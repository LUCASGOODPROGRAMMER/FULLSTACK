const numeros = [1, 50, 10, 35, 32, 12, 56, 81, 18];
const numerosEmDobro = numeros.map((value) => value * 2);

console.log(numerosEmDobro);

const pessoas = [
  {
    nome: "Lucas",
    idade: 18,
    cidade: "Ji-Paraná",
    profissao: "Estudante",
  },
  {
    nome: "Maria",
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
];

// Retorne todos os nomes dentro do array com objetos:
// const nomes = pessoas.map((pessoa) => pessoa.nome)
// console.log(nomes)

// Delete a chave nome
// const objSemNome = pessoas.map((obj) => {
//   // 1 - forma
//   //   delete obj.nome;
//   //   return obj;

//   // 2 - forma
//   return { idade: obj.idade, cidade: obj.cidade, profissao: obj.profissao};
// });

const objSemNome = pessoas.map((obj) => ({
  idade: obj.idade,
  cidade: obj.cidade,
  profissao: obj.profissao,
}));
console.log(objSemNome);

// Adicione uma chave id em cada objeto
const objComId = pessoas.map((obj) => (obj.id = crypto.randomUUID()));
console.log(pessoas);
