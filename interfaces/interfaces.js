function greet(person) {
    console.log('Hello, ' + person.name);
}
function changeName(person) {
    person.name = 'Anna';
    console.log(person.name);
}
var person = {
    name: 'Max',
    age: 27,
    greet: function (name) {
        console.log('Hi, I am ' + this.name);
    }
};
// greet(person);
person.greet("Baran");
// changeName(person);
var Person = (function () {
    function Person() {
    }
    Person.prototype.greet = function (name) {
        console.log('Hi, I am ' + this.name);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.name = 'Baran';
