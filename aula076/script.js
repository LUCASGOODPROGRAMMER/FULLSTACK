// ========================================================
// HERANÇA CORRETA (funções construtoras + prototype)
// ========================================================

function Product(name, price) {
  this.name = name;
  this.price = Number(price);
}

Product.prototype.increase = function (quantia) {
  this.price += quantia;
};

Product.prototype.discount = function (quantia) {
  this.price -= quantia;
};

// --------------------------------------------------------
// Clothing: antes de adicionar métodos, ligamos o prototype
// --------------------------------------------------------
function Clothing(name, price, category, color, size) {
  // chama Product e inicializa name/price
  Product.call(this, name, price);
  this.category = category;
  this.color = color;
  this.size = size;
}

// Clothing herda de Product
Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

// Agora sobrescrevemos ou adicionamos métodos de Clothing
Clothing.prototype.increase = function (quantia) {
  // exemplo: mesma lógica que Product, mas você pode customizar
  this.price += quantia;
};

// ========================================================
// Fruit: chamamos Clothing.call com os ARGUMENTOS CORRETOS
// e colocamos o prototype para herdar de Clothing
// ========================================================
function Fruit(name, price, category, color, size, batch, stock) {
  // Chama Clothing com todos os argumentos corretos
  Clothing.call(this, name, price, category, color, size);
  // Clothing já chamou Product internamente, então name/price estão corretos
  this.batch = batch;

  Object.defineProperty(this, "stock", {
    enumerable: true,
    configurable: false,
    get: function() {
        return stock
    },
    set: function(value) {
        if(typeof value !== "number") {
            return `valor inválido`
        }
        stock = value
    }
  })
}

// Faz Fruit herdar de Clothing (e indiretamente de Product)
Fruit.prototype = Object.create(Clothing.prototype);
Fruit.prototype.constructor = Fruit;

// Opcional: métodos específicos de Fruit
Fruit.prototype.infoBatch = function () {
  return `Lote: ${this.batch}`;
};

// ========================================================
// Testes
// ========================================================
const produto = new Product("banana", 19.9);
const camisa = new Clothing("Oversized", 99.8, "camisetas", "roxo", "gg");
const fruit = new Fruit("melancia", 16.34, "fruta", "verde", "raio = 16cm", "0000-asdf");

// usar métodos
camisa.increase(10);     // 99.8 + 10 = 109.8
fruit.increase(3);       // 16.34 + 3 = 19.34

console.log(produto); // Product { name: 'banana', price: 19.9 }
console.log(camisa);  // Clothing { name:'Oversized', price:109.8, category:'camisetas', color:'roxo', size:'gg' }
console.log(fruit);   // Fruit { name:'melancia', price:19.34, category:'fruta', color:'verde', size:'raio = 16cm', batch:'0000-asdf' }

// instanceof checks (úteis para debugging)
console.log(camisa instanceof Product); // true
console.log(fruit instanceof Clothing); // true
console.log(fruit instanceof Product);  // true
