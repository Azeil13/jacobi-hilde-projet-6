// Function to initialize the page
function initializePage() {
  const addButton = document.createElement("button");
  addButton.id= "buttonAddBook";
  addButton.textContent = "Ajouter un livre";
  addButton.addEventListener("click", showSearchForm);
  addButton.classList.add("btn_add");  // adds CSS class "btn_add" to addButton element (the button with the text  "Ajouter un livre".) 
  const hr = document.querySelector("hr"); //This line selects the first <hr> element in the document and stores it in the variable hr. The <hr> tag in HTML index.html file represents an horizontal rule on the webpage, used it for visual separation.
  const parentNodeHr= hr.parentElement;  //  retrieves the parent element of the <hr> element and assigns it to the variable parentNodeHr. 
  parentNodeHr.insertBefore(addButton,hr);  // inserts the addButton element ( that is the button with the text  "Ajouter un livre") before the hr element within the parentNodeHr. => so  addButton will be positioned just before the horizontal rule (<hr>).
}

// Function to show the search form
function showSearchForm() {
  const addButton = document.getElementById("buttonAddBook"); // get button by id with content "Ajouter un livre"
  addButton.remove();  // remove button with content " Ajouter un livre"
 
  // Implement your code to show the search form here
  // This function will be called when the "Add book" button is clicked
    const contentDiv = document.getElementById("content");
  
    // Create the search form elements
    const form = document.createElement("form");
  
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Titre du livre ";
  
    

    const titleInput = document.createElement("input");
    titleInput.classList.add("input_search"); /* adds class "input_search"*/
    titleInput.setAttribute("type", "text");
    titleLabel.appendChild(titleInput);
    
  
    const authorLabel = document.createElement("label");
    authorLabel.textContent = "Auteur ";
    
    
    const authorInput = document.createElement("input");
    authorInput.classList.add("input_search");
    authorInput.setAttribute("type", "text");
    authorLabel.appendChild(authorInput);
  
    const searchButton = document.createElement("button");
    searchButton.textContent = "Rechercher";
   
  
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Annuler";
    cancelButton.classList.add("btn_cancel");  // add  class "btn_cancel" to addButton element (the button with the text  "Annuler".) 
  


  
    

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

    // Add an event listener for  the "Annuler" button, 
    //which removes the form, clears the search results, and re-inserts the "Ajouter un livre" button when clicked.
    cancelButton.addEventListener("click", function () {
      form.remove(); // Remove the form
      contentDiv.innerHTML = ""; // Clear the search results
      contentDiv.insertAdjacentElement("beforebegin", addButton); // Re-insert the "Add a book" button
    });

    
  

    
    // Add the form elements to the contentDiv
    form.appendChild(titleLabel);
    form.appendChild(document.createElement("br")); // Add a line break between the title label “Titre du livre”and the author label “Auteur”
    form.appendChild(authorLabel);
    form.appendChild(document.createElement("br")); // Add a line break between the title label “Auteur ”and the button with the text  “Auteur”
    form.appendChild(searchButton);
    form.appendChild(document.createElement("br")); // Add a line break between the searchButton with the text "Rechercher" and the cancelButton with the text "Annuler"
    form.appendChild(cancelButton);  //Add line for appending the cancelButton to the form ( // add line,so add the button with text "Annuler" to the search form (It appends the cancelButton element as a child of the form element, which means that the "Annuler" button will be displayed inside the form alongside the other form elements such as the input fields and the "Rechercher" button.)
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



  // Function to display the search results
  //The displaySearchResults function is responsible for rendering the search results on the page. 
  //This function takes the results array as a parameter, which contains the search results obtained from the Google Books API. It iterates over each result and creates a container (bookContainer) for each book. Inside the container, it creates and appends the elements for the book's ID, title, author, bookmark icon, description, and image.
  function displaySearchResults(results) {
    const contentDiv = document.getElementById("content");
    const resultsDiv = document.createElement("div");
  
    if (results && results.length > 0) {
      results.forEach(result => {
        const bookId = result.id;
        const bookTitle = result.volumeInfo.title;
        const bookAuthor = result.volumeInfo.authors ? result.volumeInfo.authors[0] : "Unknown Author";
        const bookDescription = result.volumeInfo.description ? result.volumeInfo.description.substring(0, 200) : "Information manquante";
        const bookImage = result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail : "unavailable.png";
  
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book-container");
  
        const bookIdElement = document.createElement("p");
        bookIdElement.textContent = `Identifiant: ${bookId}`;
        bookContainer.appendChild(bookIdElement);
  
        const bookTitleElement = document.createElement("p");
        bookTitleElement.textContent = `Titre: ${bookTitle}`;
        bookContainer.appendChild(bookTitleElement);
  
        const bookAuthorElement = document.createElement("p");
        bookAuthorElement.textContent = `Auteur: ${bookAuthor}`;
        bookContainer.appendChild(bookAuthorElement);
  
        const bookmarkIcon = document.createElement("span");
        bookmarkIcon.textContent = "Bookmark Icon"; // Replace with the actual bookmark icon element
        const bookmarkImage = document.createElement("img"); // Create an <img> element
        bookmarkImage.src = "C:\\Users\\hilde\\OneDrive\\Desktop\\Openclassroom -Project 6\\pochLib\\asset\\images\\bookmark.png"; // Set the image source
        bookmarkIcon.appendChild(bookmarkImage); // Append the image element to the bookmarkIcon span
        bookmarkIcon.addEventListener("click", function() {
          const bookData = {
            id: bookId,
            title: bookTitle,
            author: bookAuthor,
            description: bookDescription,
            image: bookImage
          };
          addToPochList(bookData);
        });
        bookContainer.appendChild(bookmarkIcon);
  
        
        const deleteIcon = document.createElement("span");
        deleteIcon.textContent = "Delete Icon"; // Replace with the actual delete icon element
        deleteIcon.addEventListener("click", function() {
        removeFromPochList(bookId);
        });
        bookContainer.appendChild(deleteIcon);


        const bookDescriptionElement = document.createElement("p");
        bookDescriptionElement.textContent = `Description: ${bookDescription}`;
        bookContainer.appendChild(bookDescriptionElement);
  
        const bookImageElement = document.createElement("img");
        bookImageElement.src = bookImage;
        bookContainer.appendChild(bookImageElement);
  
        resultsDiv.appendChild(bookContainer);
      });
    } else {
      resultsDiv.textContent = "Aucun livre n'a été trouvé.";
    }
  
    // Clear the existing content and display the search results
    contentDiv.innerHTML = "";
    contentDiv.appendChild(resultsDiv);
  }



// Function to add book to user's poch'list
//The function addToPochList(bookData) is responsible for adding a book to the user's poch'liste 
//(list of books to read). 
//It takes the bookData object as a parameter, which contains the information of the book to be added.
function addToPochList(bookData) {
    const pochList = sessionStorage.getItem("pochList");
    const pochListArray = pochList ? JSON.parse(pochList) : [];
    const duplicateBook = pochListArray.find(book => book.id === bookData.id);
  
    if (duplicateBook) {
      alert("Vous ne pouvez ajouter deux fois le même livre.");
    } else {
      pochListArray.push(bookData);
      sessionStorage.setItem("pochList", JSON.stringify(pochListArray));
      displayPochList();
    }
  }




function displayPochList() {
    const pochList = sessionStorage.getItem("pochList");
    const contentDiv = document.getElementById("content");
    const pochListDiv = document.createElement("div");
  
    if (pochList && pochList.length > 0) {
      const pochListArray = JSON.parse(pochList);
      pochListArray.forEach(book => {
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book-container");
  
        const bookIdElement = document.createElement("p");
        bookIdElement.textContent = `Identifiant: ${book.id}`;
        bookContainer.appendChild(bookIdElement);
  
        const bookTitleElement = document.createElement("p");
        bookTitleElement.textContent = `Titre: ${book.title}`;
        bookContainer.appendChild(bookTitleElement);
  
        const bookAuthorElement = document.createElement("p");
        bookAuthorElement.textContent = `Auteur: ${book.author}`;
        bookContainer.appendChild(bookAuthorElement);
  
        const bookDescriptionElement = document.createElement("p");
        bookDescriptionElement.textContent = `Description: ${book.description}`;
        bookContainer.appendChild(bookDescriptionElement);
  
        const bookImageElement = document.createElement("img");
        bookImageElement.src = book.image;
        bookContainer.appendChild(bookImageElement);
  
        pochListDiv.appendChild(bookContainer);
      });
    } else {
      pochListDiv.textContent = "La poch'liste est vide.";
    }
  
    // Clear the existing content and display the poch'liste
    contentDiv.innerHTML = "";
    contentDiv.appendChild(pochListDiv);
  }

  


  
localStorage.setItem("1234FR","TOTO");
// Call the initializePage function when the page is loaded
document.addEventListener("DOMContentLoaded", initializePage);
