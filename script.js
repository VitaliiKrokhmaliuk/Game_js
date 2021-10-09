let cells = [...document.querySelectorAll('.cell')];
cells.sort(() => Math.random() - 0.5);

let x = 0;
let y = 0;

let emptyX = 0;
let emptyY = 0;

for (let cell of cells) {
  x += 1;
  
  if (x === 4) {
    x = 0;
    y += 1;
  }
  
  move(cell, x, y);
  
  cell.addEventListener('click', function() {
    let stepX = Math.abs(emptyX - cell.x);
    let stepY = Math.abs(emptyY - cell.y);
    
    if (stepX + stepY === 1) {
      move(cell, emptyX, emptyY);
    }
  });
}

emptyX = 0;
emptyY = 0;

function move(cell, x, y) {
  emptyX = cell.x;
  emptyY = cell.y;
  
  cell.x = x;
  cell.y = y;
  
  cell.style.left = `${x * 100}px`;
  cell.style.top = `${y * 100}px`;
}
