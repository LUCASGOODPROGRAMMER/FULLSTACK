const nomes = ["lucas", "keynner", "rafael"];
console.log(...nomes);

nomes[2] = "Carlos";
console.log(...nomes);

nomes.push("Ana"); // empurra o elemento no fim do array
nomes.unshift("Batistta"); // insere o elemento no inicio do array, empurrando todos os outros para frente
console.log(...nomes);

nomes.shift(); // remove o primeiro elemento  de um array
console.log(...nomes);

delete nomes[2]; // deletando um elemento e deixando um item vazio no seu index
console.log(nomes);
console.log(...nomes);

// Funciona para Strings/Objetos/Funções/Números
const frutas = ["banana", "maçã", "laranja", "pokãn", "melancia", "uva"];
const backupFrutas = [...frutas]; // usando spred operator para espalhar os elementos
console.log(frutas);
// OU
// const frutas = new Array('banana', 'maçã', 'laranja', 'pokãn', 'melancia', 'uva')

// Valor por referência
const setFutas = frutas;
setFutas.pop(); // método pop remove o último elemento e retorna o novo array
console.log(frutas);

console.log(`backup original: ${backupFrutas}`);

const todasFrutas = frutas.forEach((fruta, index) => {
  console.log(`fruta${index + 1}: ${fruta}`);
}); // método forEach interpreta o value, index e array de cada elemento

console.log(todasFrutas); // o forEach não retorna nada, apenas undefined

const nomesMaiusculo = nomes.map((nome, index) => {
  return `nome${index + 1}: ${nome.toUpperCase()}`;
}); // o map cria e retorna um novo array

console.log(nomesMaiusculo);

// forEach → só itera, não retorna nada útil.

// map → itera e retorna um novo array transformado.

// 👉 Se você só vai dar console.log, use forEach.
// 👉 Se precisa gerar um novo array com base no antigo, use map.

const ferramentas = [
  "chave",
  "alicate",
  "macaco",
  "serra",
  "serrote",
  "martelo",
  "makita",
];
let ferramentasRoubadas = [];
ferramentasRoubadas.push(ferramentas.shift(), ferramentas.pop());

// pop() -> remove o último elemento do array e o retorna
// shift() -> remove o primeiro elemento do array e o retorna

console.log(`minhas ferramentas: ${ferramentas}`)
console.log(`ferramentas faltando: ${ferramentasRoubadas}`)

// aviso: em um array muito grande não é recomendado usar unshift, pois ele vai deslocar todos os elementos desse array para poder inserir um novo elemento no inicio, podendo causar queda de performance.
console.log(ferramentas)
const algumasFerramentas = ferramentas.slice(2, 4)
console.log(algumasFerramentas)

const carro = 'supra skyline porsche'
const carros = carro.split(" ") // aplit separa uma string em substrings usando um caracter especifico e retorna um novo array das strings separadas 
console.log(carros)

const motos = ['suzuki', 'motocross', 'cdb260']
const moto = motos.join(', ') // com joint posso adicionar todos elementos de um array á uma única string e posso passar qual caracter vai separalos dentro da string
console.log(moto)