const frutas = ["banana", "laranja", "uva", "morango"];

// for (let i = 0; u < frutas.length; i++) {
//   console.log(frutas[i]);
// }

const nome = "lucas";

for (let index in frutas) {
  console.log(frutas[index]);
} // for in vai ler os indíces do array ou chaves do objeto

for (let letra in nome) {
  console.log(nome[letra]);
}

const mrRobotDialogues = [
  {
    question: "Quem é Elliot e qual seu maior conflito?",
    answer:
      "Elliot é um hacker brilhante, mas vive em luta contra sua própria mente e contra um sistema que considera corrupto.",
  },
  {
    question: "O que significa a fsociety?",
    answer:
      "É o grupo hacktivista que busca derrubar as grandes corporações e libertar as pessoas da opressão financeira.",
  },
  {
    question: "Qual a visão de Mr. Robot sobre o sistema?",
    answer:
      "Mr. Robot acredita que o sistema é construído para aprisionar, e só pode ser derrotado através da destruição completa.",
  },
  {
    question: "Qual é a maior fragilidade de Elliot?",
    answer:
      "Sua dificuldade em distinguir a realidade da ilusão, causada pelos traumas e pela fragmentação de sua mente.",
  },
  {
    question: "O que a série mostra sobre tecnologia e poder?",
    answer:
      "Mostra que a tecnologia pode ser usada tanto para controle e manipulação, quanto para libertação e resistência.",
  },
  {
    question: "O que Elliot descobre sobre si mesmo?",
    answer:
      "Que muitas vezes o maior inimigo não é externo, mas sim interno — sua própria mente e segredos escondidos.",
  },
  {
    question: "Qual é o papel da solidão em Elliot?",
    answer:
      "A solidão é tanto sua prisão quanto sua proteção, mas também o afasta das pessoas que tentam ajudá-lo.",
  },
  {
    question: "O que a série sugere sobre a sociedade moderna?",
    answer:
      "Que vivemos em um mundo dominado por corporações, onde a liberdade é muitas vezes apenas uma ilusão.",
  },
];

for (question in mrRobotDialogues) {
  console.log(question, " ", mrRobotDialogues[question]);
} // vai percorrer todos os objetos

const pessoa = {
  name: "lucas",
  surname: "hubner",
  age: "17",
};

for (let chave in pessoa) {
  console.log(`${chave} ${pessoa[chave]}`);
}

// console.log(pessoa.name);
// console.log(pessoa["name"]);

const pessoas = [
  {
    name: "lucas",
    surname: "hubner",
    age: "17",
  },
  {
    name: "keynner",
    surname: "davi",
    age: "18",
  },
];

for (let code in pessoas) {
    console.log(`${code} ${pessoas[code].name}`);
}
