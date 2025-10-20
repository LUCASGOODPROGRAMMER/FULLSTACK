// Função que realiza uma requisição HTTP usando XMLHttpRequest
// Recebe um objeto contendo informações como método (GET, POST...) e URL
const request = (obj) => {
  // Retorna uma Promise para permitir o uso de async/await e melhor controle de fluxo assíncrono
  return new Promise((resolve, reject) => {
    // Cria uma nova instância de XMLHttpRequest
    // Essa classe é usada para enviar e receber dados de um servidor sem recarregar a página (AJAX)
    const xhr = new XMLHttpRequest();

    // Abre uma conexão com o servidor
    // Parâmetros:
    // 1º → método HTTP (GET, POST, PUT, DELETE, etc)
    // 2º → URL do recurso (ex: 'pagina.html' ou 'https://api.com/dados')
    // 3º → true indica que a requisição será assíncrona (não trava o código até a resposta chegar)
    xhr.open(obj.method, obj.url, true);

    // Envia a requisição
    // → Se for POST, o corpo pode ser passado dentro do send (ex: xhr.send('nome=Lucas'))
    // → Para GET, geralmente o corpo é vazio
    xhr.send();

    // O evento 'load' é disparado quando a resposta do servidor chega (com sucesso ou erro)
    xhr.addEventListener("load", () => {
      // xhr.status contém o código HTTP da resposta (ex: 200 = OK, 404 = Não encontrado, 500 = erro interno)
      // Aqui verificamos se o status indica sucesso (entre 200 e 299)
      if (xhr.status >= 200 && xhr.status < 300) {
        // resolve() indica que a Promise foi bem-sucedida
        // xhr.responseText contém o corpo da resposta (geralmente HTML ou JSON)
        resolve(xhr.responseText);
      } else {
        // reject() indica que ocorreu um erro na requisição
        // xhr.statusText contém a descrição textual do erro (ex: "Not Found")
        reject(xhr.statusText);
      }
    });
  });
};

// Captura qualquer clique na página
document.addEventListener("click", (e) => {
  const el = e.target; // elemento clicado
  const tag = el.tagName.toLowerCase(); // obtém o nome da tag (em minúsculas)

  // Verifica se o elemento clicado é um link (<a>)
  if (tag === "a") {
    e.preventDefault(); // impede o comportamento padrão (recarregar a página)
    loadPage(el); // chama a função para carregar o conteúdo da página clicada
  }
});

// Função assíncrona que carrega a página requisitada
async function loadPage(el) {
  // Pega o valor do atributo href do link clicado (ex: "pagina.html")
  const href = el.getAttribute("href");

  // Cria o objeto com as informações da requisição
  const obj = {
    method: "GET",
    url: href,
  };

  try {
    // Faz a requisição HTTP e espera a resposta
    const response = await request(obj);
    // Chama a função que exibe o resultado na tela
    loadResult(response);
  } catch (error) {
    // Caso ocorra erro (ex: página não encontrada), exibe no console
    console.error("Erro na requisição:", error);
  }
}

// Função que insere o conteúdo retornado na div .result
function loadResult(response) {
  const result = document.querySelector(".result"); // seleciona a div onde o conteúdo será exibido
  result.innerHTML = response; // insere o conteúdo HTML retornado pela requisição
}


