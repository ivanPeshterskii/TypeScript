function printMessage(input: string | string[]) {
    console.log(input.length);

    if(typeof input === 'string') {
        console.log(input);
    } else {
        console.log(input.join(' '));
    }
}
printMessage('pen4o');
printMessage(['pen4o']);