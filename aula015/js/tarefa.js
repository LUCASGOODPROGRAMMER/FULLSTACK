const realizarCalculos = (e) => {
  e.preventDefault();

  const number = Number(document.getElementById("number").value);

  function raiz(n) {
    return Math.sqrt(n);
  }
  function inteiro(n) {
    return Number.isInteger(n);
  }
  function numero(n) {
    return Number.isNaN(n);
  }

  // Se já existir, usa o mesmo container
  let newElement = document.querySelector(".container-calculos");
  if (!newElement) {
    newElement = document.createElement("div");
    newElement.className = "container-calculos";
    document.body.appendChild(newElement);
  }

  const calculos = [
    `Raiz quadrada de ${number} = ${raiz(number)}`,
    `${number} é inteiro: ${inteiro(number)}`,
    `É NaN: ${numero(number)}`,
    `Arredondado para baixo: ${Math.floor(number)}`,
    `Arredondado para cima: ${Math.ceil(number)}`,
    `Arredondado para o inteiro mais próximo: ${Math.round(number)}`,
    `Com duas casas decimais: ${number.toFixed(2)}`
  ];

  let lista = document.createElement("ul");
  lista.innerHTML = calculos
    .map(calc => `<li class="list-calc">${calc}</li>`)
    .join("");

  // Atualiza o conteúdo sempre
  newElement.innerHTML = "";
  newElement.appendChild(lista);
};
