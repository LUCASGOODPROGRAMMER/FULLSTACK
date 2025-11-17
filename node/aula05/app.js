// diretório do arquivo
const path = require("path"); // importando modulo que lida com caminhos
const directory = path.resolve(__dirname, "teste.json");
const write = require("./modules/write");
const read = require("./modules/read");

// array de objetos
// const pessoas = [{ nome: "lucas" }, { nome: "keynner" }, { nome: "gabriel" }];

// convertendo um array de objetos em JSON
// const data = JSON.stringify(pessoas, "", 2);

// write(directory, data);

async function readFile(road) {
  const data = await read(road);
  renderData(data);
}

function renderData(data) {
  JSON.parse(data).forEach((pessoa) => console.log(pessoa.nome));
}

readFile(directory);
