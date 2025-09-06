const programacao = "say my name skyler";
console.log(programacao[0]);
console.log(programacao[programacao.length - 1]);
console.log(programacao.length);

let nome = "lucas";
let sobrenome = "hubner";
let idade = 17;
let genero = "masculino";
let altura = "160cm";

console.log(
  `olá, meu nome é ${
    nome + " " + sobrenome
  }, tenho ${idade} anos, sexo ${genero}, altura ${altura}`
);

const js = "JavaScript é incrível";
console.log(js.search("Script"));
console.log(js.indexOf("Python"));
console.log(js.lastIndexOf("a"));

const rato = "O rato roeu a roupa do rei de roma";
console.log(rato.replace("rato", "gato"));
console.log(rato.replace(/r/g, "R"));

const fatiamento = "JavaScript";
console.log(fatiamento.slice(0, 4));
console.log(fatiamento.slice(4));
console.log(fatiamento.slice(-3));

const estudo = "Estudar JavaScript é divertido";
console.log(estudo.split(/ /));
console.log(estudo.split(/ /, 3));

const meuNome = "lucas hubner";
console.log(meuNome.toUpperCase());
console.log(meuNome.toLowerCase());
console.log(meuNome.charAt(0).toUpperCase() + meuNome.slice(1, 6) + meuNome.charAt(6).toUpperCase() + meuNome.slice(7));

const baseRegex = "123abc456def789";
console.log(baseRegex.match(/[0-9]/g));
console.log(baseRegex.match(/[a-z]/g));
