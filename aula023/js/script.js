// AVALIAÇÃO DE CURTO CIRCUITO
/**
 * && -> false && true  -> false
 * || -> true || false -> true
 */

console.log("L" && 0 && "M"); // a verificação vai parar assim que encontral false
console.log("L" && true && "M"); // vai retornar a ultima expressão verdadeira
console.log("L" && true && NaN); // retorna o NaN

/** valores FALSY
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */
console.log("L" && "M");
console.log("L" && "" && "M"); // vai retornar o valor avaliado em false

function hey() {
  return console.log("hey boy");
}

const vaiExecutar = false;

vaiExecutar && hey();

!vaiExecutar && hey();

console.log(0 || false || null || "L" || true); // o or retorna true mesmo que aja apenas um valor verdadeiro

let corUsuario = null;
corUsuario = "vermelho";
const corPadrao = corUsuario || "branco"; // se o usuário não definir a cor vai retornar branco
console.log(corPadrao);

const a = 0;
const b = null;
const c = "false";
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
