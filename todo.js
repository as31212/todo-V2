//declare dom variables
const title = document.getElementById("title-input");
const description = document.getElementById("description-input");
const entryContainer = document.getElementById("entry-container");
const submitButton = document.getElementById("Submit");

//add entry function. This function will take the string from the title and description and put it into an unordered list as div that has a h3 for the title and a p element for the description. These entries will also include and button that allows you to edit the entry. When you click on edit entry two buttons will appear, one that will complete the edit and another than deletes the entry. when you press the edit button it will turn the h2 into a text input and the p into a text area. once you hit complete edit, it will return the new values for the title and the description as an h3 and a p and revert back to the edit button

function addEntry() {
  if (title.value === "" || description.value === "") {
    return alert("add text to entry and description box");
  } else {
    const entryCounter = document.querySelectorAll("#entry-container div") + 1;
    const HTML = `<div id="entry-${entryCounter}"><h3 id="title-${entryCounter}">${title.value}</h3><p id="description-${entryCounter}">${description.value}</p><i onclick="editEntry('${entryCounter}')" id="edit-icon-${entryCounter}" class="fa-solid fa-pen-to-square"></i><br></div>`;
    entryContainer.insertAdjacentHTML("beforeend", HTML);
    title.value = "";
    description.value = "";
  }
}
submitButton.addEventListener("click", () => {
  addEntry();
});

//this is the function that deals with the edit button functionality

function editEntry(entryCounter) {
  const titleInitialValue = document.getElementById(
    `title-${entryCounter}`
  ).innerText;
  const descriptionInitialValue = document.getElementById(
    `description-${entryCounter}`
  ).innerText;
  const editButton = document.getElementById(`edit-icon-${entryCounter}`);
  const editTitle = document.getElementById(`title-${entryCounter}`);
  const editDescription = document.getElementById(
    `description-${entryCounter}`
  );
  editTitle.innerHTML = `<input placeholder="Title" id="title-input-${entryCounter}" type="text" /><br>`;
  editDescription.innerHTML = `<textarea id="description-input-${entryCounter}" placeholder="description" cols="40" rows="10"></textarea>`;
  editButton.innerHTML = `<div class="edit-buttons-${entryCounter}"><i onclick="editComplete('${entryCounter}')" class="fa-solid fa-square-check"></i><button onclick="removeEntry('${entryCounter}')">X</button></div>`;
  const editTitleValue = document.getElementById(`title-input=${entryCounter}`).innerText;
  editTitleValue = titleInitialValue;
  const editDescriptionValue = document.getElementById(
    `description-input=${entryCounter}`
  ).innerText;
  editDescriptionValue = descriptionInitialValue;
}

//function reverts complete edits
function editComplete(entryCounter) {
  const titleEditInput = document.getElementById(`title-input-${entryCounter}`);
  const descriptionEditInput = document.getElementById(
    `description-input-${entryCounter}`
  );
  const entry = document.getElementById(`entry-${entryCounter}`);
  entry.innerHTML = `<div id="entry-${entryCounter}"><h3 id="title-${entryCounter}">${titleEditInput.value}</h3><p id="description-${entryCounter}">${descriptionEditInput.value}</p><i onclick="editEntry('${entryCounter}')" id="edit-icon-${entryCounter}" class="fa-solid fa-pen-to-square"></i><br></div>`;
}

//remove entry function

function removeEntry(entryCounter) {
  const entry = document.getElementById(`entry-${entryCounter}`);
  entry.remove();
}
