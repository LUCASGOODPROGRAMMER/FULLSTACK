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
    display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        makeAccount();
      }
    });
  };

  const makeAccount = () => {
    let account = display.value;

    try {
      account = eval(account);
      if (!account) {
        display.value = ":(";
        return;
      }

      display.value = String(account.toFixed(2));
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
    }); 
  };

  this.init = function () {
    handleClick();
    pressEnter();
  };
}

const calculadora = new Calculadora();
calculadora.init();
