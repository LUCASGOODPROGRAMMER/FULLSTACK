// Atribuição via desestruturação

// let a = "A"; // B
// const saveA = a // variável temporária
// let b = "B"; // C
// let c = "C"; // A
// a = b
// b = c
// c = saveA

// const numbers = [1, 2, 3];
// [a, b, c] = numbers; // atribuindo valores abc desestrutuando o array numbers

// const letters = [b, c, a];
// [a, b, c] = letters;
// console.log(a, b, c);

// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// console.log(numeros[0]) // acessando o valor 1 pelo seu index

// const terceiroNumero = numeros[2]; // guardando o valor 3
// console.log(terceiroNumero)

// const [numberA, numberB, numberC, ...remainingNumbers] = numeros; // desestruturando o array e atribuindo-o à variáveis, rest operator é diferente de spread operator
// rest operator ...otherNumber tá sendo usado para agrupar os outros elementos restantes do array principal em um novo array
// spread operator espalha e rest operator agrupa, ambos usa os mesmos 3 ...
// console.log(numberA, numberB, numberC, remainingNumbers)
// console.log(numberA, numberB, numberC, ...remainingNumbers) // agora foi usado spread para espalhar os elementos

// const [numberA, , numberC, , numberE, ...rest] = numeros; // pulando valores, o rest não vai pegar os valores pulados
// console.log(numberA, numberC, numberE, rest);

const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(numeros[0][1]);
// const [,,[,oito]] = numeros
// console.log(oito)

const [list1, list2, list3] = numeros
console.log(list1, list2, list3)

const [number1, number2, number3] = list1
console.log(number3)