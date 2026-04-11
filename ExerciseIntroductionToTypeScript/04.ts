function makeArray(array: string[]): [string, number] {
    const joinedArray = array.join('');
    const count = joinedArray.length;

    return [joinedArray, count];
}
console.log(makeArray(['How', 'are', 'you?']));
console.log(makeArray(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));