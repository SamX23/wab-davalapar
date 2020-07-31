// arrow function in variable
const sayName = name => console.log(`Saya adalah ${name}`);

sayName('Sami');

// as argument
["Sami", "Rifka", "Azzura"].forEach(name => console.log(`Nama saya ${name}`));

// object property
const user = {
    introduce: name => console.log(`Nama saya ${name}`)
}

user.introduce('SamX23')

function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

// menambahkan introMyself ke People
People.prototype.introMyself = function () {
    // this -> People
    setTimeout(() => {
        // this -> People
        console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
        console.log(`Hobby saya adalah ${this.hobby}`)
    }, 300)
}

const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
programmer.introMyself();

// default parameter
const bismillah = (hai = 'bimsillah') => console.log(`${hai} Sami !`);

bismillah()
bismillah('Assalamu\'alaikum')