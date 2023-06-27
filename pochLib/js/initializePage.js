// Function to initialize the page
function initializePage() {
    const addButton = document.createElement("button");
    addButton.textContent = "Add book";
    addButton.addEventListener("click", showSearchForm);
  
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(addButton);
  
    // Check if books are registered
    const books = getRegisteredBooks();
    if (books.length > 0) {
      displayBooks(books);
    }
  }
  
  // Function to show the search form
  function showSearchForm() {
    // Implement your code to show the search form here
    // This function will be called when the "Add book" button is clicked
    console.log("nous recherchons un livre" )
  }
  
  // Function to get registered books
  function getRegisteredBooks() {
    // Implement your code to fetch registered books from storage or an API
    // Return the list of registered books
    return [
      { title: "Book 1", author: "Author 1" },
      { title: "Book 2", author: "Author 2" },
      { title: "Book 3", author: "Author 3" }
    ];
  }
  
  // Function to display registered books
  function displayBooks(books) {
    const contentDiv = document.getElementById("content");
  
    const bookList = document.createElement("ul");
    books.forEach(book => {
      const listItem = document.createElement("li");
      listItem.textContent = book.title + " by " + book.author;
      bookList.appendChild(listItem);
    });
  
    contentDiv.appendChild(bookList);
  }
  
  // Call the initializePage function when the page is loaded
  document.addEventListener("DOMContentLoaded", initializePage);
  