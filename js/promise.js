// Promise bisa melakukan asynchronous operation secara berantai
const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = false;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin Kopi tidak bisa digunakan!")
    }
}

const handlerSuccess = coffee => {
    console.log(coffee);
}

const handlerRejected = rejectionReason => {
    console.log(rejectionReason)
}

const makeCoffee = new Promise(executorFunction);
makeCoffee.then(handlerSuccess, handlerRejected);

// onRehected with Catch method
const makeCoffee = new Promise(executorFunction);
makeCoffee
    .then(handlerSuccess)
    .catch(handlerRejected);


// chaining promise > make a coffee
const state = {
    isCoffeeMakerReady: true,
    seedStocks: {
        arabica: 250,
        robusta: 60,
        liberica: 80
    }
}

const getSeeds = (type, miligrams) => {
    return new Promise((resolve, reject) => {
        if (state.seedStocks[type] >= miligrams) {
            state.seedStocks[type] -= miligrams;
            resolve("Biji kopi didapatkan!")
        } else {
            reject("Maaf stock kopi habis!")
        }
    });
}

const makeCoffee = seeds => {
    return new Promise((resolve, reject) => {
        if (state.isCoffeeMakerReady) {
            resolve("Kopi berhasil dibuat!")
        } else {
            reject("Maaf mesin tidak dapat digunakan!");
        }
    })
}

const servingToTable = coffee => {
    return new Promise(resolve => {
        resolve("Pesanan kopi sudah selesai!")
    })
}

function reserveACoffee(type, miligrams) {
    getSeeds(type, miligrams)
        .then(makeCoffee)
        .then(servingToTable)
        .then(resolvedValue => {
            console.log(resolvedValue);
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
        })
}

/* Silakan ubah tipe kopi dan kuantitasnya, untuk mendapatkan promise rejection*/
reserveACoffee("liberica", 80);

// Promise All, melakukan semuanya secara berbarengan
const arabicaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Kopi arabika selesai!")
        }, 4000)
    })
}

const robustaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Kopi robusta selesai!")
        }, 2000)
    })
}

const libericaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Kopi liberica selesai!")
        }, 3000)
    })
}

// promise all melakukan semua object fungsi bersamaan dan berurutan dari paling awal
const promises = [arabicaOrder(), robustaOrder(), libericaOrder()];

Promise.all(promises)
    .then(resolvedValue => {
        console.log(resolvedValue);
    })

/* output:
[ 'Kopi arabika selesai!',
 'Kopi robusta selesai!',
 'Kopi liberica selesai!' ]
 */

//  async-await sync
// Keyword async digunakan untuk memberitahu JavaScript untuk 
// menjalankan fungsi makeCoffee() secara asynchronous.
// Lalu keyword await digunakan untuk menghentikan proses pembacaan
// kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai
// promise resolve.

const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Coffee didapatkan!");
            } else {
                reject("Biji kopi habis!")
            }
        }, 1000)
    })
}

// Jalankan secara async ( tidak mengganggu global )
async function makeCoffee() {
    // await getCoffee, pause perintah selanjutnya sampai promise selesai
    const coffee = await getCoffee();
    console.log(coffee);
}

makeCoffee();

// Handle onRejected
async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
makeCoffee();

// chaining promise using async-await
async function reserveACoffee(type, miligrams) {
    try {
        const seeds = await getSeeds(type, miligrams);
        const coffee = await makeCoffee(seeds);
        const result = await servingToTable(coffee);
        console.log(result);
    } catch (rejectionReason) {
        console.log(rejectionReason);
    }
}

reserveACoffee("liberica", 80);