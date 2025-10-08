/** Getters e Setters
 * Getter - > serve para obter um valor
 * Setter - > serve para modificar um valor
 */
function Product(name, price, stock) {
  this.name = name;
  this.price = price;

  let privateStock = stock;
  Object.defineProperty(this, "stock", {
    enumerable: true, // mostra a chave
    // value: stock, // valor
    // writable: true, // o valor pode ser modificado
    configurable: true, // as propriedades podem ser alteradas
    get: function () {
      return privateStock;
    },
    set: function (value) {
      if (typeof value !== "number") {
        console.log(`preencha os campos corretamente`);
        return;
      }
      privateStock = value;
    },
  });
}

function createProduct(name) {
  return {
    get name() {
      return name;
    },
    set name(value) {
      value = value.replace('123', '')
      name = value;
    },
  };
}

// const p1 = new Product("Banana", 200, 7);
// p1.stock = 324;
// console.log(p1.stock);

const p2 = createProduct("Melancia")
p2.name = 'lucas123 hubner'
console.log(p2.name)
