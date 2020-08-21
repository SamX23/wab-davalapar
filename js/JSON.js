const jsonSTR = {
    "error": false,
    "message": "success",
    "books": [{
            "id": 1,
            "title": "Laskar Pelangi",
            "author": "Andrea Hirata"
        },
        {
            "id": 2,
            "title": "Filosofi Kopi",
            "author": "Dewi Lestari"
        },
        {
            "id": 3,
            "title": "Clean Code",
            "author": "Robert C Martin"
        }
    ]
}


// Cara mengelola data json kedalam string
// 1. Dengan menggunakan JSON.parse
//    JSON dalam bentuk String menjadi objek JavaScript
const data = JSON.parse(jsonSTR)
data.books.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} (${book.author})`);
})

/* output
Daftar Buku:
1. Laskar Pelangi (Andrea Hirata)
2. Filosofi Kopi (Dewi Lestari)
3. Clean Code (Robert C Martin)
*/

// 2. Dengan menggunakan JSON.stringify()
//    JavaScript objek dalam bentuk JSON string.
const dataObj = {
    error: false,
    message: "success",
    books: [{
            "id": 1,
            "title": "Laskar Pelangi",
            "author": "Andrea Hirata"
        },
        {
            "id": 2,
            "title": "Filosofi Kopi",
            "author": "Dewi Lestari"
        },
        {
            "id": 3,
            "title": "Clean Code",
            "author": "Robert C Martin"
        }
    ]
};

const jsonString = JSON.stringify(dataObj);
console.log(jsonString);

/* output:
{"error":false,"message":"success","books":[{"id":1,"title":"Laskar Pelangi","author":"Andrea Hirata"},{"id":2,"title":"Filosofi Kopi","author":"Dewi Lestari"},{"id":3,"title":"Clean Code","author":"Robert C Martin"}]}
*/