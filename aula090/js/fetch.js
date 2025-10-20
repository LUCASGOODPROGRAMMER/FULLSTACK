// ======== FUNÇÕES ========

// Função responsável por carregar o conteúdo de outra página via fetch (sem recarregar o site)
const loadPage = async (el) => {
  // Pega o valor do atributo "href" do link clicado
  // Exemplo: se o link for <a href="sobre.html">, href = "sobre.html"
  const href = el.getAttribute("href");

  try {
    // Faz a requisição HTTP para o endereço obtido
    // O "await" pausa a execução até que a Promise retornada por fetch() seja resolvida
    const response = await fetch(href);

    // "response.ok" retorna true apenas se o status estiver entre 200 e 299
    // Caso contrário, disparamos um erro manualmente
    if (!response.ok) {
      // O throw faz o código pular diretamente para o "catch"
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    // Converte o corpo da resposta (stream) para texto
    // Isso também é assíncrono, então usamos await novamente
    const html = await response.text();

    // Passa o conteúdo da resposta para outra função responsável por exibir no DOM
    loadResult(html);

  } catch (error) {
    // Captura qualquer erro — de rede, de status HTTP, ou até erro de execução
    console.log(error);
  }
};


// Função responsável por inserir o conteúdo retornado dentro do HTML da página atual
const loadResult = (html) => {
  // Seleciona o elemento HTML com a classe .result (onde será injetado o conteúdo)
  const elementoPai = document.querySelector(".result");

  // Insere o conteúdo HTML retornado dentro desse elemento
  elementoPai.innerHTML = html;
};

// ======== EVENTOS ========

// Adiciona um ouvinte de evento para "click" em todo o documento
// Isso permite capturar cliques em qualquer link (<a>) da página
document.addEventListener("click", (e) => {
  // Impede o comportamento padrão do link (recarregar a página)
  e.preventDefault();

  // Pega o elemento que foi clicado
  const elemento = e.target;

  // Captura o nome da tag (por exemplo, "a", "div", "p", etc.)
  // e converte para minúsculas para evitar problemas de comparação
  const tag = elemento.tagName.toLowerCase();

  // Verifica se o elemento clicado é um link <a>
  if (tag === "a") {
    // Se for, chama a função loadPage passando o link clicado como argumento
    loadPage(elemento);
  }
});

