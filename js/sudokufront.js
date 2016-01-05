var SudokuFront = function(config) {
	this.config = config;
	this.sudoku = new Sudoku(config.sudokuBoard);
	this.sudoku.win = config.winEvent;
	this.table = this.createTable();
	this.domElement = document.querySelector(config.sudokuDivId);
	this.domElement.appendChild(this.table);
};

SudokuFront.prototype.createTable = function() {
	var table = document.createElement("table");
	table.setAttribute('class', 'sudokuTable');
	for (var i=0; i<this.sudoku._SIZE; i++) {
		var row = document.createElement("tr");
		var element;

		for(var j=0; j<this.sudoku._SIZE; j++) {
			if (this.sudoku.originalBoard[i][j]!=0) {
				element = document.createElement("span");
				element.innerHTML = this.sudoku.originalBoard[i][j];
			}else{
				element = document.createElement("input");
				element.setAttribute('type', 'number');
				element.setAttribute('max', '9');
				element.setAttribute('min', '1')
				element.setAttribute('x', i);
				element.setAttribute('y', j);
				element.classList.add('sudokuElement');
				var that1 = this;
				element.onchange = function(e) {
					var that = that1;
					var input = e.target;
					var x = parseInt(input.getAttribute('x'));
					var y = parseInt(input.getAttribute('y'));
					var value = input.value;
					try {
						if (that.sudoku.nextMove(x, y, value)) {
							// wohoo we won
						} else {
							// noo this is wrong move
						}
					} catch (exception) {
						alert(exception);
						input.value = "";
					}
				}
			}
			var td = document.createElement("td");
			var x=Math.floor(i/3), y=Math.floor(j/3);
			if (x%2==y%2) {td.classList.add('add-background');};

			td.appendChild(element);
			row.appendChild(td);
		}
		table.appendChild(row);
	}
	return table;
};