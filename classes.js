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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    ;
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
//Abstract classes
var Project = (function () {
    function Project() {
        this.projectName = 'Default';
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('super IT Project');
console.log(newProject);
// private constructors
var OnlyOne = (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var wrong = new OnlyOne('The Only One');
var right = OnlyOne.getInstance();
