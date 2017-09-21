function echo(data:any) {
  return data;
}

console.log(echo(24));

function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho(24).lenght);
console.log(betterEcho('Huilo'));
console.log(betterEcho({name: 'Baran'}));

// built-in generics
const testResult: Array<number> = [1.94, 2.44];
testResult.push(44);
testResult.push('Baran');

