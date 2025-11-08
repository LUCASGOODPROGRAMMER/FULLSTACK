class CPFValidator {
  static _calcCheckDigit(cpfPartial) {
    const len = cpfPartial.length;
    const numbers = cpfPartial.split("").map(n => parseInt(n, 10));
    let weight = len + 1;

    const sum = numbers.reduce((acc, n) => acc + n * weight--, 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  }

  constructor(cpf) {
    this.cpf = cpf.replace(/\D+/g, "");
  }

  isValid() {
    if (!/^\d{11}$/.test(this.cpf)) return false;
    if (/^(\d)\1{10}$/.test(this.cpf)) return false;

    const dig1 = CPFValidator._calcCheckDigit(this.cpf.slice(0, 9));
    const dig2 = CPFValidator._calcCheckDigit(this.cpf.slice(0, 9) + dig1);

    return this.cpf === this.cpf.slice(0, 9) + dig1 + dig2;
  }
}

export default CPFValidator;
