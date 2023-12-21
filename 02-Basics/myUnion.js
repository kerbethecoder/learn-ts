var score = 33;
score = 44;
score = 'fifty five';
var kerbe = {
    name: 'Kerbs',
    id: 465122,
};
kerbe = {
    username: 'kb',
    id: 124,
};
function getDBId(id) {
    //  making some API calls
    console.log("DB id is: ".concat(id));
}
getDBId(3);
function newGetDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
//  Array
var data = [1, 2, 3];
var data2 = ['1', '2'];
var data3 = [1, 2, 3]; // this means, either array of numbers or array of strings, not mixed
var data4 = [1, '2', 3, true]; // this is the correct way of union between two types for an array
// let pi: 3.14 = 3.14; // not good writing
var seatAllotment;
seatAllotment = 'aisle';
// seatAllotment = 'crew';
