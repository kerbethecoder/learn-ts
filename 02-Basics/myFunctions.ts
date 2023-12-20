// Correct way of writing functions
function addTwo(num: number): number {
  return num + 2;
  //   return 'ey';
}
let myValue = addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper('four');

function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser('one', 'mad@nono.dev', false);

// arrow function + default values
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser('b', 'bebe@dev.co');

// function getValue(myVal: number): boolean {
//   if (myVal > 5) return true;
//   return '200 OK';
// }

// arrow function + correct TS function syntax
const getHello = (s: string): string => {
  return '';
};

const heros = ['thor', 'spiderman', 'ironman'];
// const heros = [1, 2, 3];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errorMsg: string): void {
  console.log(errorMsg);
}

function handleError(errorMsg: string): never {
  throw new Error(errorMsg);
}

export {};
