// Gera um número aleatório entre min e max (em segundos) e converte pra milissegundos
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min) * 1000;
}

// Função que retorna uma Promise simulando uma operação assíncrona
function loading(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Se msg não for uma string válida, rejeita a promessa
      if (typeof msg !== "string" || !msg.trim()) return reject("FATAL ERROR");
      resolve(msg); // Caso contrário, resolve com a mensagem
    }, tempo);
  });
}

// Exemplo de várias Promises com tempos diferentes
const promises = [
  loading("syn", randomNumber(1, 3)),
  loading("syn ack", randomNumber(1, 3)),
  loading("ack", randomNumber(1, 3)),
  // loading(123, randomNumber(1,2)), // Exemplo que causaria erro
];

// ✅ Promise.race — retorna o primeiro valor resolvido
Promise.race(promises)
  .then((value) => console.log("Primeira resolvida:", value))
  .catch((err) => console.error("Erro:", err));

// Array de mensagens de carregamento
const loadingMessages = [
  "Carregando assets...",
  "Preparando o terreno...",
  "Inicializando o universo...",
  "Carregando texturas em 4K...",
  "Montando os shaders...",
  "Otimizando pacotes de dados...",
  "Renderizando partículas de poeira...",
  "Estabelecendo conexão com o servidor...",
  "Aquecendo os motores...",
  "Sincronizando com o sistema...",
  "Desfragmentando bits e bytes...",
  "Compilando scripts secretos...",
  "Criando NPCs com personalidades duvidosas...",
  "Recalculando rota...",
  "Buscando o modo god...",
  "Carregando easter eggs...",
  "Despertando os chefes...",
  "Afiando espadas e recarregando armas...",
  "Quase lá...",
  "Pronto para começar a diversão!",
];

// ✅ Cria um novo array de Promises com base nas mensagens
const loadingPromises = loadingMessages.map((msg) =>
  loading(msg, randomNumber(1, 3))
);

// ✅ Promise.all — espera TODAS terminarem
Promise.all(loadingPromises)
  .then((values) => {
    console.log("Todas as mensagens resolvidas:");
    console.log(values);
  })
  .catch((err) => console.error("Erro ao carregar:", err));

// Função que simula o carregamento principal do jogo
function loadGame() {
  const cache = true; // se já estiver em cache, rejeita

  if (cache) {
    // Força o erro propositalmente
    return Promise.reject("Jogo em cache");
  } else {
    // Simula inicialização normal
    return loading("Game inicializado", randomNumber(1, 3));
  }
}

// ✅ Testando a função loadGame()
loadGame()
  .then((data) => console.log("✅", data))
  .catch((e) => console.error("❌", e));
