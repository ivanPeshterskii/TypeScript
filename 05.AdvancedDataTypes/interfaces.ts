interface IPerson {
    fullName: string,
    age: number,
    greet(fullName: string, age: number): void;
};

class Person implements IPerson {
    public fullName;
    public age;

    constructor(fn: string, a: number) {
        this.fullName = fn;
        this.age = a;
    }

    greet(fullName: string, age: number): void {
        console.log(`Hi ${this.fullName} your age is ${this.age}`);
    }
}