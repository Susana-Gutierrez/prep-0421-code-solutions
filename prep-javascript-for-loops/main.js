// create your loops here.

var i;

console.log('First loop:');
for (i = 0; i < 10; i++) {
  console.log(i);
}

console.log('Second loop:');
for (i = 0; i < 20; i++) {
  console.log(i);
  i = i + 1;
}

console.log('Third loop:');
for (i = 100; i >= 1; i--) {
  console.log('Time till explosion:', i);
}
