const numero = 700;

if (numero >= 0 && numero <= 1000) {
  console.log(`o número ${numero} está entre 0 e 1000`);
} else if (numero > 1000 && numero <= 2000) {
  console.log(`o número ${numero} está entre 1000 e 2000`);
} else if (numero > 2000 && numero <= 3000) {
  console.log(`o número ${numero} está entre 2000 e 3000`);
} else {
  console.log(`o número ${numero} não está entre 0 e 3000`);
}
