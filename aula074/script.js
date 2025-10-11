// // Função construtora - > molde (classe)
// // function Pessoa(name, surname) {
// //     this.nome = name;
// //     this.sobrenome = surname
// //     this.nomeCompleto = () => `prazer, me chamo ${this.nome} ${this.sobrenome}`
// // } // isso é uma função construtora

// // uma função construtora é apenas um molde com a função exclusiva de ser usado para gerar novas instâncias ou objetos

// // gerar novos objetos significa criar uma instância ou seja um processo de instanciação, objetos gerados pela função construtora
// // const person1 = new Pessoa("Lucas", "Nascimento Hubner") // < - Pessoa = Função construtora
// // const person2 = new Pessoa("Keynner", "Davi Savi") // < - Pessoa = Função construtora

// // console.dir(person1) // método dir mostra o elemento com estrutura js no console
// // console.dir(person2) // vai ser mostrado no console o object da instância

// /** Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro
//  * Definição de protótipo: Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.
//  * Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criálo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar esse membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
//  */

// function Pessoa(name, surname) {
//     this.nome = name;
//     this.sobrenome = surname
//     // this.nomeCompleto = () => `original, prazer, me chamo ${this.nome} ${this.sobrenome}, eu sou o método dentro do objeto`
// } // isso é uma função construtora

// // console.log(Date.prototype) // no console do navegador vai mostrar todos os métodos do constructor Date

// const person1 = new Pessoa("Lucas", "Nascimento Hubner") // < - Pessoa = Função construtora
// const person2 = new Pessoa("Keynner", "Davi Savi") // < - Pessoa = Função construtora

// Pessoa.prototype.getAge = "eu vou pegar a sua idade com base na data de nascimento" // vai parar dentro do __proto__ (<Nome do constructor>.protype), é como se eu tivesse criando um método para a constructor

// Pessoa.prototype.nomeCompleto = function() {
//     return `prazer, me chamo ${this.nome} ${this.sobrenome} e eu sou o protótipo dentro do __proto__`
// } // criar um protótipo melhora a eficiência pois sempre que for usado o constructor, esse método vai ser reaproveitado

// console.log(person1.getAge)
// console.log(person2.getAge) // todos registro podem usar o __proto__
// console.log(person1.prototype)

// // Pessoa.prototype === person1.__proto__ true

// console.log(person1.nomeCompleto()) // o motor do js vai caçar o método no próprio objeto primeiramente antes de vasculhar a cadeia de protótipos

// // data - > Date.prototype - > Object.prototype

// // person1 - > Pessoa.prototype - > Object.prototype // a sequência em que um motor vai caçando algum método, atributo ou instância

// forma moderna de criar métodos dentro de protótipo
class Pessoa {
  constructor(name, surname) {
    this.nome = name;
    this.sobrenome = surname;
  }

  nomeCompleto() {
    return `Prazer, me chamo ${this.nome} ${this.sobrenome}`;
  }

  getAge(nascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - nascimento;
  }
}

const person1 = new Pessoa("Lucas", "Hubner");
console.log(person1.nomeCompleto());
console.log(person1.getAge(2007));
