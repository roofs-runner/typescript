let double = (value: number) => value * 2;
console.log(double(10));

let greet = (name = "Baran") => console.log(name);
greet();
greet('Ana');

let numbers  = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

let testResults = [3.89, 2.99, 1.38];
const [res1, res2, res3] = testResults;
console.log(res1, res2, res3);

let scientist = {firstName: "Will", experience: 12};
let{firstName, experience} = scientist;
console.log(firstName, experience);

