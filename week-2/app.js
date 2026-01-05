const users = [
  { id: 1, name: "Anna", age: 25 },
  { id: 2, name: "Petro", age: 17 },
  { id: 3, name: "Olena", age: 30 },
  { id: 4, name: "Viktor", age: 12 },
  { id: 5, name: "Mike", age: 63 }
];

const adults = users.filter(({ age }) => age >= 18);

const names = adults.map(({ name }) => name);

const avgAge = adults.reduce((sum, { age }, _, arr) => sum + age / arr.length, 0);

console.log(adults); 
console.log(names); 
console.log(avgAge); 

const product = {
  id: 101,
  title: "Laptop",
  specs: {
    cpu: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD"
  },
  price: 1200
};


const {
  title,
  specs: { cpu, ram },
  price
} = product;

console.log(`${title} має ${cpu} та ${ram}, ціна: $${price}`);

const baseSettings = {
  theme: "light",
  language: "uk",
  notifications: true
};

const userSettings = {
  theme: "dark",
  notifications: false
};


const finalSettings = { ...baseSettings, ...userSettings };

console.log(finalSettings);
