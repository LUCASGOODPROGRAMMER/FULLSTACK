// herança com classes

class Factory {
  constructor(name, price, supplier) {
    if (typeof name !== "string" || !name.trim()) {
      throw new Error("O nome do produto deve ser uma string não vazia.");
    }
    if (typeof price !== "number" || price < 0) {
      throw new Error("O preço deve ser um número positivo.");
    }
    if (typeof supplier !== "string" || !supplier.trim()) {
      throw new Error("O fornecedor deve ser uma string não vazia.");
    }

    this.name = name.trim();
    this.price = parseFloat(price.toFixed(2)); // formata o preço
    this.supplier = supplier.trim();
  }

  get technicalSheet() {
    const keys = Object.keys(this);
    if (!keys.length) {
      console.warn("Ficha técnica vazia: o produto não contém propriedades.");
      return;
    }
    console.log("=== Ficha Técnica ===");
    for (const key of keys) {
      console.log(`${key}: ${this[key]}`);
    }
  }

  teste() {
    console.log("método de prototype do elemento pai")
  }
}

class Product extends Factory {
  constructor(name, price, supplier, category, validity, material) {
    super(name, price, supplier); // chama o constructor da classe pai

    if (typeof category !== "string" || !category.trim()) {
      throw new Error("A categoria deve ser uma string não vazia.");
    }

    const parsedDate = new Date(validity);
    if (isNaN(parsedDate)) {
      throw new Error(
        "A validade deve estar em formato de data válido (YYYY-MM-DD)."
      );
    }

    this.category = category.trim();
    this.validity = parsedDate.toLocaleDateString("pt-BR");
    this.material =
    typeof material === "string" ? material.trim() : "Desconhecido";
  }

  teste() {
    console.log("o método foi sobrescrito na classe filho")
  } // seu eu criar um método na classe filha com o mesmo nome do método no prototype pai, o método da classe filha vai sobrescrever no contexto atual

  // métodos criados em classe filha obviamente não vai estar acessível pelo elemento pai
}
// Product extends Factory, Product vai se tornar uma classe filha e vai herdar todos os métodos da classe pai, podendo utilizar o seu método constructor

const p1 = new Product(
  "Caneca",
  29.5,
  "solange",
  "copo",
  "2008-04-29",
  "cimento"
);
p1.technicalSheet;
p1.teste()
