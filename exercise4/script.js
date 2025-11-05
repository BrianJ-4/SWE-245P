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

// Part Three *************************************

let p1, p2;

function setup() {
  createCanvas(500, 500);
  p1 = new Particle(300, 300);
  p2 = new Box(300, 300);
  p3 = new Arc(100, 200);
  p4 = new Line(200, 100, 300, 300)
}

function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
  p3.update();
  p3.show();
  p4.update();
  p4.show();
}
