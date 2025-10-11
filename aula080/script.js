const peoples = [
  { id: 6, firstName: "John", lastName: "Smith" },
  { id: 2, firstName: "Emily", lastName: "Johnson" },
  { id: 3, firstName: "Michael", lastName: "Brown" },
  { id: 4, firstName: "Sarah", lastName: "Davis" },
  { id: 5, firstName: "David", lastName: "Wilson" },
];

const newPeoples = new Map(); // a ordem de inserção original vai se manter evitando a ordenção ascendente do js

// for (const { id, firstName } of peoples) {
//   newPeople[id] = { id, firstName };
// }

for (const people of peoples) {
  const { id, firstName } = people; // desestruturando objeto através da key
  newPeoples.set(id - 1, { ...people }); // espalhando o objeto dentro de outro objeto
  console.log(id, firstName);
}

console.log(newPeoples);
console.log(newPeoples.get(6)); // passo o id do registro que desejo ver


for (const pessoa of newPeoples) {
    console.log(pessoa) // vai me retornar um array
}

console.log(newPeoples.keys()) // retorna as chaves
console.log(newPeoples.values()) // retorna os objetos

newPeoples.delete(1)
console.log(newPeoples)