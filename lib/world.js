var cell = require('./cell.js');
var neighbourhood = require('./neighbourhood.js');

var world = (matrix) => {
  var currentMatrix = matrix;
  var matrixHeight = matrix.length;
  var matrixLength = matrix[0].length;

  return {
  	currentMatrix : currentMatrix
  };
};

module.exports = world;