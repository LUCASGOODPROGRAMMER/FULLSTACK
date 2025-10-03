const carro = {
  nome: "bmw",
  modelo: "M4",
  ano: "2014",
};

// const chaveApi = "nome"; // hipotéticamente uma api mandou a chave
// console.log(carro.nome); // notação de ponto
// console.log(carro[chaveApi]); // notação de colchete para usar valores dinâmicos

for (let chave in carro) {
  console.log(carro[chave]);
} // exemplo de chave dinâmica

function Pessoa(nome, sobrenome, idade) {
  const name = nome;
  const surname = sobrenome;
  const age = idade;

  this.dados = function () {
    console.log(name, surname, age);
  };
}

const pessoa1 = new Pessoa("Lucas", "Hubner", 17);
const pessoa2 = new Pessoa("Gabriel", "Ferreira", 17);

pessoa1.dados(); // Lucas Hubner 17
pessoa2.dados(); // Gabriel Ferreira 17

// delete pessoa1.nome // posso usar para deletar uma chave dentro do objeto

// factory function
function criaPessoa(nome, sobrenome, sexo) {
  return {
    nome,
    sobrenome,
    sexo,
    get dadosPessoa() {
      return `nome:${this.nome}, sobrenome:${this.sobrenome}, sexo:${this.sexo}`;
    },
  };
}

const bebe1 = criaPessoa("lucas", "hubner", "masculino");
console.log(bebe1.dadosPessoa);

// constructor function
function Car(name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
  Object.freeze(this); // asim que o objeto for criado ele não podera ser alterado
} // o objeto é retornado automaticamente

// new cria um objeto vazio {}, pega a palavra this interpretada como chave e atrela ao objeto
// carro1 = (enderço na memória que aponta para o valor)
const carro1 = new Car("ferrari", "buyuki", "2002");
// Object.freeze(carro1) // posso usar freeze para travar o objeto
carro1.name = "supra"; // posso modificar um valor
carro1.dono = "lucas"; // também posso adicionar uma chave
console.log(carro1);
