const nomes = ["lucas", "keynner", "manu", "geovana", "yamamoto"];

// nomes.splice(indice, delete, ...elementos);
// const nomesRemovidos = nomes.splice(nomes.length - 2, Number.MAX_VALUE) // com o splice posso definir a partir de qual index vou começar a deletar e o número de elemento a ser deletado
// const nomesRemovidos = nomes.splice(3, 2, 'Maria', 'Stefhy') // no indice 4, removo adiciono elementos
// const nomesRemovidos = nomes.splice(-1, 1) // simulando o pop
// const nomesRemovidos = nomes.splice(0, 1) // simulando o shift
// const nomesRemovidos = nomes.splice(nomes.length, 0, 'einstein') // simulando push
const nomesRemovidos = nomes.splice(0, 0, "garotos vadios"); // simulando unshift
console.log(nomes);
console.log(nomesRemovidos);
