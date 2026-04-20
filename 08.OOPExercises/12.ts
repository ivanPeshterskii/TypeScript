class Task {
    titile: string;
    description: string;
    completed: boolean;

    private createdBy: string;

    get createdByUser(): string {
        return this.createdBy;
    }

    constructor(title: string, description: string, createdBy: string) {
        this.titile = title;
        this.description = description;
        this.completed = false;
        this.createdBy = createdBy;
    }

    toggleStatus() : void {
        this.completed = !this.completed;
    }

    getDetails(): string {
        return `Task: ${this.titile} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`;
    }

    static createSimpleTAsk() : Task[] {
        return [
            new Task('Task 1', 'Description for task 1', 'User A'),
            new Task('Task 2', 'Description for task 2', 'User B'),
            new Task('Task 3', 'Description for task 3', 'User C')
        ];
    }

}

const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
task1.toggleStatus();
console.log(task1.getDetails());