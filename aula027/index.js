// OPERAÇÃO TERNÁRIA

// ? :
const userScore = Math.round(Math.random() * 1000 + 500);

// if(userScore >= 1000) {
//     console.log("é um usuário vip")
// } else {
//     console.log("usuário pobre")
// }

// (condicao) ? 'valor para verdadeiro' : 'valor para falso'
const userLevel = userScore > 1000 ? "Usuario VIP" : "usuario POBRE"; // if ternário
console.log(userLevel, userScore);

const colors = ["Preto", "Azul", "Roxo", null];

const userColor = colors[Math.round(Math.random() * 4)];
const DefaultColor = userColor || "Branco";

console.log(DefaultColor);
