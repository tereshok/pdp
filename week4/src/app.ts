//exercise 1
//Vanila JS
/*
function sum(a, b) {
  return a + b;
}

const result = sum(5, 10);
console.log(result);
*/
//Vanila JS with TS
function sum(a: number, b: number): number {
  return a + b;
}

const result: number = sum(5, 10);
console.log(result);

//exercise 2
//Vanila JS
/*
const user = {
  id: 1,
  name: "Oleksandr",
  email: "oleksandr@example.com"
};
*/
//Vanila JS with TS
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Oleksandr",
  email: "oleksandr@example.com"
};

//exercise 3
//Vanila JS
/*
function greet(user) {
  return `Hello, ${user.name}!`;
}

console.log(greet({ name: "Oleksandr" }));
*/
//Vanila JS with TS
interface Users {
  id: number;
  name: string;
  email?: string; 
}

function greet(user: Users): string {
  return `Hello, ${user.name}!`;
}

console.log(greet({ id: 1, name: "Oleksandr" }));
