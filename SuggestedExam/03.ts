interface Storable {
    id: number;
    name: string;
    quantity: number;
}

class StorageManager<T extends Storable> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
        console.log(`${item.name} added.`);
    }

    removeItem(id: number): void {
        const index = this.items.findIndex(x => x.id === id);

        if (index !== -1) {
            const removed = this.items[index];
            this.items.splice(index, 1);
            console.log(`${removed!.name} removed.`);
        }
    }

    getItem(id: number): void {
        const item = this.items.find(x => x.id === id);

        if (item) {
            console.log(`Item found: ${item.name}, quantity: ${item.quantity}`);
        }
    }

    printItems(): void {
        for (const item of this.items) {
            console.log(`${item.id}. ${item.name} - ${item.quantity}`);
        }
    }
}

function storageSystem(input: string[]): void {
    const storage = new StorageManager<Storable>();

    for (const line of input) {
        const tokens = line.split("|");
        const command = tokens[0]!;

        if (command === "Add") {
            storage.addItem({
                id: Number(tokens[1]!),
                name: tokens[2]!,
                quantity: Number(tokens[3]!)
            });
        }

        else if (command === "Remove") {
            storage.removeItem(Number(tokens[1]!));
        }

        else if (command === "Get") {
            storage.getItem(Number(tokens[1]!));
        }

        else if (command === "Print") {
            storage.printItems();
        }

        else if (command === "End") {
            break;
        }
    }
}
storageSystem([
    "Add|1|Laptop|5",
    "Add|2|Mouse|20",
    "Add|3|Keyboard|10",
    "Remove|2",
    "Get|1",
    "Print",
    "End"
]);