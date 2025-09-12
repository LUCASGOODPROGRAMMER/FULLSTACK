/** IF, ELSE IF E ELSE 
 * if -> se for verdadeiro
 * else if -> se não for
 * else -> nada é verdadeiro
*/
const hora = 13;

// estrutura condicional utilizada no controle de fluxo de um programa, usado para tomar decisões e executar diferentes blocos de códiigos com base nas condições
if (hora >= 0 && hora <= 11) {
  console.log("bom dia");
} else if (hora >= 12 && hora <= 17) {
  console.log("boa tarde");
} // else if é uma ramificação do if principal, pode ter finitos else if
else {
  console.log("boa noite");
} // else é usado quando nenhuma das condições são verdadeiras, apenas um else por if.


const tenhoNamorada = true
if(tenhoNamorada){
    console.log("uWu")
} else {
    console.log("ficar mofando na cadeira")
} 