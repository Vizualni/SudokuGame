var Sudoku = function (firstBoard) {
	this._SIZE = 9;
	this.emptyField = 0;
	if (firstBoard===undefined) {
		this.createEmptyBoard();
	} else {
		this.prefill(firstBoard);
	}
}

Sudoku.prototype.createEmptyBoard = function() {
	this.board = new Array(this._SIZE);
	for(var i=0; i<this._SIZE; i++) {
		this.board[i] = new Array(this._SIZE).fill(0);
	}
};

Sudoku.prototype.prefill = function(firstBoard) {
	// firstBoard is string with . for empty field
	if (this.board!==undefined) {
		throw "It's already created";
	}
	if (firstBoard.length!=81) {
		throw "Board is the wrong size";
	}
	var board = new Array(this._SIZE);
	for(var i=0; i<this._SIZE; i++) {
		board[i] = new Array(this._SIZE);
		for(var j=0; j<this._SIZE; j++){
			board[i][j] = (function(d){if(d=='.')return 0; return parseInt(d)})(firstBoard[i*this._SIZE+j]);
		}
	}
	if (this.isValid()==false) {
		throw "String is not valid";
	}
	this.board = board;
}

Sudoku.prototype.nextMove = function(x, y, digit) {
	// returns false if current x,y,digit is not valid move
	// else it checks if its solved and returs true
	// if it's solved, then event called win is triggered

	this.set(x, y, digit);
	
	var everythingFilled = this.isEverythingFilled();
	var validBoard = this.isValid();

	if (everythingFilled && validBoard) {
		// solved
		this.win();
		return true;
	}

	if (!validBoard) {
		return false;
	}
	
	return undefined;

};

Sudoku.prototype.set = function(x, y, digit) {
	if (isNaN(digit) || digit=='0') {
		throw "Third argument must be digit: 1, 2, 3, 4, 5, 6, 7, 8, 9.";
	}
	digit = parseInt(digit);
	this.board[x][y] = digit;
}

Sudoku.prototype.get = function(x, y) {
	return this.board[x][y];
};

Sudoku.prototype.isEverythingFilled = function() {
	for(var x in this.board) {
		for(var y in this.board[x]) {
			if (board[x][y]==this.emptyField) {
				return false;
			}
		}
	}
	return true;
};

Sudoku.prototype.isArrayOfNumbersValid = function(arrayOfNumber) {
	// there shouldnt be duplicate numbers in the same array
	var hashMap = {};
	for (var i in arrayOfNumber) {
		if (arrayOfNumber[i]==this.emptyField) {
			continue;
		}
		if (hashMap[arrayOfNumber[i]]!==undefined) {
			return false;
		}
		hashMap[arrayOfNumber[i]] = true;
	}
	return true;
}

Sudoku.prototype.isValid = function() {
	// checking for each row
	var arrayOfNumber = [];
	for(var x in this.board) {
		arrayOfNumber = [];
		for(var y in this.board[x]) {
			arrayOfNumber.push(this.board[x][y]);
		}
		if (this.isArrayOfNumbersValid(arrayOfNumber)==false) {
			return false;
		}
	}

	for(var x in this.board) {
		arrayOfNumber = [];
		for(var y in this.board[x]) {
			arrayOfNumber.push(this.board[y][x]);
		}
		if (this.isArrayOfNumbersValid(arrayOfNumber)==false) {
			return false;
		}
	}
	return true;
};




