// Definindo variáveis com nome e sobrenome
// const nome = "Lucas";
// const sobrenome = "Hubner";

// Função que imprime as variáveis no console (ainda não inclui a variável 'idade' definida abaixo)
// const falaDados = () => {
//   return `${nome} ${sobrenome}` // Aqui há um erro, 'idade' não foi definida ainda
// };

// Comentário sobre o comportamento do Node.js
// console.log(module); // Mostra o objeto 'module', que contém informações como id do diretório, exports, filename, etc.

// Exemplo de exportação no Node.js usando module.exports
// O objeto 'module' tem uma chave 'exports', que é um ponto de exportação de dados no Node.js

// Primeira forma de exportação, usando 'module.exports' diretamente:
// module.exports.nome = nome; // Exporta a variável 'nome' para o objeto 'module.exports'
// module.exports.sobrenome = sobrenome; // Exporta a variável 'sobrenome' para 'module.exports'
// module.exports.idade = 17; // Exporta a variável 'idade' para 'module.exports'
// module.exports.infoPeople = falaDados; // Exporta a função 'falaDados' para 'module.exports'

// Segunda forma de exportação, usando 'exports', que é uma referência ao objeto 'module.exports':
// exports.nome = nome; // Exporta 'nome' diretamente para o objeto 'exports'
// exports.sobrenome = sobrenome; // Exporta 'sobrenome' diretamente para o objeto 'exports'
// exports.info = falaDados; // Exportando uma função
// 'this' no contexto de módulos Node.js refere-se ao objeto 'exports' em vez do objeto global
// this.teste = "estou em exports"; // Define uma chave 'teste' em 'exports' com o valor dado

// Exibe o objeto 'module.exports' para ver o que foi exportado até agora
// console.log(module.exports); // Mostra o objeto 'exports' do módulo, que contém todas as exportações

class Pessoa {
  constructor(name, surname, age) {
    this.id = crypto.randomUUID()
    this.nome = name;
    this.sobrenome = surname;
    this.idade = age;
  }

  informacoesDaPessoa() {
    Object.keys(this).forEach((chave) => {
      console.log(`${chave}: ${this[chave]}`);
    });
  }
}

exports.Pessoa = Pessoa;

/** FORMAS DE EXPORTAR
 * module.exports.nome = 'lucas'
 * exports.nome = 'lucas'
 * this.nome = 'lucas'
 * module.exports = {
 * ..., age
 * }
 */

// apenas module.exports aceita objetos