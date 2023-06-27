//he code you provided is creating a button element with the text "Ajouter un livre" and an ID "btn_add". 
//It is then inserting the button after an h2 element. Additionally, an event listener is attached to the button, which will execute the btn_add_click function when the button is clicked.
// Create btn_add
const btn_add = document.createElement('button')
btn_add.innerText = 'Ajouter un livre'
btn_add.id = 'btn_add'
h2.after(btn_add)
btn_add.addEventListener('click', btn_add_click)