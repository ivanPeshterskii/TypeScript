function Logger(constructor: Function) {
    console.log("Logging...");
}

@Logger
class Person {
    name = 'Ivan';
}