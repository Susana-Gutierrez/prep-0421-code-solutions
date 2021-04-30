function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

console.log('convertHoursToMinutes ', convertHoursToMinutes(2));

function getGreeting(name) {
  return ('Hello ' + name + '!');
}

console.log('Greeting:', getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return ((num1 + num2) * 5);
}

console.log('addAndMultiplyby5: ', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return ((num1 * num2) / 5);
}

console.log('multiplyAndDivideBy5: ', multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}

console.log('subtractTwoNumbers: ', subtractTwoNumbers(22, 7));

function getCircleCircumference(radios) {
  return (2 * radios * Math.PI);

}

console.log('getCircleCircumference: ', getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return ('"' + firstName + ' ' + lastName + '"');
}

console.log('getFullName: ', getFullName('Juan', 'Ramirez'));

function cube(number) {
  return (number * number * number);
}

console.log('cube: ', cube(5));
