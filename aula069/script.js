// forEach é esclusivo dos array
const numbers = [12, 10, 14, 6, 8, -10];

// for(let index in numbers) {
//     console.log(numbers[index])
// } // usando for in

// for(let numero of numbers) {
//     console.log(numero)
// } // usando for of

numbers.forEach((numero, index) =>
  console.log("index:" + index + " value:" + numero)
); // usando forEach

// simulandpo reduce com forEach
let acumulador = 0;
numbers.forEach((number) => (acumulador += number));
console.log(acumulador);

// simulando reduce com while
let total = 0;
let index = 0;
while (true) {
  total += numbers[index];
  index++;
  if (index === numbers.length) break;
}

console.log(total);
