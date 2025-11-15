// exportando uma função em node
module.exports = function (x, y) {
  return x * y;
}; // posso usar módulos para exportar somente uma função, isso é muito usado para reaproveitar trechos de código complexo.

// posso executar diretamente a função no próprio module.exports, embora a função não foi criada para ser utilizada dentro do modulo
// console.log(module.exports(2,10)) // assim que importa já vou receber o resultado

// exemplos de exportação
// module.exports = 2
// module.export = class Animal...
// module.exports.variavel = pessoa1