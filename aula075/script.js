// ============================================================================
// 🧠 MANIPULAÇÃO DE PROTOTYPES EM JAVASCRIPT
// ============================================================================

/*
No JavaScript, todo objeto tem uma referência interna chamada [[Prototype]],
que normalmente é acessada pelo atributo __proto__ (ou de forma moderna,
pelos métodos Object.getPrototypeOf() e Object.setPrototypeOf()).

O Prototype é o mecanismo que permite **herança entre objetos**,
ou seja, um objeto pode herdar propriedades e métodos de outro.
Isso é o que torna o JS uma linguagem baseada em protótipos.
*/

// ============================================================================
// 🧱 EXEMPLO 1: ENCADEAMENTO MANUAL DE OBJETOS
// ============================================================================

/*
const objA = { chaveA: "A" };
const objB = { chaveB: "B" };
const objC = { chaveC: "C" };

Object.setPrototypeOf(objB, objA); // objB herda de objA
Object.setPrototypeOf(objC, objB); // objC herda de objB (e indiretamente de objA)

console.log(objC.chaveA); // Saída: "A" → herdado via cadeia de protótipos

A sequência de herança fica assim:
objC → objB → objA → Object.prototype → null
*/

// ============================================================================
// 🧱 EXEMPLO 2: FUNÇÃO CONSTRUTORA + PROTOTYPE
// ============================================================================

/*
Aqui criamos um construtor "Product" e adicionamos métodos ao seu prototype.
Assim, todas as instâncias criadas com "new Product()" compartilham os mesmos
métodos sem duplicá-los na memória.
*/

function Product(name, price, batch, validity) {
  this.nome = name;
  this.preco = Number(price);
  this.lote = batch;
  this.validade = new Date(validity);
}

// Método adicionado ao prototype (compartilhado entre todas as instâncias)
Product.prototype.productInformation = function () {
  console.log(
    `produto: ${this.nome}\npreço: ${this.preco.toFixed(2)}\nlote: ${
      this.lote
    }\nvalidade: ${this.validade.toLocaleDateString()}`
  );
};

// Método para aplicar desconto
Product.prototype.productDiscount = function (desconto) {
  this.preco = this.preco * ((100 - desconto) / 100);
  return this.preco;
};

// Método para aplicar aumento
Product.prototype.productIncrease = function (aumento) {
  this.preco = this.preco * ((100 + aumento) / 100);
  return this.preco;
};

// Criando um produto normalmente com o construtor
const p1 = new Product("shampoo", 56.87, "0000-bde", "2009-04-21");
p1.productDiscount(50);
p1.productInformation();

/*
A estrutura de herança nesse caso é:
p1 → Product.prototype → Object.prototype → null
*/

// ============================================================================
// 🧱 EXEMPLO 3: HERDANDO MÉTODOS USANDO Object.setPrototypeOf
// ============================================================================

/*
Mesmo objetos literais podem "herdar" métodos de outros prototypes.
Aqui pegamos um objeto comum (p2) e conectamos ele ao Product.prototype
para que ele ganhe acesso aos métodos da função construtora.
*/

const p2 = {
  nome: "Prato",
  preco: 29.5,
  lote: "0001-bde",
  validade: new Date("2014-04-29"),
};

// Herdando os métodos do prototype de Product
Object.setPrototypeOf(p2, Product.prototype);

p2.productIncrease(100);
p2.productInformation();

/*
Agora, p2 também tem acesso aos métodos:
- productInformation()
- productDiscount()
- productIncrease()

mesmo sem ter sido criado com "new Product()".
Isso mostra a flexibilidade do sistema de protótipos do JS.
*/

// ============================================================================
// 🧱 EXEMPLO 4: CRIANDO OBJETOS COM Object.create()
// ============================================================================

/*
Object.create() permite criar um novo objeto já ligado a um prototype
específico. É uma forma direta de controlar herança e definir
propriedades com suas configurações (enumerable, writable, configurable).
*/

const p3 = Object.create(Product.prototype, {
  preco: {
    writable: true, // pode ser alterado
    configurable: true, // pode ser redefinido ou removido
    enumerable: true, // aparece em loops como for...in
    value: 422,
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 41,
  },
});

p3.productIncrease(23); // herdado de Product.prototype
console.log(p3);

/*
O método productIncrease() funciona, pois p3 herda de Product.prototype.
A cadeia de protótipos aqui é:

p3 → Product.prototype → Object.prototype → null
*/

// ============================================================================
// 🎓 RESUMO FINAL
// ============================================================================

/*
✅ Object.setPrototypeOf(obj, proto)
   → Define manualmente o prototype de um objeto.

✅ Object.getPrototypeOf(obj)
   → Retorna o prototype de um objeto (forma moderna de acessar __proto__).

✅ Object.create(proto, props)
   → Cria um novo objeto já ligado a um prototype e com propriedades configuráveis.

✅ Função construtora + prototype
   → Permite criar métodos reutilizáveis e compartilhados entre várias instâncias.

✅ Prototype chain (cadeia de protótipos)
   → É o mecanismo que o JS usa para procurar propriedades/métodos:
     objeto → prototype → Object.prototype → null
*/

// ============================================================================
