import {
    coffeeStock,
    isCoffeeMakerReady
} from "./state.js";


const displayStock = stock => {
    const coffeeStockListElement = document.querySelector("#coffee-stock-list");
    for (const type in stock) {
        const coffeeStockItemElement = document.createElement("li");
        coffeeStockItemElement.innerText = `${type}: ${stock[type]}`;
        coffeeStockListElement.appendChild(coffeeStockItemElement);
    }
}

const coffeeOrder = (type, miligrams) => {
    return new Promise((resolve, reject) => {
        if (isCoffeeMakerReady) {
            if (coffeeStock[type] >= miligrams) {
                resolve('Kopi berhasil dipesan')
            } else {
                reject('Maaf stok kopi habis')
            }
        } else {
            reject('Maaf stok kopi habis')
        }
    })
}

const coffeeOrderButtonEventHandler = async event => {
    const type = prompt('Mau kopi apa ?')
    const miligrams = prompt('Berapa mili')
    try {
        const result = await coffeeOrder(type, miligrams)
        alert(result)
    } catch (rejectionReason) {
        alert(rejectionReason)
    }
}


const coffeeOrderButtonElement = document.querySelector('#coffee-order-button')
coffeeOrderButtonElement.addEventListener('click', coffeeOrderButtonEventHandler)

displayStock(coffeeStock);