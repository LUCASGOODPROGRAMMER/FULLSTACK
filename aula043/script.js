// const checkNumber = (number) => {
//   const testNumber = !isNaN(number);
//   if (testNumber) {
//     if (number % 3 === 0 && !(number % 5 === 0)) return "Fizz";
//     else if (!(number % 3 === 0) && number % 5 === 0) return "Buzz";
//     else if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
//     else if (!(number % 3 === 0) && !(number % 5 === 0)) return number;
//   }
// };

// const checkNumber = (n) => isNaN(n) 
//   ? "Valor inválido" 
//   : n % 15 === 0 ? "FizzBuzz" 
//   : n % 3 === 0 ? "Fizz" 
//   : n % 5 === 0 ? "Buzz" 
//   : n;

const checkNumber = (n) =>
  isNaN(n) ? "Valor inválido" : (n % 3 ? "" : "Fizz") + (n % 5 ? "" : "Buzz") || n;

console.log(checkNumber(15)); // FizzBuzz
console.log(checkNumber(9));  // Fizz
console.log(checkNumber(10)); // Buzz
console.log(checkNumber(7));  // 7
console.log(checkNumber("a")); // Valor inválido

