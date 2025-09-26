function randomNumbers(min = 1000, max = 3000) {
  return Math.round(Math.random() * (max - min) + min);
}

function f1(callback) {
  setTimeout(function () {
    console.log("f1");
    if (callback) callback();
  }, randomNumbers());
}
function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, randomNumbers());
}
function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, randomNumbers());
}
function f4(callback) {
  setTimeout(function () {
    console.log("f4");
    if (callback) callback();
  }, randomNumbers());
}

// f1(function () {
//   f2(function () {
//     f3(function () {
//       f4(function () {
//         console.log("Olá mundo");
//       });
//     });
//   });
// });

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  f4(f4Callback);
}

function f4Callback() {
  console.log("Olá mundo");
}
