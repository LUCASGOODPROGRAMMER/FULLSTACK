class User {
  constructor() {
    this.form = document.querySelector(".form");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const checkFields = this.checkFields();
    const senhasValidas = this.senhasValidas();

    if (checkFields && senhasValidas) {
      if (valid) {
        alert("Formulário enviado com sucesso!");
        this.form.submit(); // o formulário vai ser enviado
      }
    }
  }

  senhasValidas() {
    let valid = true;

    const password = this.form.querySelector(".password");
    const confirmPassword = this.form.querySelector(".confirm-password");

    if (password.value !== confirmPassword.value) {
      valid = false;
      this.createError(
        password,
        "campo senha e repetir senha precisam ser iguais"
      );
      this.createError(
        confirmPassword,
        "campo senha e repetir senha precisam ser iguais"
      );
    }

    if (password.value.length < 6 || password.value.length > 12) {
      valid = false;
      this.createError(password, "no minímo 6 e no máximo 12 caracteres");
    }

    return valid;
  }

  checkFields() {
    let valid = true;

    // Remove mensagens de erro anteriores
    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let input of this.form.querySelectorAll("input")) {
      const label = input.previousElementSibling.innerText;

      // Campo vazio
      if (typeof input.value !== "string" || input.value.trim() === "") {
        this.createError(input, `Preencha corretamente o campo ${label}`);
        valid = false;
      }

      // Validação de CPF
      if (input.classList.contains("cpf")) {
        if (!this.validaCpf(input)) valid = false;
      }

      // Validação de nickname
      if (input.classList.contains("nickname")) {
        if (!this.validaUsuario(input)) valid = false;
      }
    }

    return valid;
  }

  validaUsuario(input) {
    const user = input.value;
    let validity = true;

    if (user.length < 3 || user.length > 12) {
      this.createError(
        input,
        "Nome de usuário deve ter entre 3 e 12 caracteres."
      );
      validity = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/)) {
      this.createError(
        input,
        "Nome de usuário precisa conter apenas letras e números."
      );
      validity = false;
    }

    return validity;
  }

  validaCpf(input) {
    try {
      const cpf = new CPF(input.value);
      if (!cpf.validaCpf()) {
        this.createError(input, "CPF inválido");
        return false;
      }
      return true;
    } catch (e) {
      this.createError(input, "CPF inválido");
      return false;
    }
  }

  createError(input, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    input.insertAdjacentElement("afterend", div);
  }
}

const validaForm = new User();
