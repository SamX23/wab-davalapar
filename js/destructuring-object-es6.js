const user = {
    name: 'sami',
    last: 'kalammallah',
    age: 25
};

const {
    name,
    last,
    age
} = user

console.log(name, last, age);

// Assigning to Different Local Variable Names

const {
    name: newName,
    last: newLast,
    age: newAge
} = user
console.log(newName, newLast, newAge);