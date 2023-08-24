// Function to initialize the page
function initializePage() {
  // Create and configure the "Ajouter un livre" button
  const addButton = document.createElement("button");
  addButton.id= "buttonAddBook";
  addButton.textContent = "Ajouter un livre";
  addButton.addEventListener("click", showSearchForm);
  addButton.classList.add("btn_add");  // adds CSS class "btn_add" to addButton element (the button with the text  "Ajouter un livre".) 
  
  // Find the first <hr> element and its parent
  const hr = document.querySelector("hr"); //This line selects the first <hr> element in the document and stores it in the variable hr. The <hr> tag in HTML index.html file represents an horizontal rule on the webpage, used it for visual separation.
  const parentNodeHr= hr.parentElement;  //  retrieves the parent element of the <hr> element and assigns it to the variable parentNodeHr. 
  // Insert the "Ajouter un livre" button before the <hr> element
  parentNodeHr.insertBefore(addButton,hr);  // inserts the addButton element ( that is the button with the text  "Ajouter un livre") before the hr element within the parentNodeHr. => so  addButton will be positioned just before the horizontal rule (<hr>).


  // With this modification, the class "poch-list" will be added to the h2 element with the text "Ma poch'liste" whenever the initializePage() function is called.
  // Add the "poch-list" class to the h2 element with the text "Ma poch'liste"
  const h2Elements = document.querySelectorAll("h2"); //use document.querySelectorAll("h2") to select all the h2 elements on the page
  h2Elements.forEach((h2Element) => {     // we loop through these elements using forEach()
   if (h2Element.textContent === "Ma poch'liste") {    //check if the textContent of each h2 element is equal to "Ma poch'liste"
     h2Element.classList.add("poch-list");  // If a match is found, we add the "poch-list" class to that particular h2 element using classList.add("poch-list").
   }
  });

  
  const pochList = sessionStorage.getItem("pochList");
  if (pochList && pochList.length > 0) {
    displayPochList(); // Display registered books in the "Ma poch'liste" section
  }

}


