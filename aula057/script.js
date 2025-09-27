function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    inicia() {
      this.pegaCliqueBotoes();
      this.pressEnter()
    },
    pressEnter() {
        this.display.addEventListener("keyup", (e) => {
            if(e.keyCode === 13){
                this.realizaConta()
            }
        })
    },  
    clearDisplay() {
      this.display.value = "";
    },
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },
    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (!conta) {
          this.display.value = ":(";
          return;
        }

        this.display.value = String(conta);
      } catch (error) {
        this.display.value = ":( :( :(";
        return;
      }
    },
    pegaCliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText); // o this vai apontar para document em vez de objeto por conta do lugar que ele tá sendo usado, se estiver dentro de uma arrow function ele sempre vai apontar para o objeto em que ele foi criado
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }
        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      }); // posso fazer o this apontar para o objeto de volta usando bind(this)
    },
    btnParaDisplay(value) {
      this.display.value += value;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
