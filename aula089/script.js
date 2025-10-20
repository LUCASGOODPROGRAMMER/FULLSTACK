// Gera número aleatório entre min e max (em segundos -> milissegundos)
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min) * 1000;
}

// Função que simula carregamento com Promise
function loading(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string" || !msg.trim()) {
        return reject("FATAL ERROR");
      }
      resolve(msg);
    }, tempo);
  });
}

// Async/Await
async function deploy() {
  try {
    console.log("⏳ Iniciando...");

    const fase1 = await loading("fase 1", randomNumber(1, 2));
    console.log(fase1);

    const fase2 = await loading("fase 2", randomNumber(1, 2));
    console.log(fase2);

    const fase3 = await loading("fase 3", randomNumber(1, 2));
    console.log(fase3);

    console.log("✅ Todas as fases concluídas!");
  } catch (error) {
    console.error("❌ Erro capturado:", error);
  }
}

deploy();

/**
 * Status de uma Promise:
 * - pending   → pendente
 * - fulfilled → resolvida
 * - rejected  → rejeitada
 */
