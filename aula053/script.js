function retornaFuncao(nome) {
//   const nome = "Lucas";
  return function () {
    return `seja bem vindo ${nome}`;
  };
}

const funcao = retornaFuncao('Lucas');
console.log(funcao)
console.dir(funcao)
console.log(funcao())