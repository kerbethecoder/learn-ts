// TS is smart enough to assign the type values
// let greetings: string = 'hey';
let greetings = 'hey';

greetings.toLowerCase();
console.log(greetings);

// 'number' Primitive Type
let userId: number = 334455;

// 'boolean' Primitive Type
let isLoggedIn: boolean = false;

// 'any' type
// REMINDER: don't use 'any' if you're using TS, it doesn't make sense at all XD
let hero: string;
function getHero() {
  return 'thor';
}

hero = getHero();

export {};
