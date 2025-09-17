const userPerfil = document.querySelector("#user-perfil");
const form = document.querySelector("#form");

const userPerfil1 =
  'url("https://i.pinimg.com/originals/36/4e/a6/364ea6cd7bfd00a0260aaf6e2602cd4d.gif")';

const userPerfil2 =
  'url("https://i.pinimg.com/originals/d2/9e/b1/d29eb1d63c7642d03069659d275d97bb.gif")';

// Definindo a primeira imagem inicialmente
userPerfil.style.backgroundImage = userPerfil1;

userPerfil.addEventListener("click", () => {
  if (userPerfil.style.backgroundImage === userPerfil1) {
    userPerfil.style.backgroundImage = userPerfil2;
  } else {
    userPerfil.style.backgroundImage = userPerfil1;
  }
});

function setResultado(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = document.createElement("p"); // criando um elemento com o método createElement()
  p.textContent = msg;
  p.classList = "paragrafo-resultado";
  resultado.appendChild(p); // inserindo um elemento filho na div resultado
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // captura de elementos
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  // conversão
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso || !altura) {
    return setResultado("Valores Inválido");
  }

  // calculo
  const resultadoImc = peso / Math.pow(altura, 2)

  setResultado(`seu imc: ${resultadoImc.toFixed(2)}`)
});
