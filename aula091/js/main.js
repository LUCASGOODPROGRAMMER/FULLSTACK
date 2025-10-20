// Busca e carrega os dados de forma assíncrona
// const fetchData = async (url) => {
//   try {
//     // Mostra um texto de carregamento
//     div.textContent = "Carregando dados...";

//     const response = await fetch(url);
//     if (!response.ok) throw new Error(`Requisição falhou: ${response.status}`);

//     const json = await response.json();
//     if (json.length === 0) {
//       div.textContent = "Nenhum registro encontrado na base de dados";
//       return;
//     }

//     loadPeoples(json);
//   } catch (error) {
//     console.error(`Busca de dados falhou: ${error}`);
//     div.textContent = "Erro ao carregar os dados.";
//   }
// };

const getData = async (url) => {
  try {
    // Mostra um texto de carregamento
    div.textContent = "Carregando dados...";

    // Faz a requisição com Axios
    const response = await axios.get(url);

    // Verifica se o retorno é um array e se está vazio
    if (!Array.isArray(response.data) || response.data.length === 0) {
      div.textContent = "Nenhum registro encontrado na base de dados";
      return;
    }

    // Chama a função que cria a tabela
    loadPeoples(response.data);

  } catch (error) {
    console.error(`Busca de dados falhou: ${error}`);
    div.textContent = "Erro ao carregar os dados.";
  }
};

// Seleciona o container onde a tabela será exibida
const div = document.querySelector(".container-search");

// Função que cria e insere a tabela na página
const loadPeoples = (json) => {
  // Limpa o conteúdo anterior (caso haja)
  div.innerHTML = "";

  const table = document.createElement("table");
  const h1 = document.createElement("h1");
  h1.textContent = "Lista de pessoas";

  // Cria o cabeçalho com base nas chaves do primeiro objeto
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  Object.keys(json[0]).forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key.toUpperCase();
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Cria o corpo da tabela (tbody)
  const tbody = document.createElement("tbody");

  json.forEach((pessoa) => {
    const tr = document.createElement("tr");

    Object.keys(pessoa).forEach((key) => {
      const td = document.createElement("td");
      td.textContent = pessoa[key];
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  div.appendChild(h1);
  div.appendChild(table);
};

// Função inicial
function start() {
  getData("json/pessoas.json");
}

// Inicia o carregamento
start();
