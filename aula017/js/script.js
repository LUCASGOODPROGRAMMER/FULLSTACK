function saudacao(nome) {
  if (typeof nome === "string") {
    return `seja bem vindo ${nome}`;
  }
  console.log("hello friend");
} // declaração clássica de uma função pode ou não retornar algo

const variavel = saudacao("lucas"); // guardando o resultado da função em uma variável

saudacao(); // chamando função
console.log(variavel);

function calculo(x, y, z = 1) {
  const resultado = x * y - z;
  return `${x} * ${y} - ${z} = ${resultado}`;
} // tudo que está dentro do escopo da função está isolado, o códifo só existe dentro dela e não pode ser modificado ou acessado de outro escopo
const resultado = calculo(); // posso criar variável com o mesmo nome em diferentes escopos, elas não vão colidir entre si
console.log(calculo(3, 5, 10)); // uma função pode ser reutilizada
console.log(calculo(2, 7, 9));
console.log(calculo(2, 7)); // o valor de z está pré definido
console.log(resultado);

// função anônima criada dentro de uma variável
const potencia = function (number) {
  return number ** 2;
};

console.log(potencia(5));

// arrow function, uma forma moderna de criar função
const raiz = (number) => {
  return number * 0.5;
};

// arrow function simplificada
const mult = (number) => number * 2; // quando só tem uma parâmetro posso tirar os parênteses
console.log(mult(5));
