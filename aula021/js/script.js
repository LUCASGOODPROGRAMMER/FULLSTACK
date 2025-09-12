/** OPERADORES DE COMPARAÇÃO
 * > maior que
 * >= maior que ou igual a
 * < menor que
 * <= menor que ou igual a
 * == igualdade (valor)
 * === igualdade estrita (valor e tipo)
 * != diferente (valor)
 * !== diferente estrito (valor e tipo)
 */

/** EXPRESSÕES LITERAIS */
console.log(10 > 5); // comparações retorna somente true ou false
const comp = 20 > 10; // true
console.log(comp);

const maiorIgual = 10 >= 9; // 10 é maior ou igual a 9 ? true
console.log(maiorIgual);
console.log(10 >= 9);
console.log(10 >= 11); // false
console.log(10 <= 11); // true
console.log(12 <= 11); // false

const num1 = 10;
const num2 = 20;
const compV = num1 < num2; // posso comparar valores guardado em variáveis
console.log(compV);
console.log(10 == 10); // true
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 != "10"); // false
console.log(10 !== "10"); // true
