


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}` );
    }

    toggleRead() {
        this.read = (this.read === "read") ? "not read" : "read";
    }
}



class Library {
    constructor() {
        this.myLibrary = [];
    }

    addBook(book) {
        this.myLibrary.push(book);
    }

    removeBook(index) {
        this.myLibrary.splice(index, 1);
        this.displayBooks();

    }

    displayBooks() {
        const library = document.getElementsByClassName("library")[0];
        library.innerHTML = "";

        this.myLibrary.forEach((book, index) => {
            let bookItem = document.createElement("li");
            bookItem.classList.add("book");

            let title = document.createElement("p");
            let author = document.createElement("p");
            let pages = document.createElement("p");
            let read = document.createElement("button");
            let deleteBtn = document.createElement("button");

            title.textContent = book.title;
            author.textContent = `Author: ${book.author}`;
            pages.textContent = `Pages: ${book.pages}`;
            read.textContent = `${book.read}`;

            deleteBtn.textContent = "Remove";
            deleteBtn.classList.add("deleteBtn")
            deleteBtn.setAttribute("data-index", index);



            library.appendChild(bookItem);
            bookItem.appendChild(title);
            bookItem.appendChild(author);
            bookItem.appendChild(pages);
            bookItem.appendChild(read);
            bookItem.appendChild(deleteBtn);

            deleteBtn.addEventListener("click", () => {
                this.removeBook(index);
            });

            read.addEventListener("click", () => {
                book.toggleRead();
                read.textContent = book.read;
            })
        })
    }
}


//instantiate library
const library = new Library();

library.addBook(new Book("myBook", "an author", 12, "not read"));
library.addBook(new Book("booklolz", "authorlolz", 20, "read"));
library.addBook(new Book("terrible book", "bog", 100, "read"));


library.displayBooks();


////add book dialog

const showButton = document.getElementById("add-book");
const addDialog = document.getElementById("add-new-book");
const confirmBtn = addDialog.querySelector("#confirmBtn");
const cancelBtn = addDialog.querySelector("#closeBtn")


//open modal

showButton.addEventListener("click", () => {
    addDialog.showModal();
})

//add new book

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const newTitle = document.getElementById("title").value;
    const newAuthor = document.getElementById("author").value;
    const newPages = document.getElementById("pages").value;
    const newRead = document.getElementById("read").value; 

    const newBook = new Book(newTitle, newAuthor, newPages, newRead);
    library.addBook(newBook);
    library.displayBooks();

    addDialog.close();

})

cancelBtn.addEventListener("click", () => {
    addDialog.close();
})


///mine