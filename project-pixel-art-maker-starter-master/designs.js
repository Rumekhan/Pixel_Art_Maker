// Variable controlling color, height and width grid
const height = document.getElementById("inputHeight");
const color = document.getElementById("colorPicker")
let currentColor = color.value;
const tableRow = document.getElementById("pixelCanvas");
const submitButton = document.getElementById("sizePicker");
const width = document.getElementById("inputWidth");
//Event Listeners
submitButton.addEventListener("submit", submit);
tableRow.addEventListener("click", addColor);
//Function for functionality of submit button
function submit(e) {
 e.preventDefault();
  makeGrid(height.value, width.value);
}
function makeGrid(x, y) {
  tableRow.innerHTML = "";
  for (let i = 0; i < x; i++) {
    const row = tableRow.appendChild(document.createElement("tr"));
    for (let j = 0; j < y; j++) {
      const col = document.createElement("td");
      col.id = "table";
      row.appendChild(col);
    }
  }
}
color.onchange = function() {
  currentColor = this.value;
}
function addColor(event){
  if (event.target.nodeName.toLowerCase() === 'td') {
    event.target.style.backgroundColor = currentColor;
  }
}
