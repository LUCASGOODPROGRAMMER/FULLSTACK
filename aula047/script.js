// // elementos
// const btnPlay = document.querySelector("#btn-play");
// const btnStop = document.querySelector("#btn-stop");
// const btnReset = document.querySelector("#btn-reset");

// const pTimer = document.querySelector("#p-timer");

// let intervalo;
// let segundos = 0;

// // funções
// const iniciarTimer = () => {
//   if(intervalo) return
//   setColor('#6CF56D')
//   intervalo = setInterval(function () {
//     const data = new Date("", "", "", "", "", segundos);
//     segundos++;
//     pTimer.innerText = data.toLocaleTimeString();
//     if (pTimer.style.color !== "#6CF56D") {
//       setColor('#6CF56D')
//     }
//   }, 1000);
// };

// const pausarTimer = () => {
//   setColor("#FADD72")
//   clearInterval(intervalo);
//   intervalo = null
// };

// const resetarTimer = () => {
//   setColor('#FA3C1E')
//   pTimer.innerText = "00:00:00";
//   segundos = 0;
// };

// function setColor(color) {
//   pTimer.style.color = color
// }

// // eventos
// btnPlay.addEventListener("click", () => {
//   iniciarTimer();
// });
// btnStop.addEventListener("click", () => {
//   pausarTimer();
// });
// btnReset.addEventListener("click", () => {
//   resetarTimer();
// });

function relogio() {
  // elementos
  const btnPlay = document.querySelector("#btn-play");
  const btnStop = document.querySelector("#btn-stop");
  const btnReset = document.querySelector("#btn-reset");
  const pTimer = document.querySelector("#p-timer");

  let intervalo = null;
  let segundos = 0;

  // função utilitária para formatar tempo (sem precisar usar Date)
  const formatarTempo = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  // função para atualizar display do timer
  const atualizarTimer = () => {
    pTimer.innerText = formatarTempo(segundos);
  };

  // mudar cor do timer
  const mudarCor = (cor) => (pTimer.style.color = cor);

  // funções principais
  const iniciarTimer = () => {
    if (intervalo) return; // evita múltiplos intervalos
    mudarCor("#6CF56D");
    intervalo = setInterval(() => {
      segundos++;
      atualizarTimer();
    }, 1000);
  };

  const pausarTimer = () => {
    mudarCor("#FADD72");
    clearInterval(intervalo);
    intervalo = null;
  };

  const resetarTimer = () => {
    mudarCor("#FA3C1E");
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    atualizarTimer();
  };

  // eventos
  btnPlay.addEventListener("click", iniciarTimer);
  btnStop.addEventListener("click", pausarTimer);
  btnReset.addEventListener("click", resetarTimer);

  // inicia zerado
  atualizarTimer();
}

relogio()
