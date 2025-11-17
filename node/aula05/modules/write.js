const fs = require("fs").promises; // importando fs com promises
// const directory = path.resolve(__dirname, "..", "teste.txt"); // guardando o caminho de um arquivo
// const outherDirectory = path.resolve(__dirname, "..", "outroTeste.txt");

// // método para escrever dentro de um arquivo
// // fs.writeFile(caminho, 'conteudo', {options})
// fs.writeFile(directory, "eu fui escrito pelo método writeFile.", {
//   flag: "w", // a flag w serve para dar um replace caso o arquivo de origem já exista. posso usar a flag a para acrescentar o conteúdo ao final do arquivo em vez de dar um replace >>
//   //   encoding: "utf8",
// });

// fs.writeFile(outherDirectory, "sendo acrescentado por conta da flag a\n", {
//   flag: "a",
// });

module.exports = (directory, data) => {
  fs.writeFile(directory, data, { flag: "w" });
};
