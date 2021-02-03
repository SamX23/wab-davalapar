// hindari var
// gunakan let
// gunakan const untuk angka yang tetap > contoh pada for
let Arr = ["coklat", "susu", "keju"];
console.log(Arr);
console.log(" ");
console.log(" ");

let user = {
  name: { first: "Sami", last: "Kalammallah" },
  age: 20,
  hobbies: ["Learning", "Fatherling", "Pray", "Parenting", "Gaming", "Cycling"],
};

console.log(
  "Halo, saya " +
    user.name.first +
    " " +
    user.name.last +
    " " +
    "My Hobbies are " +
    user.hobbies[2]
);
console.log(" ");
console.log(" ");

// for loop old
for (let y = 0; y < 5; y++) {
  console.log(user.hobbies[y]);
}
console.log(" ");
console.log(" ");

// for loop latest
for (const x of user.hobbies) {
  console.log(x);
}

function helo() {
  console.log("Bismillah");
}
helo();

console.log(" ");
console.log(" ");

function greet(name, bahasa) {
  if (bahasa === "English") {
    console.log("Good Morning " + name + "!");
  } else if (bahasa === "Indonesia") {
    console.log("Halo " + name + "!");
  } else {
    console.log("Assalamu'alaikum " + name + "!");
  }
}
greet("Sami", "Islam");

// Global Scope Variable
x = 0;
// Global Scope Variable Too
let x = 0;

function scope() {
  // Local Scope Variable
  let y = 1;
}

const firstN = prompt("Nama depan?");
const lastN = prompt("Nama Belakang?");
const language = prompt("Ngomong naon?");

const user = {
  name: {
    first: firstN,
    second: lastN,
  },
  language: language,
};

if (user.language === "Inggris") {
  alert("Nice to see you " + user.name.first + " " + user.name.second + "!");
} else if (user.language === "Sunda") {
  alert("Wilujeng " + user.name.first + " " + user.name.second + "!");
} else {
  alert(
    "Ngomong naon sih ai ente " + user.name.first + " " + user.name.second + "!"
  );
}

