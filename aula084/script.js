// ===============================
// CLASSE PAI (BASE)
// ===============================

class Controle {
  constructor(name, connection) {
    // Validação: verifica se o nome é uma string não vazia
    if (typeof name !== "string" || !name.trim()) {
      throw new Error("O nome deve ser uma string não vazia.");
    }

    // Validação: verifica se a conexão é uma string não vazia
    if (typeof connection !== "string" || !connection.trim()) {
      throw new Error("A conexão deve ser uma string não vazia.");
    }

    // Atributos da classe base
    this.name = name.trim();
    this.connection = connection.trim();
  }
}

// ===============================
// CLASSE FILHA
// (HERDA de Controle)
// ===============================

class ControleRemoto extends Controle {
  constructor(name, connection, type, sound) {
    // Validação do tipo do controle (string não vazia)
    if (typeof type !== "string" || !type.trim()) {
      throw new Error("O tipo de controle deve ser uma string não vazia.");
    }

    // Validação do volume inicial (número positivo e finito)
    if (typeof sound !== "number" || sound < 0 || !Number.isFinite(sound)) {
      throw new Error("O som deve ser um número positivo e válido.");
    }

    // Chama o construtor da classe pai (Controle)
    // Isso inicializa 'name' e 'connection'
    super(name, connection);

    // Novos atributos específicos da classe filha
    this.type = type.trim(); // tipo do controle (ex: analógico)
    this.sound = sound; // volume inicial
  }

  // ===============================
  // MÉTODOS DE INSTÂNCIA
  // ===============================

  // Aumentar o som do controle
  increaseSound(value) {
    // Validação: valor precisa ser um número válido maior que 0
    if (typeof value !== "number" || value <= 0 || !Number.isFinite(value)) {
      throw new Error("O valor deve ser um número válido maior que 0.");
    }

    // Math.min() impede que o volume ultrapasse o limite de 100
    this.sound = Math.min(this.sound + value, 100);
  }

  // Diminuir o som do controle
  decreaseSound(value) {
    // Validação: valor precisa ser um número válido maior que 0
    if (typeof value !== "number" || value <= 0 || !Number.isFinite(value)) {
      throw new Error("O valor deve ser um número válido maior que 0.");
    }

    // Math.max() impede que o volume fique abaixo de 0
    this.sound = Math.max(this.sound - value, 0);
  }

  // ===============================
  // MÉTODO ESTÁTICO
  // ===============================

  static changeBattery() {
    console.log("Ok, pilha trocada");

    // 'this' dentro de um método estático aponta para a CLASSE,
    // não para uma instância específica
    console.log(this);
  }

  /*
    ⚙️ Sobre métodos estáticos:

    - Métodos estáticos pertencem à CLASSE, e não às instâncias.
    - Só podem ser chamados diretamente na classe:
        ControleRemoto.changeBattery();

    - Não podem acessar atributos ou métodos da instância (this.sound, this.type...),
      pois não fazem parte de um objeto específico.

    - São úteis para ações genéricas que pertencem à classe,
      como criar logs, validar dados, ou realizar ações de manutenção.
  */
}

// ===============================
// CRIANDO UMA INSTÂNCIA
// ===============================

const c1 = new ControleRemoto(
  "controle de caixa de som", // name
  "2.4g",                    // connection
  "controle analógico",       // type
  35                          // sound inicial
);

// ===============================
// USANDO MÉTODOS DE INSTÂNCIA E ESTÁTICOS
// ===============================

// Chama o método de instância (altera o volume do objeto c1)
c1.increaseSound(12);

// Chama o método estático diretamente na classe (não na instância)
ControleRemoto.changeBattery();

/*
  🧠 Resumo:
  - Métodos de instância: só funcionam em objetos criados com 'new'
  - Métodos estáticos: só funcionam na classe diretamente
  - O método estático NÃO tem acesso aos atributos da instância,
    pois eles pertencem a um objeto específico (c1, c2, etc.)
*/
