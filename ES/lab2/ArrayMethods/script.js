var fruits = ["apple", "strawberry", "banana", "orange", "mango"];


console.table(fruits.every((fruit) => {
    return typeof fruit === "string";
  })); 


console.log(fruits.some((fruit) => fruit.startsWith("a"))); 


let filtered = fruits.filter((fruit) => fruit.startsWith("b") || fruit.startsWith("s"));
console.table(filtered);


let likedFruits = fruits.map((fruit) => `I like ${fruit}`);
console.table(likedFruits); 


likedFruits.forEach((fruit) => document.write(`<br> ${fruit}`));