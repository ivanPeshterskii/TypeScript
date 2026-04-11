function checkIsEvenSum(numberOne: number, numberTwo: number, numberThree: number): boolean {

    let sum: number = numberOne + numberTwo + numberThree;

    if(sum % 2 !== 0) {
        return false;
    }

    return true;
}

const checker = checkIsEvenSum(1, 2, 3);

console.log(checker);