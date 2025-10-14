// Classes

class People {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  } // método constructor em classe

  getData() {
    const keys = Object.keys(this);
    keys.forEach((key) => console.log(`${key}: ${this[key]}`));
  } // método proto

  toTalk() {
    this.action = "conversando";
    this.getData();
  } // método proto

  eat() {
    this.action = "se alimentando";
    this.getData();
  } // método proto

  toDrink() {
    this.action = "matando a sede";
    this.getData();
  } // método proto
}

// instanciar é criar um objeto a partir de uma classe
const p1 = new People("Lucas", "Hubner", 17);
const p2 = new People("Keynner", "Davi", 18);
const p3 = new People("Rafael", "Alguma coisa", 17);
// p1.getData();
p1.toTalk();
p2.eat();
p3.toDrink();
// console.log(p1) // vai exibir um Object com todas as chaves e valores, e o [[prototype]]

function People2(name, surname) {
  (this.name = name), (this.surname = surname);
}

People2.prototype.falar = function () {
  console.log(`${this.name} está falando`);
}; // outra de adicionar método no protof

const p12 = new People2("lucas", "hubner");
console.log(p1,p12)
