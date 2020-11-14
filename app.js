let addTodoButton = document.getElementById("addToDo")
let toDoContainer = document.getElementById("toDoContainer")
let inputfield = document.getElementById("inputField")

addTodoButton.addEventListener('click', function () {
    var paragraph = document.createElement('p')
    //uses class list to modidy css values  
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputfield.value;
    //adds the text in the put field to the todocontainer
    toDoContainer.appendChild(paragraph)
    // when the button is clicked is removes the value
    inputfield.value = ""



    //uses javascript to put a line through on the completed to-do task
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through"

    })
    //Removes the paragraph(txt) on the todocontainer
    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph)
    })

}) 
