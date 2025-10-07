// defineProperty - > defineProperties
function Product(name, price, stock) {
  // atributos privados
  const id = crypto.randomUUID();
  const dataPost = new Date().toLocaleDateString();
  const dataLastUpdate = dataPost;

  // atributos públicoss
  //   this.name = name;
  //   this.price = price;
  Object.defineProperty(this, "stock", {
    enumerable: true, // mostra a chave
    value: stock, // valor da chave
    writable: false, // defino se o valor pode ser alterado
    configurable: true, // defino se a propriedade por ser reconfigurada
  });

  //     Object.defineProperty(this, "stock", {
  //     enumerable: true, // mostra a chave
  //     value: stock, // valor da chave
  //     writable: true, // defino se o valor pode ser alterado
  //     configurable: false // defino se a propriedade por ser reconfigurada
  //   });

  Object.defineProperties(this, {
    name: {
      enumerable: true,
      value: name,
      writable: true,
      configurable: true,
    },
    price: {
      enumerable: true,
      value: price,
      writable: true,
      configurable: true,
    },
  }); // método usado para definir várias chaves

  this.infoProduct = function () {
    console.log(
      `código:${id}\nnome:${name}\npreço:${price}\nestoque:${stock}\ndata de postagem:${dataPost}\núltima atualização em:${dataLastUpdate}`
    );
  };
} // funções construtoras automaticamente retornam os dados públicos

const p1 = new Product("Shampoo", 29.9, 76);
// p1.infoProduct()
// console.log(p1);
console.log(Object.keys(p1)); // vai me retornar um array de chaves

let chaves = [];
for (let chave in p1) {
  chaves.push(chave);
}
console.log(chaves);

p1.infoProduct();
