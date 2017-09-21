// class Person {
//   name: string;
//   private type: string;
//   protected age: number = 40;
//
//   constructor(name: string, public username: string, age) {
//     this.name = name;
//   }
//
//   printAge() {
//     console.log(this.age);
//   }
//
//   setType(type: string) {
//     this.type = type;
//     console.log(this.type);
//   }
// }
//
// let person = new Person('Baran', 'baran', 44);
// console.log(person);
// person.printAge();
// person.setType('Lokh!');
//
// class Baran extends Person {
//   constructor(username: string) {
//     super('Kui', username);
//     this.age = 45;
//   }
// }

// const baran = new Baran('Anna');
// console.log('New baran', baran);

// Getters and Setters
// class Plant {
//   private _species: string = 'Default';
//
//   get species() {
//     return this._species;
//   }
//
//   set species(value: string) {
//     if (value.length > 3) {
//       this._species = value;
//     } else {
//       this._species = 'Default';
//     }
//   }
// }
//
// let plant = new Plant();
// console.log(plant.species);
//
// plant.species = 'ADuuuuuu';
// console.log(plant.species);

// static proprties and methods
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  };
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

//Abstract classes
abstract class Project {
  projectName: string = 'Default';
  budget: number;
  
  abstract changeName(name: string): void;
  
  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName (name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('super IT Project');
console.log(newProject);

// private constructors
class OnlyOne {
  private static instance: OnlyOne;
  
  private constructor(public name: string) {}
  
  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
