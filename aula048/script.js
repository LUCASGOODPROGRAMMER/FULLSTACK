const tasks = [];
const sectionTasks = document.querySelector("#section-tasks");

// funções

// adicionar tarefas
const addTask = (e) => {
  e.preventDefault();
  const description = document.querySelector("#description-task");
  if (!description.value) return;
  tasks.push(description.value);
  description.value = ""; // limpando o input pós registro
  description.focus();
  chargeTasks();
  saveTasks();
};

// carregamento das tarefas
const chargeTasks = () => {
  sectionTasks.innerHTML = "";
  const listaOrdenada = document.createElement("ol");
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const button = document.createElement("button");

    li.classList = "lists";
    button.innerText = "deletar";
    // button.classList.add('apagar')
    // button.setAttribute('class', 'apagar')
    button.classList = "btn-delete";
    p.innerText = task;

    // evento de deletar
    button.addEventListener("click", () => {
      tasks.splice(index, 1); // remove do array. o splice é usado para remover elementos de um array
      saveTasks();
      chargeTasks(); // recarrega a lista atualizada
    });

    li.appendChild(p);
    li.appendChild(button);
    listaOrdenada.appendChild(li);
  });
  sectionTasks.appendChild(listaOrdenada);
};

// salvando as tarefas no navegador
const saveTasks = () => {
  const tarefasJSON = JSON.stringify(tasks);
  localStorage.setItem("tarefas", tarefasJSON);
};

// carregando as tarefas salva localmente
const loadLocalStorage = () => {
  const tarefasObject = JSON.parse(localStorage.getItem("tarefas"));
  // if (!tarefasObject.length > 0) return; // pode dar erro
  if (!tarefasObject || tarefasObject.length === 0) return;
  tasks.length = 0; // limpa o array evitando duplicação
  tasks.push(...tarefasObject);
  chargeTasks();
};

// carregamento local
loadLocalStorage();
