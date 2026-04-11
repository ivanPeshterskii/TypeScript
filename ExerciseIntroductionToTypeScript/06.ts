function unknownResponse(args: unknown) {
    if(
        typeof args === 'object' &&
        args !== null &&
        'value' in args && 
        typeof args['value'] === 'string'
    ) {
        return args.value;
    } else {
        return '-';
    }
}
console.log(unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));