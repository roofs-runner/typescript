interface NamedPerson {
  name: string;
  greet(name: string):void;
}

function greet(person: NamedPerson) {
  console.log('Hello, ' + person.name);
}

function changeName(person: NamedPerson) {
  person.name = 'Anna';
  console.log(person.name);
}

const person = {
  name: 'Max',
  age: 27,
  greet(name: string) {
    console.log('Hi, I am ' + this.name);
  }
};

// greet(person);
person.greet("Baran");
// changeName(person);

class Person implements NamedPerson {
  name: string;

  greet(name: string) {
    console.log('Hi, I am ' + this.name);
  }
}

const myPerson = new Person();
myPerson.name = 'Baran';
