import {
  nome as name,
  sobrenome as surname,
  idade as age,
  soma as sum,
  Pessoa
} from "./modulo1";

console.log(name, surname, age);
console.log(sum(4, 4));

const pessoa1 = new Pessoa("lucas", "hubner", 17);
pessoa1.info()

// Importando bindings nomeadas (named imports) do módulo externo "./modulo1"
// É possível usar "as" para criar um alias (renomear o binding localmente)
// Exemplo: "nome as name" → o export "nome" passa a ser acessado como "name" neste arquivo

// Também é possível renomear na exportação:
// export { nome as name } // define o alias já no módulo exportador

// Todos os módulos ES operam em "strict mode" por padrão
// (não é necessário usar "use strict")

// Caso queira importar *tudo* de um módulo, use o operador estrela (*):
// import * as modulo from "./modulo1"
// Agora "modulo" é um objeto que contém todas as bindings exportadas:
// modulo.nome, modulo.sobrenome, modulo.idade, modulo.soma, modulo.Pessoa
//
// Esse "modulo" é um namespace import (importação por namespace)

// import multiplica, { nome, ... age } from './modulo1'; posso importar o padrão e o resto das variáveis
