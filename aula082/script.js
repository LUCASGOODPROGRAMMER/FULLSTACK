// GETTERS E SETTERS

const _velocity = Symbol("velocity");
// Symbol() === Symbol() vai retornar falso pq ele gera um id aleatório, nunca vai ser igual

class Carro {
  constructor(name) {
    this.name = name;
    // this.velocity = 0; // atributo público
    this[_velocity] = 0; // atributo privado
  }

  set velocity(value) {
    console.log('setter')
    if (typeof value !== "number") return;
    if (value >= 100 && value <= 0) return;
    this[_velocity] = value;
  }

  get velocity() {
    console.log('get')
    return this[_velocity];
  }

  acelerar() {
    if (this[_velocity] >= 12) {
      return console.log("velocidade máxima alcançada");
    }
    this[_velocity]++;
    console.log(`${this[_velocity]} km/h`);
  }

  desacelerar() {
    if (this[_velocity] <= 0) {
      return console.log("carro está parado");
    }
    this[_velocity]--;
    return console.log(`${this[_velocity]} km/h`);
  }
}

const car1 = new Carro("ford gt");
// for (let i = 0; i < 13; i++) {
//   car1.acelerar();
// }

// for (let i = 0; i < 13; i++) {
//   car1.desacelerar();
// }

// car1.velocity = 500; // essa brecha no atributo público vai permitir manipular a velocida esternamente, recomendado criar um atributo privado assim ele não é manipulado externamente
// car1.velocity = 200 // isso vai criar uma nova chave, não vai acessar a chave privada

car1.velocity = 99; // chamando o setter
console.log(car1.velocity) // chamando o getter

class Pessoa {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname
    }

    get nomeCompleto() {
        return this.name + ' ' + this.surname
    }

    set nomeCompleto(value) {
        value = value.split(" "); // separa uma string em substrings usando um caracter em comum e retorna um array com as substrings separadas por um elemento em comum
        this.name = value.shift(); // remove o primeiro elemento de um array
        this.surname = value.join(" ") // ele junta todos os elementos de um array em uma string usando um separador em comum passao pelos argumentos
    }
}

const p1 = new Pessoa("Lucas", "Hubner")
console.log(p1.nomeCompleto)
p1.nomeCompleto = "keynner davi savi"
console.log(p1.nomeCompleto)