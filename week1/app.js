//exercise 1
function addElement(arr, element) {
  arr.push(element);
  return arr;
}

console.log(addElement([1,2], 3)); 

function removeKey(obj, key) {
  delete obj[key];
  return obj;
}

console.log(removeKey({a:1, b:2}, "a")); 

//exercise 2
function calculator(a, b, operator) {
  switch(operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Error: division by zero";
    default: return "Unknown operator";
  }
}

console.log(calculator(10, 5, "+")); 
console.log(calculator(10, 0, "/")); 

//exercise 3
function checkAccess(role) {
  if (role === "admin") {
    return "Full access";
  } else if (role === "user") {
    return "Limited access";
  } else {
    return "No access";
  }
}

console.log(checkAccess("admin")); 
console.log(checkAccess("guest")); 