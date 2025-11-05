// Part One *************************************

const books = [
    {title: 1984, author: "George Orwell"},
    {title: "In Search of Lost Time", author: "Marcel Proust"},
    {title: "Don Quixote", author: "Miguel de Cervantes"},
    {title: "Moby Dick", author: "Herman Melville"}
];

function print_books_without_orwell() {
    console.log(books.filter((book) => book.author != "George Orwell"));
}

function print_books_without_orwell_and_melville() {
    console.log(books.filter((book) => book.author != "George Orwell" && book.author != "Herman Melville"));
}
