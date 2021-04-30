var person = {
  firstName: 'Susana',
  lastName: 'Gutierrez',
  hobby: 'Hiking'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is: ', fullName);

person.job = 'Developer';
console.log('The person\'s current job is: ', person.job);

person.previousJob = 'Technician';
console.log('The person\'s previous job is: ', person.previousJob);
console.log('The complete person object: ', person);

var myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: '2017'
};

console.log('Car information: ');
console.log(myCar);

myCar['owner'] = fullName;
console.log('My name is ', myCar['owner'], ' and I drive a ', myCar['year'], myCar['make'], myCar['model']);

myCar['color'] = 'red';
console.log('Full car info: ', myCar);
