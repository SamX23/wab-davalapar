// Ibarat
// (Synchronous) Kita tetap menunggu di meja hingga kopi itu datang
// dan kemudian meninggalkan kedai kopi.
// (Asynchronous) Kita meminta tolong kepada teman kita untuk menerima
// kopi itu, dan bertemu nanti untuk memberikan kopinya.Sehingga kita tidak perlu menunggu untuk meninggalkan kedai kopi.


// sync
// 1
console.log("Selamat datang!");
// 2
console.log("Terimakasih sudah mampir, silakan datang kembali!")
// 3
console.log("Ada yang bisa dibantu?")

// async
// 1
console.log("Selamat datang Async!");
// 2 tapi muncul terakhir
setTimeout(() => {
    console.log("Terimakasih sudah mampir Async, silakan datang kembali!")
}, 3000)
// 3 tapi muncul setelah no 1
console.log("Ada yang bisa dibantu Async?")