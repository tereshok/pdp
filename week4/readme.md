Week Number: [4]
Date: [27.01.2026]

✅ Completed This Week:
- Basic types: string, number, boolean, array
- Type inference and annotations
- Interfaces and type aliases
- Function typing (parameters and return types)
- Optional and union types

[Exercise completed]
Exercise 1
    In plain JavaScript, the function sum can accept any type of arguments, which may cause unexpected results (like string concatenation).
    In TypeScript, parameters and return type are explicitly declared as number, so the compiler ensures only numbers are passed and returned safely.

Exercise 2
    In JavaScript, the user object can have any shape, and there is no guarantee about its properties.
    In TypeScript, the User interface defines the exact structure, so the object must include id, name, and email with correct types, improving reliability.

Exercise 3
    In JavaScript, the greet function accepts any object and assumes it has a name property, which can break if the property is missing.
    In TypeScript, the Users interface enforces that the object has id and name, with email optional, so the function is type-safe and predictable.
    
🚧 Challenges Faced:
- difference between Interfaces and type aliases, understanding of application in real projects
- Intersection Types usage areas
- Interfaces extending usage areas
- Record<K, V> / typeof usage areas
