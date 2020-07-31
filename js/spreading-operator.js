const car = ['Subaru', 'godzilla', 'Lancer', 'Supra MK']
console.log(...car);
const numbers = [12, 32, 90, 12, 32];

// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3])
console.log(Math.max(...numbers));

// gabung array
const combo = [...numbers, ...car]
console.log(combo);

// Rest parameter, sisa parameter atau gabungan parameter
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number
    }
    return result;
}
console.log(sum(10, 22, 31, 4, 50));

const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];
const [manufacture, weight, door, ...items] = refrigerator;

console.log(manufacture, weight);
console.log(items);