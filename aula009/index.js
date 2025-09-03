// TIPOS DE DADOS PRIMITIVOS

// template strings: "", '', ``
const nome1 = "lucas"; // string
const nome2 = "lucas"; // string
const nome3 = `lucas`; // string

const num1 = 10; // number
const num2 = 10.53; // number com ponto flutuante

let nomeAluno; // inicializando uma variável undefined = não aponta para local nenhum na memória
let sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória

const aprovado = true; // Boolean usado para verificações, true or false;

console.log(typeof aprovado, aprovado); // posso usar typeof para descobrir o tipo de dado primitivo

const a = [1, 2];
const b = a; // usando uma referência

/*
b.push(3);
console.log(a); */


