const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateCapitalLetter = () => String.fromCharCode(rand(65, 91));
const generateLowercaseLetter = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const symbolsList = "!._@#$-";
const generateSymbol = () => symbolsList[rand(0, symbolsList.length)];

function generatePassword(characters, numbers, capitalLetters, lowercaseLetters, symbols) {
  const password = [];
  const generators = [];

  // Adiciona apenas os tipos selecionados
  if (numbers) generators.push(generateNumber);
  if (capitalLetters) generators.push(generateCapitalLetter);
  if (lowercaseLetters) generators.push(generateLowercaseLetter);
  if (symbols) generators.push(generateSymbol);

  // Caso nenhum tipo seja escolhido
  if (generators.length === 0) return '';

  // Gera um caractere por vez, escolhendo aleatoriamente o tipo
  for (let i = 0; i < characters; i++) {
    const randomFunc = generators[rand(0, generators.length)];
    password.push(randomFunc());
  }

  return password.join('');
}

export default generatePassword;