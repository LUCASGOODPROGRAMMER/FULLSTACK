const registeredPerson = {
  name: "lucas",
  surname: "hubner",
  age: 17,
  address: {
    neighborhood: "Barretos",
    road: "Av Brasil",
    house_number: "1796",
  },
};

// console.log(registeredPerson) // objeto
// console.log(registeredPerson.name) // atributo ou propriedade do objeto

// atribuição via desestruturação
const {
  name: nome,
  surname: sobrenome,
  age: idade,
  address: {
    house_number: numeroCasa,
    neighborhood: bairroCasa,
    road: ruaCasa,
  },
} = registeredPerson; // desestruturando o objeto
// const {name = '', surname = '', idade = ''} = registeredPerson; // posso atribuir valores padrões caso não seja possível busca-lo no objeto
console.log(
  `meu nome é ${nome.toUpperCase()} ${sobrenome.toUpperCase()} e eu tenho ${idade} anos`
);

console.log(
  `meu endereço: rua ${ruaCasa}, bairro ${bairroCasa}, casa ${numeroCasa}`
);

console.log(address);
