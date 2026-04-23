function PrintProperty(target: any, propertyName: string) {
    console.log(target);
    console.log(propertyName);
}

class User {
    @PrintProperty
    name: string = 'Ivan';
}