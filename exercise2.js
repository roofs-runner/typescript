// class Car {
//   name: string;
//   acceleration: number = 0;
//
//   constructor(name: string) {
//     this.name = name;
//   }
//
//   public honk() {
//     console.log('Toooot!');
//   }
//
//   accelerate(speed: number) {
//     this.acceleration += speed;
//   }
// }
//
// let car = new Car('BMW');
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);
//
// // Shapes
// abstract class baseObject {
//   width: number;
//   height: number;
// }
//
// class Rectangle extends baseObject {
//
//   calcSize (width: number, height: number) {
//     return width * height;
//   }
// }
//
// let rectangle = new Rectangle();
// console.log(rectangle.calcSize(5, 6));
//
// class Person {
//   private _firstName: string = 'kek';
//
//   set firstName(value: string) {
//     if (value.length > 3) {
//       this._firstName = value;
//     } else {
//       this._firstName = 'Chmo';
//     }
//   }
//
//   get firstName () {
//     return this._firstName;
//   }
// }
//
// let person = new Person();
// console.log(person.firstName);
// person.firstName = 'Khulio';
// console.log(person.firstName);
// person.firstName = 'Max';
// console.log(person.firstName);
