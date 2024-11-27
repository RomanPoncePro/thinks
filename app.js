const myLibrery = [];
const btn = document.querySelector('button');
const list = document.querySelector('ul');
const table = document.querySelector('table');


function Book(title,author,pages){
    this.title =  title;
    this.author =  author;
    this.pages = pages;
    this.show = () => `Title ${this.title} Author ${this.author} Apginas ${this.pages}`;
}

btn.addEventListener("click",addBookToLibrary);

function addBookToLibrary(){
    event.preventDefault();

    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    const pages = document.querySelector(".pages").value;
    const book = new Book(title,author,pages);
    myLibrery.push(book);
    showBookOnTable(book) 
    
    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    document.querySelector(".pages").value = "";
}

function showBookOnTable(book){
    const row = document.createElement('tr');
    const titleRow = document.createElement('td');
    const authorRow = document.createElement('td');
    const pagesRow = document.createElement('td');

    titleRow.textContent = book.title;
    authorRow.textContent = book.author;
    pagesRow.textContent = book.pages;
    
    row.appendChild(titleRow);
    row.appendChild(authorRow);
    row.appendChild(pagesRow);

    table.appendChild(row);
}



