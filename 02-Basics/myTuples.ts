// const user: (string | number)[] = ['hc', 1];
let user: [string, number, boolean];

user = ['hc', 1, true];
// user = [1, '2', false]; // tuples restricts the order of the data

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];
const newUser: User = [11, 'example@examp.com'];

export {};
