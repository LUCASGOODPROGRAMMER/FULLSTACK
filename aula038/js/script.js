const containerParagrafos = document.querySelector(".container-paragrafos");
const paragrafos = containerParagrafos.querySelectorAll("p"); // isso retorna uma NodeList, usado quando precisa pegar mais de um elemento.

const estilosBody = getComputedStyle(document.body); // usado para pegar os estilos
const back = estilosBody.backgroundColor;

for (let p of paragrafos) {
  console.log(p);
  p.style.color = back;
  p.style.backgroundColor = "white";
}
