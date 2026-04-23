function LogMethod(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function () {
        console.log("Method called");
        originalMethod();
    };
}

class Programmer {
    @LogMethod
    code() {
        console.log("Coding...");
    }
}

const p = new Programmer();
p.code();