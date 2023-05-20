console.log('Test');

const number = 5;

if (number > 5) {
  console.log('Number is bigger than 5');
} else if (number == 5) {
  console.log('Number is 5');
} else {
  console.log('Number is lower than 5');
}

switch (number) {
  case 5:
    console.log('Number is 5');
    break;
  case number < 5:
    console.log('Number is lower than 5');
    break;
  default:
    console.log('Number is bigger than 5');
    break;
}
