function Calculadora() {
  const display = document.querySelector(".display");

  const clearDisplay = () => {
    display.value = "";
  };

  const oneDelete = () => {
    display.value = display.value.slice(0, -1);
  };

  const btnStopDisplay = (value) => {
    display.value += value;
  };

  const pressEnter = () => {
    document.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        makeAccount();
      }
    });
  };

  const makeAccount = () => {
    let account = display.value;

    try {
      account = Function(`return ${account}`)(); // mais seguro que eval
      if (account === undefined || isNaN(account)) {
        display.value = ":(";
        return;
      }

      // Se tiver decimal, mostra com 2 casas, senão mostra inteiro
      display.value = Number.isInteger(account)
        ? String(account)
        : String(account.toFixed(2));
    } catch (error) {
      display.value = "ops";
    }
  };

  const handleClick = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) {
        btnStopDisplay(el.innerText);
      }
      if (el.classList.contains("btn-clear")) {
        clearDisplay();
      }
      if (el.classList.contains("btn-del")) {
        oneDelete();
      }
      if (el.classList.contains("btn-eq")) {
        makeAccount();
      }
      display.focus();
    });
  };

  this.init = function () {
    handleClick();
    pressEnter();
  };
}

const calculadora = new Calculadora();
calculadora.init();
