// declare dom variables
const title = document.getElementById("title-input");
const description = document.getElementById("description-input");
const entryContainer = document.getElementById("entry-container");
const submitButton = document.getElementById("Submit");

// add entry function
function addEntry() {
  if (title.value === "" || description.value === "") {
    return alert("Add text to title and description boxes.");
  } else {
    const entryCounter =
      document.querySelectorAll("#entry-container div").length + 1;
    const HTML = `
      <div id="entry-${entryCounter}">
        <h3 id="title-${entryCounter}">${title.value}</h3>
        <p id="description-${entryCounter}">${description.value}</p>
        <div id="button-container-${entryCounter}"><i onclick="editEntry(${entryCounter})" class="fa-solid fa-pen-to-square edit-icon"></i><div>
        <br>
      </div>`;
    entryContainer.insertAdjacentHTML("beforeend", HTML);
    title.value = "";
    description.value = "";
  }
}

submitButton.addEventListener("click", () => {
  addEntry();
});

// edit entry function
function editEntry(entryCounter) {
  const titleInitialValue = document.getElementById(
    `title-${entryCounter}`
  ).innerText;
  const descriptionInitialValue = document.getElementById(
    `description-${entryCounter}`
  ).innerText;
  const buttonContainer = document.getElementById(
    `button-container-${entryCounter}`
  );
  const title = document.getElementById(`title-${entryCounter}`);
  const description = document.getElementById(`description-${entryCounter}`);
  title.innerHTML = `<input placeholder="Title" id="title-input-${entryCounter}" type="text" value="${titleInitialValue}"><br>`;
  description.innerHTML = `<textarea id="description-input-${entryCounter}" placeholder="Description" cols="40" rows="10">${descriptionInitialValue}</textarea>`;
  buttonContainer.innerHTML = `<i onclick="editComplete(${entryCounter})" class="fa-solid fa-square-check check-icon"></i>
  <i onclick="removeEntry(${entryCounter})" class="fa-solid fa-trash remove-icon"></i>
    `;
}

// function reverts complete edits
function editComplete(entryCounter) {
  const titleEditInput = document.getElementById(`title-input-${entryCounter}`);
  const descriptionEditInput = document.getElementById(
    `description-input-${entryCounter}`
  );
  const entry = document.getElementById(`entry-${entryCounter}`);

  //initial values
  const titleEditedValue=titleEditInput.value;
  const descriptionEditedValue=descriptionEditInput.value;

  entry.innerHTML = `
      <div id="entry-${entryCounter}">
        <h3 id="title-${entryCounter}">${titleEditedValue}</h3>
        <p id="description-${entryCounter}">${descriptionEditedValue}</p>
        <div id="button-container-${entryCounter}"><i onclick="editEntry(${entryCounter})" class="fa-solid fa-pen-to-square edit-icon"></i></div>
        <br>
      </div>`;
}

// remove entry function
function removeEntry(entryCounter) {
  const entry = document.getElementById(`entry-${entryCounter}`);
  entry.remove();
}
