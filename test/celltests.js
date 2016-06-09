var assert = require('chai').assert;
var cell = require('../lib/cell.js');

describe('Cell', () => {
  describe('Cell creation', () => {
    it('Alive cell', () => {
      assert.equal(cell.ALIVE, cell.createAliveCell().currentState);
    });
    it('Dead cell', () => {
      assert.equal(cell.DEAD, cell.createDeadCell().currentState);
    });
  });

  describe('Dead cell next generation', () => {
    it('Reborn', () => {
      var deadCell = cell.createDeadCell();
      var neighbours = [
        cell.createAliveCell(),
        cell.createAliveCell(),
        cell.createAliveCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell()
      ]
      assert.equal(cell.ALIVE, deadCell.nextGenerationState(neighbours).currentState);
    });
    it('Remains dead', () => {
      var deadCell = cell.createDeadCell();
      var neighbours = [
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell()
      ]
      assert.equal(cell.DEAD, deadCell.nextGenerationState(neighbours).currentState);
    });
    it('Remains dead with too many alive around', () => {
      var deadCell = cell.createDeadCell();
      var neighbours = [
        cell.createAliveCell(),
        cell.createAliveCell(),
        cell.createAliveCell(),
        cell.createAliveCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell()
      ]
      assert.equal(cell.DEAD, deadCell.nextGenerationState(neighbours).currentState);
    });
  });

  describe('Alive cell next generation', () => {
    it('Remains live with two neighbours', () => {
      var aliveCell = cell.createAliveCell();
      var neighbours = [
        cell.createAliveCell(),
        cell.createAliveCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell()
      ]
      assert.equal(cell.ALIVE, aliveCell.nextGenerationState(neighbours).currentState);
    });
    it('Remains live with three neighbours', () => {
      var aliveCell = cell.createAliveCell();
      var neighbours = [
        cell.createAliveCell(),
        cell.createAliveCell(),
        cell.createAliveCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell()
      ]
      assert.equal(cell.ALIVE, aliveCell.nextGenerationState(neighbours).currentState);
    });
    it('Overcrowding', () => {
      var aliveCell = cell.createAliveCell();
      var neighbours = [
        cell.createAliveCell(),
        cell.createAliveCell(),
        cell.createAliveCell(),
        cell.createAliveCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell()
      ]
      assert.equal(cell.DEAD, aliveCell.nextGenerationState(neighbours).currentState);
    });
    it('Underpopulation', () => {
      var aliveCell = cell.createAliveCell();
      var neighbours = [
        cell.createAliveCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell(),
        cell.createDeadCell()
      ]
      assert.equal(cell.DEAD, aliveCell.nextGenerationState(neighbours).currentState);
    });
  });
});