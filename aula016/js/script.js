// array é uma lista de valores
// ele aceita qualquer tipo de valor, porém não é indicado colocar vários tipos de dados em um array
//                 0        1        2           3
const alunos = ["lucas", "joão", "keynner", "einstein"]; // criando um array, valores separado por virgula
const testeArray = [12, "banana", true, false, undefined, null, NaN, "200"];
console.log(...testeArray);

//            0123456789
const nome = "lucas hubner"; // as strings também são indexadas

// o array e a string são indexados de forma diferente
console.log(nome[0]);
console.log(testeArray[1]);

alunos[0] = "manu"; // modificando um elemento do array através de sua indexação
console.log(...alunos);

alunos[4] = "lucas"; // posso atribuir valor a um array que não existe
console.log(alunos);

console.log(alunos.length); // propriedade usada para descobrir a quantidade de elementos
alunos[alunos.length] = "carlos"; // posso descobrir o primeiro array não definido usando .length
console.log(alunos);

alunos.push("Ana"); // empurra um elemento no final do array
console.log(alunos);

alunos.unshift("brenda"); // empurra um elemento no inicio do array
console.log(alunos);

// alunos.pop(); // usado para remover o último elemento do array
// alunos.shift(); // remove o primeiro elemento do array
const removeElement = alunos.pop(); // posso guardar o elemento que removeu
const removeInitElement = alunos.shift();
console.log(alunos);
console.log(removeElement); // ana
console.log(removeInitElement); // brenda

delete alunos[1]; // após o indice ser apagado ele vai ficar vazio
console.log(alunos)

console.log(alunos[50]) // qualquer indice que não existe retorna undefined

console.log(alunos.slice(0, 3)) // vai até o elemento do index 2

console.log(alunos.slice(0, -2)) // o fatiamento vai parar antes dos últimos dois array

console.log(typeof alunos); // array é considerado um objeto
console.log(alunos instanceof Array) // retorna true. usado para verificar a onde ele pertence

// O operador instanceof testa se um objeto tem, em seu prototype, a função construtora.

const teste = 'lucas'
console.log(typeof teste, teste instanceof Array, teste instanceof String, teste instanceof Object)
