var assert = require('chai').assert;
var cell = require('../lib/cell.js');

describe('Game of Life', () => {
  describe('Cell creation', () => {
    it('alive cell', () => {
      assert.equal('alive', cell.createAliveCell().currentState);
    });
    it('dead cell', () => {
      assert.equal('dead', cell.createDeadCell().currentState);
    });
  });

  describe('Dead cell next generation', () => {
    it('Reborn', () => {
      var deadCell = cell.createDeadCell();
      assert.equal('alive', deadCell.nextGenerationState([0,1,1,0,0,0,1,0]).currentState);
    });
    it('Remains dead', () => {
      var deadCell = cell.createDeadCell();
      assert.equal('dead', deadCell.nextGenerationState([0,0,0,0,0,0,0,0]).currentState);
    });
    it('Remains dead with too many alive around', () => {
      var deadCell = cell.createDeadCell();
      assert.equal('dead', deadCell.nextGenerationState([0,1,1,0,0,1,1,0]).currentState);
    });
  });

  describe('Alive cell next generation', () => {
    it('Remains live with two neighbours', () => {
      var aliveCell = cell.createAliveCell();
      assert.equal('alive', aliveCell.nextGenerationState([0,1,1,0,0,0,0,0]).currentState);
    });
    it('Remains live with three neighbours', () => {
      var aliveCell = cell.createAliveCell();
      assert.equal('alive', aliveCell.nextGenerationState([0,1,1,0,0,0,0,1]).currentState);
    });
    it('Overcrowding', () => {
      var aliveCell = cell.createAliveCell();
      assert.equal('dead', aliveCell.nextGenerationState([1,1,0,0,1,0,0,1]).currentState);
    });
    it('Underpopulation', () => {
      var aliveCell = cell.createAliveCell();
      assert.equal('dead', aliveCell.nextGenerationState([0,0,0,0,0,0,0,1]).currentState);
    });
  });
});