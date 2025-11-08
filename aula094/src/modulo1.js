const nome = "lucas";
const sobrenome = "hubner";
const idade = 30;
export const status = "ativo"; // exportação direta (export inline)
const cpf = "sou uma variável privada";
// não exportada → não pode ser importada por outros módulos

function soma(x, y) {
  return x + y;
}

export { nome, sobrenome, idade, soma }; // exportação nomeada em grupo

export class Pessoa {
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  info() {
    console.log(this.nome, this.sobrenome, this.idade);
  }
}

// posso usar "export dafault", e no import não preciso especificar o nome do que vai ser importado
// export default { Pessoa }
// import moduloPadrao from './modulo1'; vai importar a classe Pessoa
// só posso usar um export default por modulo

// export { nome as default }; usando o aliases posso exportar uma variável com padrão

// export default (x,y) => x * y; exportando uma arrow function com padrão