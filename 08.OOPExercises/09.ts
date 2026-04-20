abstract class Shape {
    color: string;
    abstract getArea(): number;

    constructor(color: string) {
        this.color = color;
    }
}

class Circle extends Shape {

    radius: number;

    constructor(color: string, radius: number) {
        super(color)
        this.radius = radius;
    }

    override getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle extends Shape {
    sideA: number;
    sideB: number;

    constructor(color: string, sideA: number, sideB: number) {
        super(color)

        this.sideA = sideA;
        this.sideB = sideB;
    }

    override getArea(): number {
        return 2 * (this.sideA + this.sideB);
    }
}

const circle = new Circle("red", 5);
console.log(circle.getArea());