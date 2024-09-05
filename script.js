const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return(`${title} by ${author}, ${pages} pages, ${read}` );
    }

}

Book.prototype.toggleRead = function() {
    this.read = (this.read === "read") ? "not read" : "read";
    
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}



function displayBooks() {
    let library = document.getElementsByClassName("library")[0];
    library.innerHTML = "";

    
    for (let i =0; i < myLibrary.length; i++) {
        let bookItem = document.createElement("li");
        bookItem.classList.add("book");

        let title = document.createElement("p");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        let read = document.createElement("button");
        let deleteBtn = document.createElement("button");

        title.textContent = myLibrary[i].title;
        author.textContent = `Author: ${myLibrary[i].author}`;
        pages.textContent = `Pages: ${myLibrary[i].pages}`;
        read.textContent = `${myLibrary[i].read}`;

        deleteBtn.textContent = "Remove";
        deleteBtn.classList.add("deleteBtn")
        deleteBtn.setAttribute("data-index", i);



        library.appendChild(bookItem);
        bookItem.appendChild(title);
        bookItem.appendChild(author);
        bookItem.appendChild(pages);
        bookItem.appendChild(read);
        bookItem.appendChild(deleteBtn);
 
        ///remove book

        deleteBtn.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            removeBook(index);
        });

        let book = myLibrary[i];

        read.addEventListener("click", (event) => {
            book.toggleRead();
            read.textContent = book.read;

        } )
    }
}

const book1 = new Book("poo", "pooman", 12, "not read");
addBookToLibrary(book1);
const book2 = new Book("booklolz", "authorlolz", 20, "read");
addBookToLibrary(book2);
const book3 = new Book("bog book of lies", "bog", 100, "read");
addBookToLibrary(book3);
displayBooks();


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
    addBookToLibrary(newBook);
    displayBooks();

    addDialog.close();

})

cancelBtn.addEventListener("click", () => {
    addDialog.close();
})




const removeBook = function (index) {
    myLibrary.splice(index, 1);
    displayBooks();

}
