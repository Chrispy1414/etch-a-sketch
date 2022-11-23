const container = document.getElementById("container");
// const button = document.getElementsByClassName("button-6")

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.addEventListener('mouseover', hoverColor);
    container.appendChild(cell).className = "grid";
  };
};

let randomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//function that changes div color uponed being hovered
function hoverColor($event) {
  const item = $event.target;
  item.style.backgroundColor = `${randomColor()}`;
}

function changeGrid(){
const userRows = prompt("Please enter how many rows you would like in the grid!");
const userCols = prompt("Please enter how many coloums you would like in the grid!");
container.innerHTML = "";
makeRows(userRows, userCols);
}




