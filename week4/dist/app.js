"use strict";
/*
function sum(a, b) {
  return a + b;
}

const result = sum(5, 10);
console.log(result);
*/
function sum(a, b) {
    return a + b;
}
const result = sum(5, 10);
console.log(result);
const user = {
    id: 1,
    name: "Oleksandr",
    email: "oleksandr@example.com"
};
function greet(user) {
    return `Hello, ${user.name}!`;
}
console.log(greet({ id: 1, name: "Oleksandr" }));
