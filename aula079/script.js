const nomeCompleto = {
  nomeCompleto() {
    return `${this.name} ${this.surname}`;
  },
};

const falar = {
  falar() {
    return `${this.nomeCompleto()} está conversando...`;
  },
};

const comer = {
  comer() {
    return `${this.nomeCompleto()} está comendo...`;
  },
};

const interagir = {
  interagir() {
    switch (this.status) {
      case "comendo":
        console.log(`não foi possível efetuar ação (${this.comer()})`);
        break;
      case "conversando":
        console.log(`não foi possível efetuar ação (${this.falar()})`);
        break;
      default:
        console.log(`${this.nomeCompleto()} está livre para agir.`);
    }
  },
};

// composição dos comportamentos
const pessoaPrototype = Object.assign({}, nomeCompleto, falar, comer, interagir);

function criaPessoa(name, surname, status) {
  return Object.create(pessoaPrototype, {
    name: { value: name },
    surname: { value: surname },
    status: { value: status },
  });
}

// Teste
const p1 = criaPessoa("Lucas", "Hubner", "conversando");
p1.interagir();
