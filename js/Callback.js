// Callback digunakan untuk mendapatkan dari asynchronous function
const getCake = () => {
    let cake = null;
    console.log("Sedang membuat kue, silakan tunggu ....")
    setTimeout(() => {
        cake = "Kue Selesai!"
    }, 3000)
    return cake;
}

const cake = getCake();
console.log(cake);

// Callback Hell
// Tahapan membuat kue:
// - Mempersiapkan bahan
// - Membuat adonan
// - Menyiapkan adonan ke cetakan
// - Memanggang adonan

// syncronous example
const rawIngredients = []

function makeACake(...rawIngredients) {
    const ingredients = gatheringIngredients(rawIngredients),
        dough = makeTheDough(ingredients),
        pouredDough = pourDough(dough),
        cake = bakeACake(pourDough);
    console.log(cake);
}

// asyncronous using callback hell (not recomended)
function makeACake(...rawIngredients) {
    gatheringIngredients(rawIngredients, function (ingredients) {
        makeTheDough(ingredients, function (dough) {
            pourDough(dough, function (pouredDough) {
                bakeACake(pouredDough, function (cake) {
                    console.log(cake);
                });
            });
        });
    });
}
// recomended version yaitu promise
function makeACake(...rawIngredients) {
    gatheringIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}