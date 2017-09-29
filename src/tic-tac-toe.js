class TicTacToe {
    constructor() {
        this.field =[[null,null,null],[null,null,null],[null,null,null]];
      this.player = "x";
      }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.field[rowIndex][columnIndex] === null) {
     this.field[rowIndex][columnIndex] = this.player;
      if (this.player === "x") {
        this.player = "o";
      } else {
        this.player = "x";
      }
      } 
    }

isFinished() {
 if (this.noMoreTurns() || this.getWinner() != null) {
   return true;
 }
  else{
    return false;
  }
}
  
    getWinner() {
    if (this.field[0][0] === this.field[0][1] && this.field[0][0] === this.field[0][2] && this.field[0][0] !== null) {
     return (this.player === "x") ? "o" : "x";
    }
     if (this.field[1][0] === this.field[1][1] && this.field[1][0] === this.field[1][2] && this.field[1][0] !== null) {
           return (this.player === "x") ? "o" : "x";
       } 
      if (this.field[2][0] === this.field[2][1] && this.field[2][0] === this.field[2][2] && this.field[2][0] !== null) {
      return (this.player === "x") ? "o" : "x";
       } 
      if (this.field[2][0] === this.field[1][0] && this.field[2][0] === this.field[0][0] && this.field[2][0] !== null) {
     return (this.player === "x") ? "o" : "x";     
    }
      if (this.field[2][1] === this.field[1][1] && this.field[2][1] === this.field[0][1] && this.field[2][1] !== null) {
      return (this.player === "x") ? "o" : "x";   
    }
      if (this.field[2][2] === this.field[1][2] && this.field[2][2] === this.field[0][2] && this.field[2][2] !== null) {
      return (this.player === "x") ? "o" : "x";
    }
      if (this.field[2][2] === this.field[1][1] && this.field[2][2] === this.field[0][0] && this.field[2][2] !== null) {
      return (this.player === "x") ? "o" : "x";
    }
      if (this.field[2][0] === this.field[1][1] && this.field[2][0] === this.field[0][2] && this.field[2][0] !== null) {
      return (this.player === "x") ? "o" : "x";
    } else {
      return null;
    }
  }

noMoreTurns() {
    for (var i = 0; i<3; i++) {
      for (var j = 0; j<3; j++) {
        if (this.field[i][j] === null) {
          return false;
        }
      } 
    }
    return true;
}

    isDraw() {
    if (this.noMoreTurns()  && this.getWinner() == null ) {
      return true;
    }
      else{
        return false;
      }
      
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}
module.exports = TicTacToe;
