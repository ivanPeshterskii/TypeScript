type Book = {
    title: string;
    author: string;
    year: number;
    isBorrowed: boolean;
};

function libraryInventory(input: string[]): void {
    const books: Book[] = [];
    const initialCount = Number(input[0]);

    let index = 1;

    for (let i = 0; i < initialCount; i++) {
        const data = input[index]!.split("|");

        books.push({
            title: data[0]!,
            author: data[1]!,
            year: Number(data[2]!),
            isBorrowed: false
        });

        index++;
    }

    while (index < input.length) {
        const tokens = input[index]!.split("|");
        const command = tokens[0]!;

        if (command === "Add") {
            const title = tokens[1]!;
            const author = tokens[2]!;
            const year = Number(tokens[3]!);

            books.push({
                title,
                author,
                year,
                isBorrowed: false
            });

            console.log(`${title} added.`);
        } else if (command === "Remove") {
            const title = tokens[1]!;
            const bookIndex = books.findIndex(book => book.title === title);

            if (bookIndex !== -1) {
                books.splice(bookIndex, 1);
                console.log(`${title} removed.`);
            }
        } else if (command === "Borrow") {
            const title = tokens[1]!;
            const book = books.find(book => book.title === title);

            if (book !== undefined && book.isBorrowed === false) {
                book.isBorrowed = true;
                console.log(`You borrowed ${title}.`);
            }
        } else if (command === "Return") {
            const title = tokens[1]!;
            const book = books.find(book => book.title === title);

            if (book !== undefined && book.isBorrowed === true) {
                book.isBorrowed = false;
                console.log(`You returned ${title}.`);
            }
        } else if (command === "Print") {
            for (const book of books) {
                if (book.isBorrowed === false) {
                    console.log(`${book.title} by ${book.author} - ${book.year}`);
                }
            }
        }

        index++;
    }
}
libraryInventory([
    "3",
    "The Hobbit|J.R.R. Tolkien|1937",
    "Dune|Frank Herbert|1965",
    "1984|George Orwell|1949",
    "Borrow|Dune",
    "Add|Clean Code|Robert Martin|2008",
    "Return|Dune",
    "Remove|1984",
    "Print"
]); 