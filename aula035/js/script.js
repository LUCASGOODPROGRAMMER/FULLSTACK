const card = document.getElementById("card-container");

const elements = [
  { tag: "p", content: "seja bem vindo" },
  { tag: "p", content: "se você beber água vai ficar hidratado" },
  { tag: "p", content: "se você comer a fome vai diminuir" },
  { tag: "p", content: "se você correr, seu personagem vai perder stamina" },
];

let messages = "";
for (let i = 0; i < elements.length; i++) {
  const { tag, content } = elements[i];

  messages += `<${tag}>${content}</${tag}>`;
}

function addMessages() {
  card.innerHTML = messages;
}

addMessages();
