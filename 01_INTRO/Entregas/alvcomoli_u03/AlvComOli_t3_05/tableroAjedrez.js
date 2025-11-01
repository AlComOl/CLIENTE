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

function drawEscacs() {
  let restoPiezas = ["♜","♞","♝","♛","♚","♝","♞","♜"];
  let peones = ["♙","♙","♙","♙","♙","♙","♙","♙"];
  
  
  let tabla = document.querySelector('#board'); // selecciona la tabla existente

  

  // Primera fila: piezas 
  // recorre cada celda y coloca la ficha
  let primeraFila = tabla.querySelectorAll('tr')[0];//tabla(apunta al id) seleciono (tr[0])
  primeraFila.querySelectorAll('td').forEach((celda, pos) => { //Selecionamos (td) funcion flecha y el foreach recorremos celda por incremento
    celda.textContent = restoPiezas[pos];//pintando celda en cada celda la pieza del array[incremento]
     celda.style.color='grey';//color piezas
  });
  // peones gris
  // recorre cada celda y coloca la ficha
  let segundaFila = tabla.querySelectorAll('tr')[1];
  segundaFila.querySelectorAll('td').forEach((celda, pos) => {
    celda.textContent = peones[pos];
    celda.style.color='grey';
  });

  // peones amarillos
  // recorre cada celda y coloca la ficha
  let primeraFilaA = tabla.querySelectorAll('tr')[7];
  primeraFilaA.querySelectorAll('td').forEach((celda, pos) => {
    celda.textContent = restoPiezas[pos];
     celda.style.color='yellow';
  });

  // peones amarillos
  // recorre cada celda y coloca la ficha
  let segundaFilaB = tabla.querySelectorAll('tr')[6];
  segundaFilaB.querySelectorAll('td').forEach((celda, pos) => {
    celda.textContent = peones[pos];
    celda.style.color='yellow';
  });
  


}

  



// Crea una funció que plene el tauler amb les fitxes unicode de l'escacs. Crida-la en el moment adequat

 document.querySelector('#board').append(drawBoard(createBoard()));

 drawEscacs();//lamo a la funcion que crea las fichas sobre el tablero.