// Function to show the search form
function showSearchForm() {
  const addButton = document.getElementById("buttonAddBook"); // get button by id with content "Ajouter un livre"
  addButton.remove();  // remove button with content " Ajouter un livre" from form
 
  // Implement code to show the search form here
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
    searchButton.classList.add("btn_search"); // add  class "btn_search" to addButton element (the button with the text  "Rechercher".) 
  
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Annuler";
    cancelButton.classList.add("btn_cancel");  // add  class "btn_cancel" to addButton element (the button with the text  "Annuler".) 
  
   // hr (horizontal rule on the webpage) 
   // inserts the cancelButton element ( that is the button with the text  "Annuler") before the hr element
   const hr = document.querySelector("hr"); //This line selects the first <hr> element in the document and stores it in the variable hr
   const parentNodeHr= hr.parentElement;  //  retrieves the parent element of the <hr> element and assigns it to the variable parentNodeHr.
   parentNodeHr.insertBefore(cancelButton,hr);  // inserts thecancelButton element ( that is the button with the text  "Annuler") before the hr element within the parentNodeHr. => so cancelButton will be positioned just before the horizontal rule (<hr>).

   // "poch-list" class
   // With this modification, the class "poch-list" will be added to the h2 element with the text "Ma poch'liste" whenever the showsearchForm() function is called.
   // Add the "poch-list" class to the h2 element with the text "Ma poch'liste"
   const h2Elements = document.querySelectorAll("h2"); //use document.querySelectorAll("h2") to select all the h2 elements on the page
   h2Elements.forEach((h2Element) => {     // we loop through these elements using forEach()
    if (h2Element.textContent === "Ma poch'liste") {    //check if the textContent of each h2 element is equal to "Ma poch'liste"
     h2Element.classList.add("poch-list");  // If a match is found, we add the "poch-list" class to that particular h2 element using classList.add("poch-list").
    }
   });


   
    // Add an event listener for the form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from being submitted
  
      const title = titleInput.value.trim();
      const author = authorInput.value.trim();
  
      if (title !== "" || author !== "") {
        performSearch(title, author); // Call the function to perform the search
      } else {
        alert("S'il vous plaît entrer un titre de livre ou un auteur.");
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
    form.appendChild(authorLabel);
    form.appendChild(searchButton);
    form.appendChild(document.createElement("br")); // Add a line break 
    form.appendChild(cancelButton);  //Add line for appending the cancelButton to the form ( // add line,so add the button with text "Annuler" to the search form (It appends the cancelButton element as a child of the form element, which means that the "Annuler" button will be displayed inside the form alongside the other form elements such as the input fields and the "Rechercher" button.)
    
    parentNodeHr.insertBefore(form,hr);  // inserts thecancelButton element ( that is the button with the text  "Annuler") before the hr element within the parentNodeHr. => so cancelButton will be positioned just before the horizontal rule (<hr>).
    
  }
  
  // When clicking on the “Recherche” button, a block below the form should display “ résultats de recherche”
  // Function to display the "résultats de recherche" header
  function displaySearchResultsHeader() {
  const contentDiv = document.getElementById("content");
  const searchResultsHeader = document.createElement("h3");
  console.log("toto");
  searchResultsHeader.textContent = "résultats de recherche";
  contentDiv.appendChild(searchResultsHeader);
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
  

  
  // Function to display the search results
  //The displaySearchResults function is responsible for rendering the search results on the page. 
  //This function takes the results array as a parameter, which contains the search results obtained from the Google Books API. It iterates over each result and creates a container (bookContainer) for each book. Inside the container, it creates and appends the elements for the book's ID, title, author, bookmark icon, description, and image.
  function displaySearchResults(results) {
    const contentDiv = document.getElementById("content");
    const resultsDiv = document.createElement("div");   // Create a div to hold the search results (creates a new HTML div element and assigns it to the variable resultsDiv.This line of code is creating an empty div element in memory, but it does not yet add the div to the actual webpage. => later in code manipulate this div element, add content to it, and then append it to the webpage's DOM (Document Object Model) to make it visible on the webpage.)
    const resultsContainer = document.createElement("div");    // Create a container for the search results
    resultsContainer.classList.add("results-grid");    // Add "results-grid" class to the results container

  
    if (results && results.length > 0) {
      results.forEach(result => {
        const bookId = result.id;
        const bookTitle = result.volumeInfo.title;
        const bookAuthor = result.volumeInfo.authors ? result.volumeInfo.authors[0] : "Unknown Author";
        const bookDescription = result.volumeInfo.description ? result.volumeInfo.description.substring(0, 200) : "Information manquante";
        const bookImage = result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail : "unavailable.png";
  
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book-container");
        bookContainer.classList.add("book-container", "book-item"); // Add "book-item" class 
  
        // Create elements for book ID, title, author
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
        const bookmarkImage = document.createElement("img"); // Create an <img> element
        // Defining the attributes of the <img> element of the bookmark
        bookmarkImage.setAttribute('src','asset/images/bookmark.png');
        bookmarkImage.setAttribute('alt', 'icon is a Bookmark');
        bookmarkImage.id="bookmark";
        bookmarkImage. classList.add("image_bookmark");// adds CSS class "image_bookmark" to bookmarkImage  element (the icon with the bookmark)


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
        const deleteIconImage = document.createElement("img"); // Create an <img> element
        // Defining the attributes of the <img> element of the delete icon image so trash
        deleteIconImage.setAttribute('src','asset/images/trash.png');
        deleteIconImage.setAttribute('alt', 'trash can icon, to be able to delete a book from the list.');
        deleteIconImage.id = "trashCanIcon";
        deleteIconImage.classList.add("image_delete_icon"); // adds CSS class "image_delete_icon" to deleteIconImage  element (the image with the deleteIcon)

        deleteIcon.addEventListener("click", function() {
        removeFromPochList(bookId);
        });
        bookContainer.appendChild(deleteIcon);


        const bookDescriptionElement = document.createElement("p");
        bookDescriptionElement.textContent = `Description: ${bookDescription}`;
        bookContainer.appendChild(bookDescriptionElement);
  
        // Create the book image element
        const bookImageElement = document.createElement("img");
        bookImageElement.src = bookImage;

        // If no image is present for a book, the image “unavailable.png”, downloadable 
        //Check if the book image is "unavailable.png"
        if (bookImage === "unavailable.png") {
        bookImageElement.setAttribute('src', 'asset/images/unavailable.png');
        bookImageElement.setAttribute('alt', 'Image: White background with black text "COMING SOON"');
        bookImageElement.id = "unavailableBookImage";
        } else {
        bookImageElement.src = bookImage;
        bookImageElement.alt = "Image not available for this book.";
        }


        bookImageElement.classList.add("image_book");// adds CSS class "image_book" to bookimage  element (the image with the book)

        // Append the book image element to the book container
        bookContainer.appendChild(bookImageElement);
        
        // Append the book container to the resultsDiv
        resultsDiv.appendChild(bookContainer);
      });
    } else {
      resultsDiv.textContent = "Aucun livre n'a été trouvé.";
    }
  

    // Clear the existing content and display the search results
    contentDiv.innerHTML = "";
    displaySearchResultsHeader();
    contentDiv.appendChild(resultsDiv);
  }



// Function to add book to user's poch'list
// The book must also be saved in a session, using the API SessionStorage.
// https://developer.mozilla.org/fr/docs/Web/API/Window/sessionStorage
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
    displayPochList();  // Display updated poch'liste after adding the book
  }
}



