// const nome = 'Lucas Hubner'
// let position = 0;

// for (let i = 0; i < nome.length; i++){
//     console.log(`index: ${i}, letra: ${nome[i]}`)
// }

// for (let indice in nome) {
//     console.log(`index: ${indice}, letra: ${nome[indice]}`)
// } // for in retorna os indíces de cada valor

// for (let letra of nome){
//     console.log(`index: ${position} letra: ${letra}`)
//     position++
// } // o for of acessa diretamente cada valor dos indíces buscados, sem a necessidade de colocar index do array igual em for in

const nomes = [
  "lucas",
  "keynner",
  "brenda",
  "ana",
  "manu",
  "luiz",
  "carlos",
  "nink",
];

// forEach só pode ser usado em arrays
nomes.forEach((nome, indice, array) => {
  console.log(`index: ${indice}, aluno: ${nome}`);
  console.log(array)
}); // o foreach automaticamente retorna o index no segundo parâmetro e o array inteiro no terceiro parâmetro

const pessoa = {
    nome: 'lucas',
    sobrenome: 'hubner'
}

for(let chave in pessoa) {
    console.log(chave, pessoa[chave])
} // retorna o index em arrays ou chave em objetos

// for (let valor of pessoa) {

// } // for of não funciona em objetos, não é um valor iterable

// For clássico - Geralmento com iteráveis (array ou strings)
// For in - Retornar o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)
