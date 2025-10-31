function createBoard(){
	let row = new Array(8).fill(null);
  return new Array(8).fill([...row]);
}

function createCell(cell){
	return `<td></td>`;
}

function createRow(row){
  return `<tr>${row.map(createCell).join(' ')}</tr>`;
}

function drawBoard(board){
	let tableBoard = document.createElement('table');
  tableBoard.classList.add('chess');
  tableBoard.innerHTML = board.map(createRow).join(' ');
  return tableBoard;
}

function drawEcacs(){
  

}

// Crea una funció que plene el tauler amb les fitxes unicode de l'escacs. Crida-la en el moment adequat

 document.querySelector('#board').append(drawBoard(createBoard()));
