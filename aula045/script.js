// try {
//   // executa totalmente quando não tem erros
//   console.log("abri um arquivo");
//   console.log("modifiquei o arquivo e gerou erro"); // quando der erro aqui, a depuração cai direto no catch, podendo deixar o arquivo aberto
//   console.log(abrir);
//   console.log("Fechei o arquivo"); // isso não vai ser executado por conta do erro
// } catch (error) {
//   // executa quando ocorre um erro no try
//   console.log("CATCH: Tratando o erro");
// } finally {
//   // executa independente do trycatch
//   console.log("FINALLY: Eu sempre sou executado");
// }

function returnHour(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}
try {
  const data = new Date("01-01-2008 09:36:54");
  const hour = returnHour();
  console.log(hour);
  console.log(returnHour(data))
} catch (error) {
  // tratamento de erro
  console.log("!Ops, não foi possível retornar a hora");
} finally {
  console.log("Tenha um bom dia");
}
