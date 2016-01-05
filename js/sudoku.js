var Sudoku = function () {
	this._SIZE = 9;
	this.emptyField = 0;
	this.init();
}

Sudoku.prototype.init = function() {
	this.board = new Array(this._SIZE);
	for(var i=0; i<this._SIZE; i++) {
		this.board[i] = new Array(this._SIZE).fill(0);
	}
	console.log(this.board);
};

Sudoku.prototype.nextMove = function(x, y, digit) {
	// returns false if current x,y,digit is not valid move
	// else it checks if its solved and returs true
	// if it's solved, then event called win is triggered
};

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

Sudoku.prototype.isSolved = function() {
	// if it has empty spaces then it's not solved
	if (this.isEverythingFilled()==false) {
		return false;
	}

	// check all rows 

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
	

};




