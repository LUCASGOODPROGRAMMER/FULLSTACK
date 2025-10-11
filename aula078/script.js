class Conta {
  #saldo; // atributo privado
  constructor(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.#saldo = saldo;
  }

  get saldo() {
    return this.#saldo;
  }

  depositarSaldo(value) {
    this.#saldo += value;
    console.log(`Depósito de R$${value}. Novo saldo: R$${this.#saldo}`);
  }

  realizarExtracao(value) {
    if (value > this.#saldo) return console.log("Saldo insuficiente!");
    this.#saldo -= value;
    console.log(`Saque de R$${value} realizado. Novo saldo: R$${this.#saldo}`);
  }
}

class ContaCorrente extends Conta {
  #limite;
  constructor(agencia, conta, saldo, limite) {
    super(agencia, conta, saldo);
    this.#limite = limite;
  }

  get limite() {
    return this.#limite;
  }

  realizarExtracao(value) {
    if (value > this.saldo + this.#limite) {
      return console.log("❌ Limite excedido! Saque negado.");
    }

    // Permite saque até o limite
    let saldoFinal = this.saldo - value;
    console.log(
      `💸 Saque de R$${value} realizado (Conta Corrente). Novo saldo: R$${saldoFinal}`
    );

    // atualiza o saldo diretamente via método protegido
    // como #saldo é privado na superclasse, não dá pra acessar direto
    // então reutilizamos o método da superclasse com uma pequena adaptação
    super.realizarExtracao(
      value > this.saldo ? this.saldo : value // só saca o saldo real
    );

    // Ajuste lógico se o saldo for negativo (usando o limite)
    if (saldoFinal < 0) {
      console.log(
        `⚠️ Você usou R$${Math.abs(saldoFinal)} do limite. Limite restante: R$${
          this.#limite + saldoFinal
        }`
      );
    }
  }
}

const cc = new ContaCorrente("inter", "32143234", 0, 200);
cc.depositarSaldo(12);
cc.realizarExtracao(13);

// polimorfismo é o método de sobrescrita em subclasses