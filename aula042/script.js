const EPaisagem = (width, height) =>
  width > height
    ? "a imagem está no modo paisagem"
    : "a imagem não está no modo paisagem";

console.log(EPaisagem(720, 1080));
console.log(EPaisagem(1920, 1080));
