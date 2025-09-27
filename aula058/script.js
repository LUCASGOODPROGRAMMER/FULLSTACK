// Funções Construtoras retorna objetos
// Função fábrica -> criaPessoa
// Construtora ->  Pessoa (new)

// posso criar um atributo primário
// não preciso colocar vírgula para separar atributos em funções construtoras
function Pessoa(name, surname) {
  // atributos ou métodos privados
  const ID = "fafs4aew";

  const internalMethod = function () {};

  // atributos ou método públicos
  this.name = name;
  this.surname = surname;
  this.method = function () {
    console.log(this.name + ": sou um método");
  };
} // criando uma função construtora CamelCase
// Pessoa.nome = nome

const p1 = new Pessoa("lucas", "hubner"); // tenho que usar new para criar um novo objeto usando função construtora
const p2 = new Pessoa("keynner", "davi");

console.log(p1.name);
console.log(p2.name);
p1.method();
p2.method();
