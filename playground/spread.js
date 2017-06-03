// function add (a, b) {
// 	return a + b;
// }

// console.log(add(3,1));

// var toAdd = [9,5];

// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA, ...groupB];

// console.log(final)

var person = ['Brian', 28];
var personTwo = ['Jen', 29];

var printGreeting = function(name, age) {
	console.log('Hi ' + name + ' you are ' + age);
}

printGreeting(...person)

var names = ['Mike', 'Ben'];
var final = ['Brian', ...names];

names.forEach( (name) => {
	console.log('Hi ' + name)
});
