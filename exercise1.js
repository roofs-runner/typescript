var double = function (value) { return value * 2; };
console.log(double(10));
var greet = function (name) {
    if (name === void 0) { name = "Baran"; }
    return console.log(name);
};
greet();
greet('Ana');
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
var testResults = [3.89, 2.99, 1.38];
var res1 = testResults[0], res2 = testResults[1], res3 = testResults[2];
console.log(res1, res2, res3);
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
