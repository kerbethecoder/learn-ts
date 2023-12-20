"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'kerbs',
    email: 'kerbs@dev.com',
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = {
    name: 'kerbe',
    isPaid: true,
    email: 'email@email.com',
};
createUser(newUser);
function createCourse() {
    return {
        name: 'react',
        price: 399,
    };
}
function createUsers(user) {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive,
    };
}
createUsers({
    name: '',
    email: '',
    isActive: true,
});
var myUser = {
    _id: '123',
    name: 'kerbs',
    email: 'kerbe@dev.mail',
    isActive: false,
};
myUser.email = 'non@gmail.dev';
