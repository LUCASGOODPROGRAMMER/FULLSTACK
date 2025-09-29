// funções recursivas
function recursiva(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursiva(max);
} // função com recursividade é aquela que se chama de volta

// se a função se repetir muitas vezes pode dar Maximun call stack size exceeded, estourou o limite da pilha de execução.
// pode ser causado por funções recursivas sem condição de parada
// támbem por chamadas em ciclo infinitamente
// getter/setter mal configurados

recursiva(0);
