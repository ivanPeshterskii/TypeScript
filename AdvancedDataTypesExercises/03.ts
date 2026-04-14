function optional(
    valueOne?: string | number,
    valueTwo?: string | number,
    valueThree?: string | number
): number {
    let realValues = [valueOne, valueTwo, valueThree]
    .filter(v => v !== undefined)
    .map(Number);

    if(realValues.length === 0) {
        return 1;
    }

    return realValues.reduce((accurance, value) => accurance * value);

}
console.log(optional(5, 5, 5));
