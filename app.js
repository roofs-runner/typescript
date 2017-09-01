// function multiply(value1: number, value2: number): number {
//     return value1 * value2;
// }
//
// function sayHello() {
//     console.log('Hello');
// }
//console.log(multiply(22, 2));
// let myMultiply: (val1: number, val2: number) => number;
//
// myMultiply = sayHello;
//
// myMultiply();
//
// myMultiply = multiply;
//
// console.log(myMultiply(5,4));
//objects
// let userData: {name:string, age:number} = {
//   name: 'Max',
//   age: 45
// };
//
// let complex: {data: number[], output:(all: boolean) => number[]} = {
//   data: [100, 3.99, 10],
//   output: function (all: boolean): number[] {
//       return this.data;
//   }
// };
//
// type Complex = {data: number[], output:(all: boolean) => number[]};
//
// let complex2: Complex = {
//     data: [100, 3.99, 10],
//     output: function (all: boolean): number[] {
//         return this.data;
//     }
// };
//
// //union types
// let myRealAge: number | string = 27;
// myRealAge = true;
//
// //nullable types
// let canBeNull = 12;
// canBeNull = null;
// rest operator
var numbers = [1, 40, 5, 33];
console.log(Math.max.apply(Math, numbers));
//rest operator
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(5, 13));
