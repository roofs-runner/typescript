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
var Person = (function () {
    function Person(name, username, age) {
        this.username = username;
        this.age = 40;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Baran', 'baran', 44);
console.log(person);
person.printAge();
person.setType('Lokh!');
var Baran = (function (_super) {
    __extends(Baran, _super);
    function Baran() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Loshara';
        return _this;
    }
    return Baran;
}(Person));
var baran = new Baran('Anna', 'ana', 55);
console.log('New baran' + baran);
