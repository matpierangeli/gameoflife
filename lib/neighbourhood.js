/*
matrix = [
  [x0y0, x0y1, x0y2],
  [x1y0, x1y1, x1y2],
  [x2y0, x2y1, x2y2]
]

neighbourhood
1 2 3
4 x 5
6 7 8
*/

var deadCell = require('../lib/cell.js').createDeadCell;

var neighbourhood = (matrix, x, y) => {
  var matrixLength = matrix.length - 1;
  var matrixHeight = matrix[0].length - 1; 
  var n1 = ( xN1(x)<0 || yN1(y)<0 ) ? deadCell() : matrix[xN1(x)][yN1(y)];
  var n2 = ( xN2(x)<0 ) ? deadCell() : matrix[xN2(x)][yN2(y)];
  var n3 = ( xN3(x)<0 || yN3(y)>matrixHeight ) ? deadCell() : matrix[xN3(x)][yN3(y)];
  var n4 = ( yN4(y)<0 ) ? deadCell() : matrix[xN4(x)][yN4(y)];
  var n5 = ( yN5(y)>matrixHeight ) ? deadCell() : matrix[xN5(x)][yN5(y)];
  var n6 = ( xN6(x)>matrixLength || yN6(y)<0 ) ? deadCell() : matrix[xN6(x)][yN6(y)];
  var n7 = ( xN7(x)>matrixLength) ? deadCell() : matrix[xN7(x)][yN7(y)];
  var n8 = ( xN8(x)>matrixLength || yN8(y)>matrixHeight ) ? deadCell() : matrix[xN8(x)][yN8(y)];

  return [n1, n2, n3, n4, n5, n6, n7, n8];
}

var xN1 = (x) => x-1
var yN1 = (y) => y-1
var xN2 = (x) => x-1
var yN2 = (y) => y
var xN3 = (x) => x-1
var yN3 = (y) => y+1
var xN4 = (x) => x
var yN4 = (y) => y-1
var xN5 = (x) => x
var yN5 = (y) => y+1
var xN6 = (x) => x+1
var yN6 = (y) => y-1
var xN7 = (x) => x+1
var yN7 = (y) => y
var xN8 = (x) => x+1
var yN8 = (y) => y+1

module.exports = neighbourhood;