var assert = require('chai').assert;
var cell = require('../lib/cell.js');
var alive = require('../lib/cell.js').createAliveCell();
var dead = require('../lib/cell.js').createDeadCell();

describe('Cell', () => {
  describe('Cell creation', () => {
    it('Alive cell', () => {
      assert.equal(cell.ALIVE, alive.currentState);
    });
    it('Dead cell', () => {
      assert.equal(cell.DEAD, dead.currentState);
    });
  });

  describe('Dead cell next generation', () => {
    it('Reborn', () => {
      var deadCell = dead;
      var neighbours = [alive, alive, alive, dead, dead, dead, dead, dead];
      assert.equal(cell.ALIVE, deadCell.nextGenerationState(neighbours).currentState);
    });
    it('Remains dead', () => {
      var deadCell = dead;
      var neighbours = [dead, dead, dead, dead, dead, dead, dead, dead];
      assert.equal(cell.DEAD, deadCell.nextGenerationState(neighbours).currentState);
    });
    it('Remains dead with too many alive around', () => {
      var deadCell = dead;
      var neighbours = [alive, alive, alive, alive, dead, dead, dead, dead];
      assert.equal(cell.DEAD, deadCell.nextGenerationState(neighbours).currentState);
    });
  });

  describe('Alive cell next generation', () => {
    it('Remains live with two neighbours', () => {
      var aliveCell = alive;
      var neighbours = [alive, alive, dead, dead, dead, dead, dead, dead];
      assert.equal(cell.ALIVE, aliveCell.nextGenerationState(neighbours).currentState);
    });
    it('Remains live with three neighbours', () => {
      var aliveCell = alive;
      var neighbours = [alive, alive, alive, dead, dead, dead, dead, dead];
      assert.equal(cell.ALIVE, aliveCell.nextGenerationState(neighbours).currentState);
    });
    it('Overcrowding', () => {
      var aliveCell = alive;
      var neighbours = [alive, alive, alive, alive, dead, dead, dead, dead];
      assert.equal(cell.DEAD, aliveCell.nextGenerationState(neighbours).currentState);
    });
    it('Underpopulation', () => {
      var aliveCell = alive;
      var neighbours = [alive, dead, dead, dead, dead, dead, dead, dead];
      assert.equal(cell.DEAD, aliveCell.nextGenerationState(neighbours).currentState);
    });
  });
});