// Function to remove book from user's poch'list
//where a book can be removed from the reading list without affecting the search results display.
function removeFromPochList(bookId) {
  const pochList = sessionStorage.getItem("pochList");
  const pochListArray = pochList ? JSON.parse(pochList) : [];

  const updatedPochListArray = pochListArray.filter(book => book.id !== bookId);
  sessionStorage.setItem("pochList", JSON.stringify(updatedPochListArray));

  displayPochList(); // Display updated poch'liste after removing the book
}



// Function to display the poch'liste (list of books to read)
//This function retrieves the user's reading list from session storage, 
//iterates through the list, and displays each book's information, 
//including ID, title, author, description, and image. 
//It also provides a delete icon for each book to allow users to remove books from their reading list.
function displayPochList() {
    const pochList = sessionStorage.getItem("pochList"); // Retrieve the user's reading list (poch'liste) from the session storage .This line gets the saved poch'liste (list of books) from the session storage
    const contentDiv = document.getElementById("content");
    const pochListDiv = document.createElement("div");
  
    if (pochList && pochList.length > 0) {
      const pochListArray = JSON.parse(pochList);
      pochListArray.forEach(book => {
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book-container");
  
        // Create elements for book ID, title, author, description, and image
        const bookIdElement = document.createElement("p");
        bookIdElement.textContent = `Identifiant: ${book.id}`;
        bookContainer.appendChild(bookIdElement);
  
        const bookTitleElement = document.createElement("p");
        bookTitleElement.textContent = `Titre: ${book.title}`;
        bookContainer.appendChild(bookTitleElement);
  
        const bookAuthorElement = document.createElement("p");
        bookAuthorElement.textContent = `Auteur: ${book.author}`;
        bookContainer.appendChild(bookAuthorElement);


         // Create the delete icon
         const deleteIcon = document.createElement("span");
         const deleteIconImage = document.createElement("img"); // Create an <img> element
         // Defining the attributes of the <img> element for the delete icon image (trash can)
         deleteIconImage.setAttribute('src', 'asset/images/trash.png');
         deleteIconImage.setAttribute('alt', 'trash can icon, to be able to delete a book from the list.');
         deleteIconImage.id = "trashCanIcon";

         deleteIcon.addEventListener("click", function() {
             removeFromPochList(book.id);
         });
         deleteIcon.appendChild(deleteIconImage); // Append the image element to the deleteIcon span
         bookContainer.appendChild(deleteIcon);

  
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

  


  



// Call the initializePage function when the page is loaded
document.addEventListener("DOMContentLoaded", initializePage);
