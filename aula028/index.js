// OBJECT DATE
const data = new Date(); // função construtora Date
console.log(data);
console.log(data.toString());
console.log(new Date(0)); // 1970-01-01 Timestamp unix ou época unix
console.log(new Date(2019, 3, 20, 15, 14, 27, 999).toString());
console.log(new Date(2019, 3, 20, 15, 14, 120).toString()); // mesmo que eu exceda o valor so minutos, segundos, o js corrigi automaticamente
// new Date() a, m, d, h, mn, s, ms
console.log(new Date("1990-04-29 20:20:59")); // yyyy-mm-dd
// new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

// métodos Date
console.log(`Dia ${data.getDate()}`);
console.log(`Mês ${data.getMonth() + 1}`); // mês começa do zero
console.log(`Ano ${data.getFullYear()}`);
console.log(`Hora ${data.getHours()}`);
console.log(`Minutos ${data.getMinutes()}`);
console.log(`Segundo ${data.getSeconds()}`);
console.log(`Milissegundos ${data.getMilliseconds()}`);
console.log(`Dia da semana ${data.getDay()}`); // 0 - Domingo, 6 - Sábado

const myData = new Date().getFullYear();
const lowDate = new Date("2008-04-29").getFullYear();
const result = myData - lowDate;
console.log(result);

const dataNow = Date.now();
console.log(dataNow); // data atual em milissegundos
console.log(new Date(dataNow));

function formatData(data) {
  // console.log(data)
  const day = zeroLeft(data.getDate());
  const mounth = zeroLeft(data.getMonth() + 1);
  const year = data.getFullYear();
  const hours = zeroLeft(data.getHours());
  const minutes = zeroLeft(data.getMinutes());
  const seconds = zeroLeft(data.getSeconds());

  return `Dia ${day} do ${mounth} de ${year}\nhoras: ${hours}, minutos: ${minutes}, segundos: ${seconds}`;
}

function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

const dataBrasil = formatData(data);
console.log(dataBrasil);
