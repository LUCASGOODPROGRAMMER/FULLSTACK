const path = require("path");

// pegando diretório absoluto
// posso passar intruções dentro do path.resolve em relação a navegação de diretórios
// não preciso colocar barra apenas o nome das pasta para ir navegando
// 2 ponto para subir um diretório
console.log(path.resolve(__dirname, '..', '..')) // independende do sistema operacional o modulo path vai lidar como os diretórios do sistema.

// const product = require("./mod"); // importando uma função em node
// console.log(product(9, 7));

// caminhos absoluto
// console.log(__filename); // vai me retornar o diretório incluindo o arquivo em que estou
// console.log(__dirname); // vai me retorna o diretório em que estou

console.log(__dirname)
