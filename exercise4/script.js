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

print_books_without_orwell()

print_books_without_orwell_and_melville()

// Part Two *************************************

function change_color() {
    document.getElementById("content").style.color = "blue";
}

function change_text() {
    document.getElementById("content").innerHTML = "Bye-Bye World!"
}

