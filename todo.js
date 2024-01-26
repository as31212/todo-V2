//declare dom variables
const title = document.getElementById("title-input");
const description = document.getElementById("description-input");
const entryContainer = document.getElementById("entry-container");
const submitButton = document.getElementById("Submit");

//add entry function. This function will take the string from the title and description and put it into an unordered list as div that has a h3 for the title and a p element for the description. These entries will also include and button that allows you to edit the entry. When you click on edit entry two buttons will appear, one that will complete the edit and another than deletes the entry. when you press the edit button it will turn the h2 into a text input and the p into a text area. once you hit complete edit, it will return the new values for the title and the description as an h3 and a p and revert back to the edit button


