var assert = require('chai').assert;
var cell = require('../lib/cell.js');

describe('Game of Life', () => {
  describe('Cell creation', () => {
    it('alive cell', () => {
      assert.equal('alive', cell(true).currentState);
    });
    it('dead cell', () => {
      assert.equal('dead', cell(false).currentState);
    });
  });

  describe('Dead cell next generation', () => {
    it('Reborn', () => {
      var aliveCell = cell(false);
      assert.equal('alive', aliveCell.nextGenerationState([0,1,1,0,0,0,1,0]).currentState);
    });
    it('Remains dead', () => {
      var aliveCell = cell(false);
      assert.equal('dead', aliveCell.nextGenerationState([0,0,0,0,0,0,0,0]).currentState);
    });
    it('Remains dead with too many alive around', () => {
      var aliveCell = cell(false);
      assert.equal('dead', aliveCell.nextGenerationState([0,1,1,0,0,1,1,0]).currentState);
    });
  });


  describe('Alive cell next generation', () => {
    it('Remains live with two neighbours', () => {
      var aliveCell = cell(true);
      assert.equal('alive', aliveCell.nextGenerationState([0,1,1,0,0,0,0,0]).currentState);
    });
    it('Remains live with three neighbours', () => {
      var aliveCell = cell(true);
      assert.equal('alive', aliveCell.nextGenerationState([0,1,1,0,0,0,0,1]).currentState);
    });
  });
});