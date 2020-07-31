const hobbies = ['coding', 'gaming', 'photography', 'cycling']

const [
    first,
    second,
    third,
    fourth
] = hobbies

console.log(first, third, fourth);

// destructuring assignment
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

console.log(myFood);
console.log(herFood);

[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);