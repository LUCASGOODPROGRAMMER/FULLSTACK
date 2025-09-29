const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [7, 8, 9];
// const a3 = [...a1, ...a2, ...a3]; // usando spread operator para espalhar os elementos dentro do array
const a4 = a1.concat(a2, a3, 'feito por lucas'); // concatenar os arrays, posso concatenar um ou mais arrays
console.log(a4);
