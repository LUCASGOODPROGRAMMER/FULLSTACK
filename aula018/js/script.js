// OBJETOS

const array = [1, 2, 3]; // posso modificar os valores dentro do array mesmo que seja const, mas não posso reatribuir o valor
array.push(4);
array[0] = 0;
console.log(array);

// const nome = "lucas"; // quando tem várias variáveis é melhor criar um objeto
// const sobrenome = "hubner";
// const idade = "17";

const aluno = {
  nome: "lucas", // atributos do objeto
  sobrenome: "hubner",
  idade: 17,
}; // criando um objeto literal usando as chaves

console.log(aluno.nome, aluno.sobrenome, aluno.idade); // acessando as propriedades do objeto

const alunos = [
  { nome: "lucas", sobrenome: "hubner", idade: 17 },
  { nome: "emanueli", sobrenome: "manu", idade: 17 },
]; // vários objetos dentro de um array

console.log(...alunos);

function cadastrarAluno(nome, sobrenome, idade) {
  //   return {
  //     nome: nome, // estou dizendo que a variável desse escopo é uma referência aos parâmetros nome, sobrenome e idade do escopo pai
  //     sobrenome: sobrenome,
  //     idade: idade,
  //   }; // função chamada factory, fabricadora de objetos, retorna objetos
  return {
    nome,
    sobrenome,
    idade,
  }; // não preciso ficar repetindo para acessar os parâmetros do escopo pai, o js já entende a referência
} // uma função que retorna um objeto

const aluno1 = cadastrarAluno("keynner", "davi", 18); // argumentos que estão sendo passados para os parâmetros do cadastrarAluno
const aluno2 = cadastrarAluno("geovanna", "santana", 18); // argumentos que estão sendo passados para os parâmetros do cadastrarAluno
const aluno3 = cadastrarAluno("lucas", "hubner", 18); // argumentos que estão sendo passados para os parâmetros do cadastrarAluno

console.log(aluno1);

// funções dentro de objetos são chamadas de método

const aluno4 = {
  nome: "lucas", // atributos do objeto
  sobrenome: "hubner",
  idade: 17,
  fala() {
    console.log(
      `meu nome é ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos`
    ); // this representa o objeto pai aaluno4, o que permite acessar seus atributos
  }, // dentro do objeto para criar função não é preciso colocar function
  incrementarIdade() {
    this.idade++;
  },
};

aluno4.fala(); // usando o método do objeto aluno4
aluno4.incrementarIdade();
aluno4.fala();
