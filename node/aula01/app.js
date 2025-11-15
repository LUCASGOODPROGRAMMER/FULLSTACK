// // para importar módulo no node é usado require, diferente de import no ES6+.
// // posso usar o diretório absoluto ou relativo para importar um módulo.
// const mod1 = require("./modulo1") // entre aspas eu passo o caminho relativo do modulo a ser importado.
// const mostrarDados = require("./modulo1").info; // posso importar algo em específico dentro do modulo
// // console.log(mod1) // vai me retornar o objeto exports
// mod1.info(); // usando uma função importada
// mostrarDados();

// const falaDados = mod1.info;
// falaDados();

// posso faze uma desestrturação
// const { nome, sobrenome, info } = require("./modulo1");
// console.log(`${info()}: hello friend`);

// importando classe com desctruturing
const { Pessoa } = require("./modulo1");

const p1 = new Pessoa("lucas", "hubner", 17);
// p1.informacoesDaPessoa();

// módulos normalmente não precisam de caminho para serem chamados

// importando módulo do próprio node.js
// const path = require("path"); // path é um módulo padrão do node, ou seja, ele é parte do núcleo do node.js
// console.log(module.path); // o path lida automaticamente com o sistema de arquivos (file system)

// o modulo path tem diversos métodos que me permite lidar com file system do windows e Linux

// npm init -y // para inicializar um projeto node
// npm é gerenciador de pacotes do node
// npm i axios // para instalar o axios
// axios é uma biblioteca javaScript que me permite fazer requisições HTTP de forma simples e eficiente para buscar e enviar dados para um servidor

const axios = require("axios"); // baixei axios com npm, axios se encontra em node modules mas eu não preciso passar o cominho para importar o axios

// axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
//   .then((response) => console.log(response.data))
//   .catch((e) => console.log("destiny unreachable"));
