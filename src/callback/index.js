function sum(num1, num2) {
  return num1 + num2;
}

function rest(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum)); // 2 + 2 = 4
console.log(calc(3, 2, rest)); // 3 - 2 = 1
console.log(calc(3, 4, mult)); // 3 * 4 = 12
console.log(calc(6, 3, div)); // 6 / 3 = 2

setTimeout(function () {
  console.log("Hola JavaScript");
}, 5000);

function grettin(name) {
  console.log(`Hola ${name}`);
}

setTimeout(grettin, 2000, "Laureano");
