import CPFValidator from "./CPFValidator";

class CPFGenerator {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  generator(formatado = true) {
    const cpfBase = this.rand();
    const dig1 = CPFValidator._calcCheckDigit(cpfBase);
    const dig2 = CPFValidator._calcCheckDigit(cpfBase + dig1);
    const cpfCompleto = cpfBase + dig1 + dig2;

    if (formatado) {
      return `${cpfCompleto.slice(0,3)}.${cpfCompleto.slice(3,6)}.${cpfCompleto.slice(6,9)}-${cpfCompleto.slice(9,11)}`;
    }

    return cpfCompleto;
  }
}

export default CPFGenerator;
