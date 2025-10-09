// MÉTODOS ÚTEIS PARA OBJETOS

const product = {
  name: "caneca",
  price: 1.9,
};

const originalProduct = { ...product, isCopy: true }; // estou copiando o objeto usando um spred operator

const outherIten = product; // está apontando para o mesmo valor na memória que product

product.name = "faca";
outherIten.price = 19.8;

// console.log(outherIten);
// console.log(product);

const caneca = Object.assign({}, originalProduct, { material: "granizo"}); // outra forma de copiar as chaves de um objeto e jogar dentro de um novo objeto
// const caneca2 = {nome: product.name, price: product.price} // forma manual de copiar as chaves de outro objeto, recomendado somente quando quero pegara poucas chaves de um objeto, esse é a pior forma de copiar um objeto

// Object.freeze(caneca) // usando método freeze poso congelar um objeto impedindo que ele seja alterado futuramente
caneca.price = 15.9;

console.log(caneca);
console.log(product);
console.log(outherIten);
console.log(originalProduct);
console.log(Object.keys(product)); // .keys é um método de Object, usado para retornar todas as chaves de um objeto dentro de um array, ou seja posso aproveitar esse array para automatizar processos

console.log(Object.getOwnPropertyDescriptor(product, 'name')) // esse método vai me retornar um objeto com todas configurações ou propriedades da chave passada como segundo argumento do tipo string. primeiro vem o objeto e depois a chave]

console.log(Object.entries(product)) // método entries vai me retornar uma array que retorna consecutivamente uma array com a chave e seu valor

for (let [key, value] of Object.entries(product)) {
  console.log(key, value); // pegando o primeiro e segundo elemento retornado dentro de um array ['name', 'faca']
} // estou nomeando cada argumento retornado por product

console.log(Object.values(product)) // retorna somente os valores dentro das chaves