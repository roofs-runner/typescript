class Person {
  name: string;
  private type: string;
  protected age: number = 40;
  
  constructor(name: string, public username: string, age) {
    this.name = name;
  }
  
  printAge() {
    console.log(this.age);
  }
  
  setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

let person = new Person('Baran', 'baran', 44);
console.log(person);
person.printAge();
person.setType('Lokh!');

class Baran extends Person {
  name = 'Loshara';
}

const baran = new Baran('Anna', 'ana', 55);
console.log('New baran' + baran);
