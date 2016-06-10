var assert = require('chai').assert;
var world = require('../lib/world.js');
var alive = require('../lib/cell.js').createAliveCell();
var dead = require('../lib/cell.js').createDeadCell();
var matrixCellComparer = require('./utils.js').matrixCellComparer;

describe('World', () => {
  it('Current world snapshot', () => {
    var matrix =
      [[alive,alive,dead,dead],
       [alive,alive,dead,alive],
       [dead,dead,alive,alive]
      ];
    
    var initialWorld = world(matrix);
    var currentWorldMatrix = initialWorld.currentMatrix;

    assert.equal(true, matrixCellComparer(matrix, currentWorldMatrix));
  });
  it('Next world', () => {
    var matrix =
      [[alive,alive,dead,dead],
       [alive,alive,dead,alive],
       [dead,dead,alive,alive]
      ];
    
    var expectedNextGenerationMatrix =
      [[alive,alive,alive,dead],
       [alive,dead,dead,alive],
       [dead,alive,alive,alive]
      ];

    var initialWorld = world(matrix);
    var actualNextGenerationMatrix = initialWorld.nextGeneration().currentMatrix;

    assert.equal(true, matrixCellComparer(expectedNextGenerationMatrix, actualNextGenerationMatrix));
  });
});