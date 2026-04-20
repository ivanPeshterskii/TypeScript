class Calculator {

    calculate(operation: 'power', a: number, b: number): number;
    calculate(operation: 'log', a: number, b: number): number;
    calculate(operation: 'add' | 'subtract' | 'multiply' | 'divide', a: number, b: number, c?: number, d?: number): number;

    calculate(operation: string, a: number, b: number, c?: number, d?: number): number {

        let numbers = [a, b];

        if (c !== undefined) {
            numbers.push(c);
        }

        if (d !== undefined) {
            numbers.push(d);
        }

        switch (operation) {
            case 'power':
                return a ** b;

            case 'log':
                return Math.log(a) / Math.log(b);

            case 'add':
                return numbers.reduce((sum, x) => sum + x, 0);

            case 'subtract':
                return numbers.reduce((result, x, i) => i === 0 ? x : result - x);

            case 'multiply':
                return numbers.reduce((result, x) => result * x, 1);

            case 'divide':
                return numbers.reduce((result, x, i) => i === 0 ? x : result / x);

            default:
                throw new Error("Invalid operation");
        }
    }
}

// Example:
const calc = new Calculator();

console.log(calc.calculate('power', 2, 3));         
console.log(calc.calculate('log', 8, 2));          
console.log(calc.calculate('add', 10, 5, 3));      
console.log(calc.calculate('subtract', 10, 5));    
console.log(calc.calculate('multiply', 2, 3, 4));  
console.log(calc.calculate('divide', 100, 5, 2));  