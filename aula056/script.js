// Factory Function (Função fábrica)
// Constructor Function (Função Construtora)
function createUser(name, surname, age, height, pounds) {
  return {
    name,
    surname,
    get nomeCompleto() {
      return `${this.name} ${this.surname}`; // this referencia o objeto e não os parâmetros da função
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" "); // com split eu defino uma parãmetro para separar os elementos e retorna-los dentro de um array
      this.name = valor.shift(); // com shift posso remover o primeiro elemento encontrado dentro de um array. caso não seja encontrado nenhum elemento o array não é modificado e método split retornará undefined
      this.surname = valor.join(" ");
    },
    age,
    fala: function (assunto) {
      // é mais performático acessar os dados do objeto usando this, do que diretamente nos parâmetros
      return `${assunto}: me chamo ${this.name} ${this.surname} e tenho ${this.age} anos`;
    },
    altura: height,
    peso: pounds,
    get imc() {
      const calcImc = this.peso / this.altura ** 2;
      return calcImc.toFixed(2); // com esse método posso limitar o número de casas decimais
    }, // usando get (Getter) posso fazer com que a função vire um atributo
  };
}

const p1 = createUser("lucas", "hubner", 17, 1.6, 50);
// console.log(p1);
// console.log(p1.fala("apresentação"));
// console.log(p1.imc);
p1.nomeCompleto = "Keynner Davi Savi";
console.log(p1.name);
console.log(p1.surname);
