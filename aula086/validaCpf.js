class CPF {
  constructor(cpf) {
    CPF.validadorDeCampos(cpf);

    this.cpf = cpf.replace(/\D/g, ""); // remove tudo que não for número
    this.digitosVerificadores = this.cpf.slice(-2);
    this.outrosDigitos = this.cpf.slice(0, -2);
  }

  get cpfFormatado() {
    return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  calculoDoPrimeiroDigito() {
    const soma = this.outrosDigitos
      .split("")
      .reduce((acc, num, i) => acc + num * (10 - i), 0);
    const resto = soma % 11;
    return resto < 2 ? "0" : String(11 - resto);
  }

  calculoDoSegundoDigito() {
    const cpfComPrimeiro = this.outrosDigitos + this.calculoDoPrimeiroDigito();
    const soma = cpfComPrimeiro
      .split("")
      .reduce((acc, num, i) => acc + num * (11 - i), 0);
    const resto = soma % 11;
    return resto < 2 ? "0" : String(11 - resto);
  }

  validaCpf() {
    const digitosCalculados =
      this.calculoDoPrimeiroDigito() + this.calculoDoSegundoDigito();
    return digitosCalculados === this.digitosVerificadores;
  }

  static validadorDeCampos(cpf) {
    if (typeof cpf !== "string") {
      throw new Error("CPF deve ser uma string.");
    }

    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11) {
      throw new Error("CPF inválido: deve conter 11 dígitos.");
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
      throw new Error("CPF inválido: todos os dígitos são iguais.");
    }
  }
}
