class User {
    private _username: string;

    constructor(username: string) {
        this._username = username;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        if (!value || value.length < 3) {
            throw new Error('Username must be at least 3 characters long');
        }

        this._username = value;
    }
}

try {
    const user = new User("Martin");

    user.username = "johnDoe";

    console.log(user.username);
} catch (error) {
    console.log(error);
}