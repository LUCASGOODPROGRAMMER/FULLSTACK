// class Pessoa {
//   constructor(nome, cpf) {
//     // Valida o nome
//     if (typeof nome !== "string" || !nome.trim()) {
//       throw new Error("O nome deve ser uma string não vazia.");
//     }

//     // Sanitiza o CPF (remove tudo que não é número)
//     cpf = cpf.replace(/\D/g, "");

//     // Verifica se o CPF tem exatamente 11 dígitos
//     if (cpf.length !== 11) {
//       throw new Error("CPF inválido: deve conter 11 dígitos.");
//     }

//     // verifica se todos os dígitos do cpf não são iguais
//     if (/^(\d)\1{10}$/.test(cpf)) {
//       throw new Error("CPF inválido: todos os dígitos iguais.");
//     }

//     this.nome = nome.trim();
//     this.cpf = cpf; // armazenando o CPF já limpo (somente números)
//     this.digitosVerificadores = this.cpf.slice(-2);
//     this.outrosDigitos = this.cpf.slice(0, this.cpf.length - 2);
//   }

//   // Retorna CPF formatado (somente leitura)
//   get cpfFormatado() {
//     return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
//   }

//   calculoDoPrimeiroDigito() {
//     let multiplicador = 10;
//     const digitosMultiplicados = [];

//     for (let numero of this.outrosDigitos) {
//       digitosMultiplicados.push(numero * multiplicador);
//       multiplicador--;
//     }

//     let soma = digitosMultiplicados.reduce(
//       (acumulador, numero) => acumulador + numero,
//       0
//     );

//     const resto = soma % 11;

//     return resto < 2 ? "0" : String(11 - resto);
//   }

//   calculoDoSegundoDigito() {
//     const cpfComPrimeiroDigito =
//       this.outrosDigitos + this.calculoDoPrimeiroDigito();

//     let multiplicador = 11;
//     const digitosMultiplicados = [];

//     for (let numero of cpfComPrimeiroDigito) {
//       digitosMultiplicados.push(numero * multiplicador);
//       multiplicador--;
//     }

//     let soma = digitosMultiplicados.reduce(
//       (acumulador, numero) => acumulador + numero,
//       0
//     );

//     const resto = soma % 11;

//     return resto < 2 ? "0" : String(11 - resto);
//   }

//   validaCpf() {
//     const digitosVerificadores =
//       this.calculoDoPrimeiroDigito() + this.calculoDoSegundoDigito();
//     if (digitosVerificadores === this.digitosVerificadores) {
//       return console.log(`O CPF ${this.cpfFormatado} É VÁLIDO`);
//     }

//     console.log("CPF INVÁLIDO!");
//   }
// }

// const p1 = new Pessoa("Lucas", "705.484.450-52");

// console.log(p1.cpf); // "70548445052"  → armazenado limpo
// console.log(p1.cpfFormatado); // "705.484.450-52" → exibido formatado
// p1.validaCpf();

// SEGUNDA TENTATIVA
class Pessoa {
  // método construtor
  constructor(nome, cpf) {
    // método estático de verificação
    Pessoa.validadorDeCampos(nome, cpf);

    // atibutos sanitizados
    this.nome = nome.trim();
    this.cpf = cpf.replace(/\D/g, "");
    this.digitosVerificadores = this.cpf.slice(-2);
    this.outrosDigitos = this.cpf.slice(0, this.cpf.length - 2);
  }

  // getter (leitura de dados)
  get cpfFormatado() {
    return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  }

  // métodos da instância
  calculoDoPrimeiroDigito() {
    let soma = this.outrosDigitos
      .split("")
      .reduce((acc, num, i) => acc + num * (10 - i), 0);
    const resto = soma % 11;
    return resto < 2 ? "0" : String(11 - resto);
  }

  calculoDoSegundoDigito() {
    const cpfComPrimeiro = this.outrosDigitos + this.calculoDoPrimeiroDigito();
    let soma = cpfComPrimeiro
      .split("")
      .reduce((acc, num, i) => acc + num * (11 - i), 0);
    const resto = soma % 11;
    return resto < 2 ? "0" : String(11 - resto);
  }

  validaCpf() {
    const calculado =
      this.calculoDoPrimeiroDigito() + this.calculoDoSegundoDigito();
    return calculado === this.digitosVerificadores;
  }

  // métodos estáticos
  static validadorDeCampos(nome, cpf) {
    if (typeof nome !== "string" || !nome.trim()) {
      throw new Error("O nome deve ser uma string não vazia.");
    }

    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11) {
      throw new Error("CPF inválido: deve conter 11 dígitos.");
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
      throw new Error("CPF inválido: todos os dígitos iguais.");
    }
  }
}

// Exemplo de uso
const p1 = new Pessoa("Lucas", "705.484.450-52");
console.log(p1.cpf); // "70548445052"
console.log(p1.cpfFormatado); // "705.484.450-52"
console.log(
  p1.validaCpf() ? `O CPF ${p1.cpfFormatado} é válido.` : "CPF inválido!"
);
