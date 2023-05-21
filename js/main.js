// This is a comment
/* This is another comment */

console.log('Example test from JS');

let number = 6;

if (number < 5) {
  console.log('Number smaller than 5');
} else if (number == 5) {
  console.log('Number is 5');
} else {
  console.log('Number is bigger than 5');
}

switch (true) {
  case number < 5:
    console.log('Number smaller than 5');
    break;
  case number == 5:
    console.log('Number is 5');
    break;
  default:
    console.log('Number is bigger than 5');
    break;
}

// Typeof
console.log('typeof 50: ' + typeof 50);
console.log('typeof "50": ' + typeof '50');
console.log('typeof true: ' + typeof true);
console.log('typeof []: ' + typeof []);
console.log('typeof function () {}: ' + typeof function () {});

console.log('Instanceof [] => Array: ', [] instanceof Array);
console.log('Instanceof [] => Array: ', [] instanceof Boolean);
console.log('Instanceof Function => Object: ', Function instanceof Object);
console.log(
  'Instanceof "lorem ipsum" => Object: ',
  'lorem ipsum' instanceof Object
);

var foo = 10;
console.log('typeof foo: ' + typeof foo);

foo = 'lorem ipsum';
console.log('typeof foo: ' + typeof foo);

// This can't be change later
const constFoo = 10;
console.log('typeof foo: ' + typeof constFoo);

var zoo = 10;
console.log('typeof zoo: ' + typeof zoo);
let bar = 20;
console.log('typeof bar: ' + typeof bar);

var zoo = 15;
// let bar = 15; //Will not allow it for second time.

bar = 'lorem ipsum';
console.log('typeof bar: ' + typeof bar);

// Case sensitive => something != Something
let something;
// console.log('Foo = ' + Something);

// Scope of variables
const global = 'Global const variable';
function test() {
  let global2 = 'Global let variable';

  console.log(global);
  console.log(global2);
}
test();

// Function scope
var funVariable = 'function variable';
let foo2 = 'something';
function functionScope() {
  function child() {
    var funVariable = 5;
    console.log(funVariable);
  }

  if (true) {
    var funVariable = 10;
    console.log(funVariable);
  }

  console.log(funVariable);

  console.log(foo2);
  if (true) {
    let foo2 = 100000;
    console.log(foo2);
  }
  child();
  console.log(foo2);
}

functionScope();
console.log(funVariable);
console.log(foo2);

let something1;
// let something1;

// Write some code

function somethingFunction() {
  let something1 = 10;
}

// Undefined util is init
console.log('After is used: ', sda);
var sda = 'SDA';
// let sda = 'SDA';

function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x);
  }

  console.log(x);
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x);
  }

  console.log(x);
}

varScoping();
letScoping();

console.log('For loop');
for (let index = 0; index < 20; index++) {
  if (index == 1) {
    // Skip index = 1
    continue;
  }

  if (index == 10) {
    // Break after index 10
    break;
  }

  console.log(index);
}

let tablica = [1, 2, 3];
tablica.forEach(function (element, index) {
  console.log('Element with Index: ' + index + ' has a value ' + element);
});

let index = 0;
while (index < tablica.length) {
  console.log(tablica[index]);
  index++;
}

console.log(index);

let index2 = 0;
do {
  console.log(tablica[index2]);
  index2++;
} while (index2 < tablica.length);

function Add(var1, var2) {
  // Function code
  return var1 + var2;
}
console.log('1 + 2 = ' + Add(1, 2));

(function (var1, var2) {
  // Function code
  console.log(var1 + var2);
})(1, 2);

const add2 = function (a, b) {
  return a + b;
};
console.log('1 + 2 = ' + add2(1, 2));

const add3 = (a, b) => {
  return a + b;
};
console.log('1 + 2 = ' + add3(1, 2));

console.log('1 + 2 = ' + add3('1 ', 2));

// Special case when converting to a number first
const minus = (a, b) => {
  return a - b;
};
let calc = minus('1', 2);
console.log('1 - 2 = ' + calc);

// Array
const array = [1, 5, 9, 7];
const array2 = [1, 'Something', 7];
console.log(array[0]);
console.log(array2[1]);

array.push(5);
console.log(array[4]);

array.pop();
console.log(array[6]); // Undefined

array.shift();
console.log(array[0]);

array.unshift(11);
console.log(array[0]);

const arrayString = array.join(' ');
console.log(arrayString);

array.reverse();
console.log(array[0]);

var sorted = array.sort();
const arrayString1 = sorted.join(' ');
console.log('Desc ' + arrayString1);
console.log(sorted[0]);
sorted.reverse();
const arrayString2 = sorted.join(' ');
console.log('Asc ' + arrayString2);
console.log(sorted[0]);

const arrayConcat = sorted.concat(array2);
const arrayString3 = arrayConcat.join(' ');
console.log(arrayString3);

array.forEach((asdf) => {
  console.log(asdf);
});

console.log('Double of values: ');
const doubleArray = array.map((value, index) => {
  if (index == 2) {
    return value;
  }

  return 2 * value;
});

doubleArray.forEach((asdf) => {
  console.log(asdf);
});

var filteredArray = doubleArray.filter((value, index) => index != 2);
console.log(filteredArray);

var filteredArray2 = array2.filter((value, index) => value != 'Something');
console.log(filteredArray2);

const sliced = filteredArray.slice(0, 2);
console.log(sliced);

filteredArray.splice(0, 3, 30002, 3234, 3234);
console.log(filteredArray);

console.log(filteredArray.length);

// Objects
const person = new Object();
person.First = 'Avjol';
person.Last = 'Sakaj';

console.log(person);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const prof = new Person('Avjol', 'Sakaj');

console.log(prof);

class Profesor {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const foo5 = new Profesor('Avjol', 'Sakaj');
console.log(foo5.firstName);

let divMessage = document.getElementById('divMessage');
console.log(divMessage);

let firstName = document.getElementById('firstname');
console.log(firstName);

let table = document.getElementsByTagName('table');
console.log(table);

console.log('Print only class list for pink');
var pink = document.querySelectorAll('.pink');
console.log(pink[0].classList);
console.log(pink[0].classList[0]);

let child = document.createElement('div');
child.innerHTML = `<table class="tableEx"><tr>
<th colspan="2">Latest data</th>
<th rowspan="2">We are the best</th>
</tr>
</table>`;
// child.innerText = 'Latest data from innerText';

let footer = document.getElementById('footer');
footer.appendChild(child);

// footer.removeChild(child);

var submit = document.getElementById('submit');
submit.disabled = true;

var accept = document.getElementById('accept');
accept.addEventListener('click', validate);
function validate() {
  console.log('Checkbox clicked!');
  submit.disabled = !submit.disabled;
}

// JQuery

// $(document).ready(function () {
// });

$(function () {
  console.log('Inside jquery');
  let divMessage = $('#divMessage');
  console.log('Div Message: ', divMessage);

  var pink = $('.pink');
  console.log('Class name: ' + pink[0].classList[0]);

  pink.css({ background: 'pink' }).hide('fast').show(3000);

  console.log('All list items');
  $('p').click(function () {
    $('ul li').each(function () {
      console.log($(this).text());
    });
  });

  let parent = $('footer');
  parent.append(`Hello from today`);

  $('input#firstname').val('adsfasdf@outlook.com');
  var message = $('textarea#message').val('asdfasdfas asdfa sasdf');
  console.log(message.text);
});
