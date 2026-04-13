type User = { 
    firstName: string;
    lastName: string;
};

type Address = {
    streetName: string;
    number: number;
};

const person: User & Address = {
    firstName: 'Pen4o',
    lastName: 'Min4ov',
    streetName: 'Sth',
    number: 46,
};

const user: User = {
    firstName: 'Ivan',
    lastName: 'Maleshevski',
}; // as const

type Point = { 
    X: number,
    Y: number,
    Z: number,
};

type PartialPoint = {
    [Key in keyof Point]?: Point[Key];
};