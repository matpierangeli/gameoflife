var assert = require('chai').assert;
var world = require('../lib/world.js');
var worldPrinter = require('../lib/world-printer.js');
var alive = require('../lib/cell.js').createAliveCell();
var dead = require('../lib/cell.js').createDeadCell();

describe('World printer', () => {
  it('Current world', () => {
    var matrix =
      [[alive,alive,dead,dead],
       [alive,alive,dead,alive],
       [dead,dead,alive,alive]
      ];
    
    var initialWorld = world(matrix);

    var expected = "xx--\nxx-x\n--xx";
    var actual = "";
    worldPrinter(initialWorld, (data) => { actual=data; });

    assert.equal(expected, actual);
  });
});