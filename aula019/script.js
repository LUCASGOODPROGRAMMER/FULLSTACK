// Valores primitivos e valores por referência
/**
 * Primitivos (imutáveis): string, number, boolean, undefined, null (bigint, symbol)
 * Valores copiados
 */

let nome = "lucas";
nome = "keynner";
nome[0] = "B"; // não vai fazer porque a string é imutável
console.log(nome[0], nome);

let a = "A";
let b = a; // Cópia de a
let c = b;
console.log(a, b);

a = "outra coisa";
console.log(a, b);

/**
 * Referência (mutável) - array, object, function
 * Valores passados por referência
 */

let array = [1, 2, 3];
let refArray = array; // em dados mutáveis isso vai ser uma referência a outra variável
let outherRef = refArray; // outra referẽncia que também vai ser afetada e afetar as demais
console.log(array, refArray); // ambos apontam para o mesmo local na memória

array.push(4);
console.log(array, refArray); // todas referências são afetadas pela modificação

refArray.pop(); // removendo o ultimo elemento do array
console.log(refArray, array); // ambos foram afetados

array.unshift(0); // adicionando elemento no inicio do array
console.log(outherRef);

let copiandoRef = [...array]; // spread operator usado para individualizar os argumentos do array
console.log(copiandoRef);
array.push(5);
console.log(array, copiandoRef); // o copiandoRef armazenou o valor array antes do push(5)

const pessoa1 = {
  name: "L",
  age: 17,
};

const pessoaCadastrada = pessoa1; // referência
const cadastroInicial = { ...pessoaCadastrada };
pessoaCadastrada.name = "Lucas";
console.log(pessoaCadastrada);
console.log(cadastroInicial);
