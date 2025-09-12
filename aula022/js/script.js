/** OPERADORES LÓGICOS
 * && -> AND -> E -> todas expressões precisam ser verdadeiras para retornar true
 * || -> OR -> OU
 * ! -> NOT -> NÂO
 */
console.log(true && true && true && true); // infinitos argumentos tem de ser verdadeiro para retornar true

const expressaoAnd = true && true && false;
console.log(expressaoAnd); // false

const expressaoOr = true || false || false;
console.log(expressaoOr); // true

const usuario = "Lucas";
const senha = "23434";

// const vaiLogar = usuario === "Lucas" && senha === "23434"; // true
const vaiLogar = usuario === "Lucas" && senha === "12"; // false
console.log(vaiLogar)

console.log(false) // false
console.log(!false) // true, eu nego o false
console.log(true) // true
console.log(!true) // false
console.log(!!!!!!!!!!!!!true) // true, nego duas vezes 