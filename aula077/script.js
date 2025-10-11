// // sanitização
// let cpf = "705.484.450-52";
// cpf = cpf.replace(/\D/g, "").trim();
// if (cpf.length !== 11) return console.log("CPF INVÁLIDO");

// const digitosVerificadores = cpf.slice(cpf.length - 2);
// let outrosDigitos = cpf.slice(0, cpf.length - 2);

// // cálculo do 1º dígito
// let multiplicador = 10;
// const digitosMultiplicados = [];

// for (let numero of outrosDigitos) {
//   digitosMultiplicados.push(numero * multiplicador);
//   multiplicador--;
// }

// let soma = digitosMultiplicados.reduce((a, b) => a + b, 0);
// const resto = soma % 11;
// outrosDigitos += resto < 2 ? "0" : String(11 - resto);

// // cálculo do 2º dígito
// const outrosDigitosMultiplicados = [];
// multiplicador = 11;

// for (let numero of outrosDigitos) {
//   outrosDigitosMultiplicados.push(numero * multiplicador);
//   multiplicador--;
// }

// soma = outrosDigitosMultiplicados.reduce((a, b) => a + b, 0);
// const outroResto = soma % 11;
// outrosDigitos += outroResto < 2 ? "0" : String(11 - outroResto);

// // validação final
// if (outrosDigitos === cpf) {
//   console.log("CPF VÁLIDO");
// } else {
//   console.log("CPF INVÁLIDO");
// }

// 2 tentativa 

// let cpf = "705.484.450-52";
// cpf = cpf.replace(/\D/g, "");

// if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
//   console.log("CPF INVÁLIDO");
// } else {
//   let soma, resto, dig1, dig2;

//   // cálculo do 1º dígito
//   soma = 0;
//   for (let i = 0, j = 10; i < 9; i++, j--) {
//     soma += Number(cpf[i]) * j;
//   }
//   resto = soma % 11;
//   dig1 = resto < 2 ? 0 : 11 - resto;

//   // cálculo do 2º dígito
//   soma = 0;
//   for (let i = 0, j = 11; i < 9; i++, j--) {
//     soma += Number(cpf[i]) * j;
//   }
//   soma += dig1 * 2;
//   resto = soma % 11;
//   dig2 = resto < 2 ? 0 : 11 - resto;

//   // validação final
//   if (cpf.endsWith(`${dig1}${dig2}`)) {
//     console.log("CPF VÁLIDO");
//   } else {
//     console.log("CPF INVÁLIDO");
//   }
// }

// terceira

function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
//   console.log(Array.from(cpf)) // para converter uma string em um array

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  const calcularDigito = (base) => {
    let soma = 0;
    for (let i = 0; i < base.length; i++) {
      soma += Number(base[i]) * (base.length + 1 - i);
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const dig1 = calcularDigito(cpf.slice(0, 9));
  const dig2 = calcularDigito(cpf.slice(0, 9) + dig1);

  return cpf.endsWith(`${dig1}${dig2}`);
}

// Testes
console.log(validarCPF("705.484.450-52")); // true
console.log(validarCPF("105.484.350-52")); // false
