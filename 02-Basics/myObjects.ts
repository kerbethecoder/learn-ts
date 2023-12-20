const User = {
  name: 'kerbs',
  email: 'kerbs@dev.com',
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = {
  name: 'kerbe',
  isPaid: true,
  email: 'email@email.com',
};

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return {
    name: 'react',
    price: 399,
  };
}

// Type Aliases
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUsers(user: User): User {
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

type NewUser = {
  readonly _id: string; // literally, read only
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // '?' is for optionals
};

let myUser: NewUser = {
  _id: '123',
  name: 'kerbs',
  email: 'kerbe@dev.mail',
  isActive: false,
};

myUser.email = 'non@gmail.dev';
// myUser._id = 123 // will not work because '_id' is readonly

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

export {};
