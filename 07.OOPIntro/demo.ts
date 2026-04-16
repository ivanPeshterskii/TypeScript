const fullNameMAxLength: number = 10;

class Pearson {
    private _firstName: string;
    private _lastName: string;

    get firstName(): string {
        return this._firstName;
    }

    set fullNAme(newName: string) {
        if(newName && newName.length > fullNameMAxLength)  {
            throw new Error('Error');
        }
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(newName: string) {
        if(newName && newName.length > fullNameMAxLength)  {
            throw new Error('Error');
        }
    }

    constructor(firstNAme: string, lastNAme: string) {
        this._firstName = firstNAme;
        this._lastName = lastNAme;
    }

    greet() {
        return `Hi ${this.firstName} ${this.lastName}`
    }
}

try {
    const person = new Pearson('John', 'Smith');
    console.log(person.greet());
} catch (error) {
    console.error(error);

}