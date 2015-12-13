var person = {
	name: 'Tony',
	age: 23
};

var personJason = JSON.stringify(person);
console.log(personJason);
console.log(typeof personJason);

var personObject = JSON.parse(personJason);
console.log(personObject.name);
console.log(typeof personObject);

console.log(typeof person);
console.log(person.name);

var animal = '{"name": "Dudu"}';

var animalObject = JSON.parse(animal);
animalObject.age = 1;

animal = JSON.stringify(animalObject);

console.log(animal);