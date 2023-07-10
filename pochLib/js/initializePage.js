// Function to initialize the page
function initializePage() {
    const addButton = document.createElement("button");
    addButton.textContent = "Ajouter un livre";
    addButton.addEventListener("click", showSearchForm);
  
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(addButton);
  
  }
  
  // Function to show the search form
  function showSearchForm() {
    // Implement your code to show the search form here
    // This function will be called when the "Add book" button is clicked
      const contentDiv = document.getElementById("content");
    
      // Create the search form elements
      const form = document.createElement("form");
    
      const titleLabel = document.createElement("label");
      titleLabel.textContent = "Book title:";
      const titleInput = document.createElement("input");
      titleInput.setAttribute("type", "text");
      titleLabel.appendChild(titleInput);
    
      const authorLabel = document.createElement("label");
      authorLabel.textContent = "Author:";
      const authorInput = document.createElement("input");
      authorInput.setAttribute("type", "text");
      authorLabel.appendChild(authorInput);
    
      const searchButton = document.createElement("button");
      searchButton.textContent = "Search";
    
      // Add an event listener for the form submission
      form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from being submitted
    
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
    
        if (title !== "" || author !== "") {
          performSearch(title, author); // Call the function to perform the search
        } else {
          alert("Please enter a book title or author.");
        }
      });
    
      // Add the form elements to the contentDiv
      form.appendChild(titleLabel);
      form.appendChild(authorLabel);
      form.appendChild(searchButton);
      contentDiv.appendChild(form);
    }
    
    function performSearch(title, author) {
      const API_KEY = "AIzaSyAWiXReAnqz2GKCD2OyAd8KmNU15r93Jo4"; // Replace with my actual API key
      const searchQuery = `intitle:${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author)}`;
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${API_KEY}`;
    
      // Perform the API request
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Process the response data
          displaySearchResults(data.items);
        })
        .catch(error => {
          console.error("Error fetching search results:", error);
        });
    }
    
    function displaySearchResults(results) {
      const contentDiv = document.getElementById("content");
      const resultsDiv = document.createElement("div");
    
      if (results && results.length > 0) {
        results.forEach(result => {
          const bookTitle = result.volumeInfo.title;
          const bookAuthor = result.volumeInfo.authors ? result.volumeInfo.authors.join(", ") : "Unknown Author";
          const bookInfo = document.createElement("p");
          bookInfo.textContent = `${bookTitle} by ${bookAuthor}`;
          resultsDiv.appendChild(bookInfo);
        });
      } else {
        resultsDiv.textContent = "No results found.";
      }
    
      // Clear the existing content and display the search results
      contentDiv.innerHTML = "";
      contentDiv.appendChild(resultsDiv);
    }
  
  
  
  localStorage.setItem("1234FR","TOTO")
  // Call the initializePage function when the page is loaded
  document.addEventListener("DOMContentLoaded", initializePage);
  