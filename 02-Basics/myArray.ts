// First syntax
const superheros: string[] = [];
const heroPowers: number[] = [];

superheros.push('spiderman');
heroPowers.push(2);

// Second syntax
const superHeros: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

allUsers.push(
  {
    name: 'kerbs',
    isActive: true,
  },
  {
    name: 'bebe',
    isActive: false,
  }
);

const MLModels: number[][] = [[255, 255, 255], 'asd'];
