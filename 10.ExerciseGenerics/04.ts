function conditionalNumber<T>(value: T): T {
    if(typeof value === 'number') {
        return value.toFixed(2) as unknown as T;
    } 
    return value;
}

console.log(conditionalNumber<number>(20.3555));
console.log(conditionalNumber<string>('wow'));
console.log(conditionalNumber<boolean>('s string' as unknown as boolean));
