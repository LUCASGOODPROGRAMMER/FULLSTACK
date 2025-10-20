// Função que realiza uma requisição HTTP usando XMLHttpRequest
const request = (obj) => {
  return new Promise((resolve, reject) => {
    // Cria uma nova instância de XMLHttpRequest (responsável por fazer requisições AJAX)
    const xhr = new XMLHttpRequest();

    // Abre a conexão com o servidor
    // Parâmetros:
    // 1º → método HTTP (GET, POST, PUT, DELETE, etc)
    // 2º → URL (endereço do recurso no servidor)
    // 3º → true indica que a requisição é assíncrona (não bloqueia o código enquanto espera resposta)
    xhr.open(obj.method, obj.url, true);

    // Envia a requisição ao servidor
    // → Se for um POST, aqui poderia ser passado um corpo (ex: xhr.send('nome=Lucas'))
    // → No caso de GET, geralmente o corpo é vazio
    xhr.send();

    // Adiciona um "ouvinte" (listener) para o evento 'load'
    // Esse evento é disparado quando a resposta do servidor chega (com sucesso ou erro)
    xhr.addEventListener("load", () => {
      // Verifica se o código de status HTTP está entre 200 e 299 (faixa de sucesso)
      if (xhr.status >= 200 && xhr.status < 300) {
        // Chama a função 'success' passada no objeto, enviando a resposta do servidor
        resolve(xhr.responseText);
      } else {
        // Caso contrário, chama a função 'error' com a mensagem de erro retornada
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase(); // pego o nome do elemento

  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
});

async function loadPage(el) {
  const href = el.getAttribute("href"); // getAttribute pode ser usado para pegar qualquer atributo de um elemento

  const obj = {
    method: "GET",
    url: href,
  };

  try {
    const response = await request(obj);
    loadResult(response);
  } catch (error) {
    console.log(error);
  }
}

function loadResult(response) {
  const result = document.querySelector(".result");
  result.innerHTML = response;
}
