let myName = "Bun";

function greeting(name: string) {
    console.log(`Hi, ${name}`);
}

greeting(myName);

class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    greeting() {
        console.log(`Hello, ${this.name}`);
    }
}

const person = new Person(myName);
person.greeting();