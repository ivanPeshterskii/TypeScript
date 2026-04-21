class Box<T> {
    items: T[] = [];

    add(element: T) {
        this.items.push(element);
    }

    swap(first: number, second: number) {
        let temp = this.items[first]!;
        this.items[first] = this.items[second]!;
        this.items[second] = temp;
    }

    print() {
        for (let item of this.items) {
            console.log(`${typeof item}: ${item}`);
        }
    }
}

let box = new Box<string>();

box.add("Pesho");
box.add("Gosho");
box.add("Maria");

box.swap(0, 2);

box.print();