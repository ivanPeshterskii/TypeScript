interface CountableSet<T> {
    
    add(item: T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {

    private set: Map<T, number>;
    private counter: number;

    constructor() {
        this.set = new Map();
        this.counter = 0;
    }
    add(item: T): void {

        if(!this.set.has(item)) {
            this.set.set(item, 1);
        } else {
            this.set.set(item, this.set.get(item)! + 1);
        }
    }

    remove(item: T): void {
        if(!this.set.has(item) || this.set.get(item) === 0) {
            return;
        }
        this.set.set(item, this.set.get(item)! - 1) ;
    }

    contains(item: T): boolean {
        if(this.set.has(item) && this.set.get(item)! > 0) {
            return true;
        }
        return false;
    }

    getNumberOfCopies(item: T): number {
        const currentCount = this.set.get(item);
        return currentCount ?? 0;
    }

}

let countedSet = new CountedSet<string>();
countedSet.add('test');
countedSet.add('test');
console.log(countedSet.contains('test'));
console.log(countedSet.getNumberOfCopies('test'));
countedSet.remove('test');
countedSet.remove('test');
countedSet.remove('test');
console.log(countedSet.getNumberOfCopies('test'));
console.log(countedSet.contains('test'));