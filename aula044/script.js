// console.log(err)

// se ocorrer qualquer erro no código que está dentro do try, o erro vai pro catch
// advertência: nunca expor para o cliente o erro, ou ele é burro ou ele é potencialmente perigoso
// try {
//     console.log(naoExisto)
// } catch(err) {
//     console.log('Ops! ocorreu um erro')
// }

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("preencha os campos corretamente"); // aqui o código vai parar
  }
  return x + y;
}

try {
  console.log(soma(10, "20"));
} catch (error) {
    console.log(error)
  console.log("Ops!, não foi possível realizar o calculo -_-");
}
