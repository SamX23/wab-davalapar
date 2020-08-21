// Basic XHR js
const xhr = new XMLHttpRequest()

xhr.onload = function () {
    console.log(this.responseText);
}

xhr.onerror = function () {
    console.log("Oops something wrong!");
}

// URL to end point
xhr.open("GET", 'https://web-server-book-dicoding.appspot.com/list')
xhr.send()
// hasil akan begini di devtools
// {"error":false,"message":"success","books":[{"id":1,"title":"Laskar Pelangi","author":"Andrea Hirata"},{"id":2,"title":"Filosofi Kopi","author":"Dewi Lestari"},{"id":3,"title":"Clean Code","author":"Robert C Martin"},{"id":4,"title":"Harry Potter and the Philosopher's Stone","author":"J.K. Rowling"},{"id":6,"title":"Eloquent JavaScript: A Modern Introduction to Programming","author":"Marijn Haverbeke"}]}

xhr.open("POST", 'https://web-server-book-dicoding.appspot.com/add')

// Menambahkan properti pada header request
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Auth-Token", "12345")

const book = {
    id: 10,
    title: "Edensor",
    author: "Andrea Hirata"
}

// Mengirimkan data JSON String pada body request
xhr.send(JSON.stringify(book))

// ada 2 metode lebih cepat dan paling disarankan
// async/await
async function getBooks() {
    try {
        const response = await fetch("https://web-server-book-dicoding.appspot.com/list");
        const responseJson = await response.json();
        console.log(responseJson);
    } catch (error) {
        console.log(error);
    }
}

getBooks();

// Promise
fetch("https://web-server-book-dicoding.appspot.com/list")
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        console.log(responseJson);
    })
    .catch(error => {
        console.log(error);
    });

fetch("https://web-server-book-dicoding.appspot.com/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": "12345"
        },
        body: JSON.stringify({
            id: 10,
            title: "Edensor",
            author: "Andrea Hirata"
        })
    }).then(response => {
        return response.json();
    })
    .then(responseJson => {
        console.log(responseJson);
    })
    .catch(error => {
        console.log(error);
    });