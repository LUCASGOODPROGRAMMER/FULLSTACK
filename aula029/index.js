const data = new Date(`1984-02-${Math.ceil(Math.random() * 28)} 00:00:00`);
const diaDaSemana = data.getDay(); // dia da semana

console.log(diaDaSemana);

// com if/else (não recomendado)
if (diaDaSemana === 0) {
  console.log("hoje é dia de maldade");
} else if (diaDaSemana === 1) {
  console.log("hoje é segunda-feira");
} else if (diaDaSemana === 2) {
  console.log("hoje é terça-feira");
} else if (diaDaSemana === 3) {
  console.log("hoje é quarta-feira");
} else if (diaDaSemana === 4) {
  console.log("hoje é quinta-feira");
} else if (diaDaSemana === 5) {
  console.log("sextou bb");
} else if (diaDaSemana === 6) {
  console.log("hoje é sábado");
}

function getDayOfTheWeek(diaDaSemana) {
  let day;

  switch (diaDaSemana) {
    case 0:
      console.log("hoje é dia de maldade");
      day = "domingo";
      break;

    case 1:
      console.log("hoje é segunda-feira");
      day = "segunda";
      break;

    case 2:
      console.log("hoje é terça-feira");
      day = "terça";
      break;

    case 3:
      console.log("hoje é quarta-feira");
      day = "quarta";
      break;

    case 4:
      console.log("hoje é quinta-feira");
      day = "quinta";
      break;

    case 5:
      console.log("sextou bb");
      day = "sexta";
      break;

    case 6:
      console.log("hoje é sábado");
      day = "sábado";
      break;

    default:
      console.log("algo deu errado");
      day = undefined;
  }

  return day; // agora a função devolve o valor
}

// com switch/case

console.log(`Dia Da Semana:${getDayOfTheWeek(diaDaSemana)}`);

function randomMessages(dia) {
  const frases = [
    "Domingo é dia de descanso e planejamento para a semana!",
    "Segunda-feira: hora de recomeçar com força total!",
    "Terça-feira: siga firme, a semana está só começando!",
    "Quarta-feira: metade da semana vencida, continue!",
    "Quinta-feira: falta pouco para o descanso, não desanime!",
    "Sexta-feira: sextou, missão cumprida!",
    "Sábado: aproveite para recarregar as energias e se divertir!",
  ];
  return console.log(frases[dia]);
}

randomMessages(diaDaSemana);
