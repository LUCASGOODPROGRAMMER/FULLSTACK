// elementos
const body = document.querySelector("body");
const btnGenerate = document.querySelector("#btn-generate");
const btnSetDay = document.querySelector("#set-day");
const spanDay = document.querySelector("#span-day");

// funções
function generatedRandomNumber(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

const setDay = () => {
  const days = [
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado",
    "domingo",
  ];

  let indexGenerated;
  do {
    indexGenerated = generatedRandomNumber(6);
  } while (spanDay.textContent === days[indexGenerated]);

  spanDay.textContent = days[indexGenerated].toUpperCase();
};

const generatedMessage = () => {
  const clean = document.querySelector("#container-message");
  if (clean) {
    clean.remove();
  }
  const div = document.createElement("div");
  div.id = "container-message";

  const p = document.createElement("p");
  p.id = "message";

  const mensagens = [
    "Segunda-feira: recomeço, foco total nos seus objetivos!",
    "Terça-feira: continue firme, cada passo conta!",
    "Quarta-feira: metade da semana vencida, não desista!",
    "Quinta-feira: mantenha o ritmo, a vitória está próxima!",
    "Sexta-feira: sextou! Celebre suas conquistas!",
    "Sábado: dia de relaxar, curtir e repor as energias!",
    "Domingo: planeje sua semana e cuide do seu descanso!",
  ];

  let message;

  switch (spanDay.textContent.toLowerCase()) {
    case "segunda": {
      message = mensagens[0];
      break;
    }
    case "terça": {
      message = mensagens[1];
      break;
    }
    case "quarta": {
      message = mensagens[2];
      break;
    }
    case "quinta": {
      message = mensagens[3];
      break;
    }
    case "sexta": {
      message = mensagens[4];
      break;
    }
    case "sábado": {
      message = mensagens[5];
      break;
    }
    case "domingo": {
      message = mensagens[6];
      break;
    }
  }

  p.textContent = message;

  div.appendChild(p);
  body.appendChild(div);
};

// eventos
btnSetDay.addEventListener("click", () => {
  setDay();
});

btnGenerate.addEventListener("click", () => {
  generatedMessage();
});
