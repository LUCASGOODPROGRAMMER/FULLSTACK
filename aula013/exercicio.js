const btnSubmit = document.getElementById("btnSubmit");
console.log(btnSubmit);
const welcome = (e) => {
  e.preventDefault();
  let msg = document.getElementById("welcome");
  if (!msg) {
    const name = document.getElementById("name"); // pegando o valor
    const newElement = document.createElement("p");
    newElement.innerText = `seja bem vindo ${name.value}`;
    newElement.id = "welcome";
    btnSubmit.value = "deletar";
    name.value = ''
    document.body.appendChild(newElement);
    return;
  }
  btnSubmit.value = "enviar"
  msg.remove();
};

// diferença intre innerText e innerHtml
/**
 * innerText interpreta somente texto
 * innerHtml interpreta tags
 */
