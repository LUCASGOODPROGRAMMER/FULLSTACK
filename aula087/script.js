// Promises (ou callbacks) são usadas para lidar com tarefas assíncronas.
// Antes das Promises e do async/await, era comum usar funções de callback,
// que podem gerar o "callback hell" (muitos níveis de função dentro de função).

// Função que gera um número aleatório entre 'min' e 'max' (em segundos) e
// multiplica por 1000 para converter para milissegundos (usado no setTimeout)
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min) * 1000;
}

// Função que simula uma conexão assíncrona.
// Ela recebe uma mensagem, um tempo de espera e um callback opcional.
// function connect(msg, tempo, cb) {
//   // Simula o tempo que uma conexão levaria para ser concluída.
//   setTimeout(() => {
//     console.log(msg, tempo); // Exibe a mensagem e o tempo em ms
//     if (cb) cb(); // Se existir um callback, executa ele após o tempo
//   }, tempo);
// }

// Se chamarmos todas de uma vez, elas terminam em ordem aleatória,
// pois cada uma tem um tempo aleatório de execução:
// connect("conexão 1 estabelecida em:", randomNumber(3, 5), function () {
//   // Só depois da 1ª terminar, chamamos a 2ª
//   connect("conexão 2 estabelecida em:", randomNumber(3, 5), function () {
//     // E só depois da 2ª, chamamos a 3ª
//     connect("conexão 3 estabelecida em:", randomNumber(3, 5));
//   });
// });

// Esse encadeamento garante a ordem das execuções,
// mas deixa o código "aninhado demais" e difícil de manter.
// A partir do ES6, passamos a usar Promises e async/await para evitar isso.
// Agora usamos uma PROMISE para evitar o aninhamento de callbacks.
// A Promise representa uma operação ASSÍNCRONA que pode dar certo (resolve)
// ou dar errado (reject).
function connect(msg, tempo) {
  // Retorna uma nova instância de Promise
  return new Promise((resolve, reject) => {

    if(typeof msg !== "string" || !msg.trim()) reject(new Error("ERROR 404"))

    setTimeout(() => {
      // Aqui simulamos que a "conexão" sempre dá certo
      // Se tudo ocorrer bem, chamamos resolve()
      resolve({ msg, tempo });

      // Caso quisesse simular um erro, poderíamos fazer:
      // if (algumErro) reject('Erro na conexão');
    }, tempo);
  });
}

// O encadeamento (chaining) com .then() permite executar várias promessas em sequência,
// de forma ordenada e sem precisar de funções dentro de funções (como nos callbacks).
connect("Estabelecendo conexão", randomNumber(1, 3))
  .then((response) => {
    // Este bloco é executado quando o resolve() da primeira Promise é chamado
    console.log(response);
    // Retorna uma nova Promise para encadear o próximo passo
    return connect("Sincronizando base da dados", randomNumber(1, 3));
  })
  .then((response) => {
    console.log(response);
    // Encadeia a terceira Promise
    return connect("Carregando shaders", randomNumber(1, 3));
    // return connect(123, randomNumber(1, 3)); vai gerar um reject e vai cair em catch
  })
  .then((response) => {
    console.log(response);
    // Aqui podemos retornar um valor simples (não precisa ser Promise)
    return "jogo iniciado com sucesso";
  })
  .then((response) => {
    // Esse then recebe o valor retornado do anterior
    console.log(response);
  })
  .catch((error) => {
    // O .catch() captura qualquer erro gerado em qualquer parte da cadeia de .then()
    console.error(
      "Ops! ocorreu um erro: não foi possível carregar os patchers: ",
      error
    );
  });

console.log("Iniciando jogo") // as promisses vão executar em paralelo ao código do escopo externo, o código não vai parar de rodar até que as promisse sejam resolvidas

