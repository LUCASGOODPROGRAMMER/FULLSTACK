import CPFGenerator from "./modules/CPFGenerator";

import "./assets/css/style.css";

(function () {
  const gerador = new CPFGenerator();
  const result = document.querySelector(".result");
  const cpfGenerated = gerador.generator();
  result.innerHTML = cpfGenerated;
  console.log(cpfGenerated)
})();
