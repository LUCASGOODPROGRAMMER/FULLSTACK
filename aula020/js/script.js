// atividade array, objects and functions
const body = document.querySelector("body"); // usado para capturar um elemento
const registros = [];

const callback = (e) => {
  e.preventDefault(); // usado para impedir o reload de página

  const verificacao = document.querySelector(".container-callback"); // query selector usado para capturar um elemento através do nome da tag, classe ou id
  if (verificacao) return;
  const usuario = {
    nome: document.getElementById("nome").value,
    sobrenome: document.getElementById("sobrenome").value,
    peso: Number(document.getElementById("peso").value),
    altura: Number(document.getElementById("altura").value),
    classificacao: function calculoDeImc() {
      const resultadoImc = this.peso / Math.pow(this.altura, 2);
      let classificacao = "";
      if (resultadoImc < 18.5) {
        classificacao = "Abaixo do peso";
      } else if (resultadoImc < 24.9) {
        classificacao = "Peso normal";
      } else if (resultadoImc < 29.9) {
        classificacao = "Sobrepeso";
      } else if (resultadoImc < 34.9) {
        classificacao = "Obesidade grau I";
      } else if (resultadoImc < 39.9) {
        classificacao = "Obesidade grau II";
      } else {
        classificacao = "Obesidade grau III";
      }
      return classificacao;
    },
    // welcomeUser() {
    //   console.log(`seja bem vindo ${this.nome} ${this.sobrenome}`);
    // },
  };
  registros.push({ ...usuario });
  let newContainer = document.createElement("div");
  newContainer.className = "container-callback";
  newContainer.innerHTML += `<p>classificação de ${usuario.nome} ${
    usuario.sobrenome
  } com ${usuario.peso}kg e uma altura de ${
    usuario.altura
  }: ${usuario.classificacao()}`;
  body.appendChild(newContainer);

  let removeContainer;

  function scheduleRemove() {
    removeContainer = setTimeout(() => {
      newContainer.classList.add("desactive");
      setTimeout(() => {
        newContainer.remove();
      }, 1000);
    }, 1500);
  }

  scheduleRemove();

  newContainer.addEventListener("mouseenter", () => {
    newContainer.style.scale = "1.1";
    clearTimeout(removeContainer);
  });

  newContainer.addEventListener("mouseleave", () => {
    newContainer.style.scale = "1";
    scheduleRemove();
  });

  console.log(registros);
};
