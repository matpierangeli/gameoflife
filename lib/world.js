var cell = require('./cell.js');
var neighbourhood = require('./neighbourhood.js');

var createCell = (cellState) => {
  return cellState===cell.ALIVE ? cell.createAliveCell() : cell.createDeadCell();
};

var world = (matrix) => {
  var currentMatrix = matrix;
  var matrixHeight = matrix.length;
  var matrixLength = matrix[0].length;

  return {
    currentMatrix : currentMatrix,
    nextGeneration : () => {
      var nextGenerationMatrix = [];
      for (var x = 0; x < matrixHeight; x++) {
        nextGenerationMatrix[x] = [];
        for (var y = 0; y < matrixLength; y++) {
          var currentCell = createCell(currentMatrix[x][y].currentState);
          var cellNeighbourhood = neighbourhood(currentMatrix, x, y);
          var cellNextGeneration = currentCell.nextGenerationState(cellNeighbourhood);
          nextGenerationMatrix[x][y] = cellNextGeneration;
        };
      };
      
      return world(nextGenerationMatrix);
    }
  };
};

module.exports = world;