// mais sobre strings

let umaString = 'um "texto"';
let outraString = 'um "texto"'; // caso eu precise colocar aspas duplas sem quebrar a string
let barInvert = "\\banana";
let rato = "O rato roeu a roupa do rei de roma";

console.log(umaString);
console.log(outraString);
console.log(barInvert);

let stringArray = "lucas";
console.log(stringArray[0]); // posso usar o index pq uma string é um array de caracteres
console.log(stringArray[4]); // 0 1 2 3 4 -> l u c a s
console.log(stringArray[-1]); // index fora da caixa retorna undefined
console.log(stringArray.charAt(4)); // método que retorna um elemento do index definido
console.log(stringArray.charCodeAt(4));
console.log(stringArray.codePointAt(4));
console.log(stringArray.length); // propriedade que retorna o tamanho de um array
console.log(stringArray.concat(" ", "nascimento", " ", "hubner")); // método de concatenação
console.log(stringArray.indexOf("as", 2)); // retornar o index que foi encontrado a combinação de caracteres. posso especificar o que deve buscar a partir do index definido com segundo parâmetro
console.log(umaString.lastIndexOf("um", 2)); // o lastIndexOf começa da direita para esquerda, ele faz a mesma coisa que o index of
console.log(umaString.match(/[a-z]/g)); // retorna todas letras minúsculas. método que usa expressão regular, tem várias
console.log(umaString.search(/x/)); // retorna o index
console.log(umaString.replace("um", "Outro")); // posso usar o replace para substituir caracteres
console.log(umaString.replace(/um/, "Mais um")); // usando expressão regular
console.log(rato.replace(/ /, "_"));
console.log(rato.replace(/ /g, "_")); // g é usado para buscar todos os index com o mesmo valor
console.log(rato.length); // propriedade usada para retornar o tamanho do array
console.log(rato.slice(2, 6)); // posso usar slice para fatiar a string -> rato -> index: 3456
console.log(rato.slice(-3)); // com valores negativos o slice fatia da direita para esquerda
// console.log(rato.length - 3);
console.log(rato.slice(31));
console.log(rato.slice(-4));
console.log(rato.slice(30));
console.log(
  rato.slice(
    rato.search(/rei/) - rato.length,
    rato.search(/rei/) - rato.length + 3
  )
);
console.log(rato.substring(rato.length - 4)); // faza mesma coisa que o slice
console.log(rato.split(" ")); // posso dividir a string em vários array
console.log(rato.split(" ", 3)) // posso definir quantas vezes ele vai dividir
console.log(rato.toUpperCase()) // tudo maiusculo
console.log(rato.toLowerCase()) // tudo minusculo

