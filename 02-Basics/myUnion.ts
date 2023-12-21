let score: number | string = 33;

score = 44;
score = 'fifty five';

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let kerbe: User | Admin = {
  name: 'Kerbs',
  id: 465122,
};

kerbe = {
  username: 'kb',
  id: 124,
};

function getDBId(id: number | string) {
  //  making some API calls
  console.log(`DB id is: ${id}`);
}
getDBId(3);

function newGetDbId(id: number | string) {
  if (typeof id === 'string') {
    id.toLowerCase();
  }
}

//  Array
const data: number[] = [1, 2, 3];
const data2: string[] = ['1', '2'];
const data3: string[] | number[] = [1, 2, 3]; // this means, either array of numbers or array of strings, not mixed
const data4: (string | number | boolean)[] = [1, '2', 3, true]; // this is the correct way of union between two types for an array

// let pi: 3.14 = 3.14; // not good writing
let seatAllotment: 'aisle' | 'middle' | 'window';
seatAllotment = 'aisle';
// seatAllotment = 'crew';
