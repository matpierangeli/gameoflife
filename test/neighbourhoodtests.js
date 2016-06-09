var assert = require('chai').assert;
var neighbourhood = require('../lib/neighbourhood.js');
var alive = require('../lib/cell.js').createAliveCell();
var dead = require('../lib/cell.js').createDeadCell();
var xCell = alive;

var neighbourhoodEquality = (n1, n2) => {
	return n1.reduce((acc, e, i) => {
  		return acc && e.currentState===n2[i].currentState;
  	}, true);
}

describe('Neighbourhood', () => {
  it('Central position', () => {
  	var matrix = [[dead,alive,alive],
  	              [alive,xCell,dead],
  	              [dead,alive,alive]];
  	var expectedNeighbourhood = [dead, alive, alive, alive, dead, dead, alive, alive];
  	var actualNeighbourhood = neighbourhood(matrix,1,1);
  	
    assert.equal(true, neighbourhoodEquality(expectedNeighbourhood, actualNeighbourhood));
  });
  it('Left-Upper corner', () => {
  	var matrix = [[xCell,alive,alive],
  	              [alive,dead,dead],
  	              [dead,alive,alive]];
  	var expectedNeighbourhood = [dead, dead, dead, dead, alive, dead, alive, dead];
  	var actualNeighbourhood = neighbourhood(matrix,0,0);
  	
    assert.equal(true, neighbourhoodEquality(expectedNeighbourhood, actualNeighbourhood));
  });
  it('Center-Upper edge', () => {
  	var matrix = [[dead,xCell,alive],
  	              [alive,dead,dead],
  	              [dead,alive,alive]];
  	var expectedNeighbourhood = [dead, dead, dead, dead, alive, alive, dead, dead];
  	var actualNeighbourhood = neighbourhood(matrix,0,1);

    assert.equal(true, neighbourhoodEquality(expectedNeighbourhood, actualNeighbourhood));
  });

  it('Right-Upper corner', () => {
  	var matrix = [[dead,alive,xCell],
  	              [alive,dead,dead],
  	              [dead,alive,alive]];
  	var expectedNeighbourhood = [dead, dead, dead, alive, dead, dead, dead, dead];
  	var actualNeighbourhood = neighbourhood(matrix,0,2);

    assert.equal(true, neighbourhoodEquality(expectedNeighbourhood, actualNeighbourhood));
  });

  it('Left-Middle edge', () => {
  	var matrix = [[dead,alive,alive],
  	              [xCell,dead,dead],
  	              [dead,alive,alive]];
  	var expectedNeighbourhood = [dead, dead, alive, dead, dead, dead, dead, alive];
  	var actualNeighbourhood = neighbourhood(matrix,1,0);
  	
    assert.equal(true, neighbourhoodEquality(expectedNeighbourhood, actualNeighbourhood));
  });

  it('Right-Middle edge', () => {
  	var matrix = [[dead,alive,alive],
  	              [dead,dead,xCell],
  	              [dead,alive,alive]];
  	var expectedNeighbourhood = [alive, alive, dead, dead, dead, alive, alive, dead];
  	var actualNeighbourhood = neighbourhood(matrix,1,2);

    assert.equal(true, neighbourhoodEquality(expectedNeighbourhood, actualNeighbourhood));
  });

  it('Left-Lower corner', () => {
  	var matrix = [[dead,alive,alive],
  	              [dead,dead,alive],
  	              [xCell,alive,alive]];
  	var expectedNeighbourhood = [dead, dead, dead, dead, alive, dead, dead, dead];
  	var actualNeighbourhood = neighbourhood(matrix,2,0);

    assert.equal(true, neighbourhoodEquality(expectedNeighbourhood, actualNeighbourhood));
  });

  it('Center-Lower edge', () => {
  	var matrix = [[dead,alive,alive],
  	              [dead,dead,alive],
  	              [alive,xCell,alive]];
  	var expectedNeighbourhood = [dead, dead, alive, alive, alive, dead, dead, dead];
  	var actualNeighbourhood = neighbourhood(matrix,2,1);

    assert.equal(true, neighbourhoodEquality(expectedNeighbourhood, actualNeighbourhood));
  });

  it('Right-Lower corner', () => {
  	var matrix = [[dead,alive,alive],
  	              [dead,dead,alive],
  	              [alive,dead,xCell]];
  	var expectedNeighbourhood = [dead, alive, dead, dead, dead, dead, dead, dead];
  	var actualNeighbourhood = neighbourhood(matrix,2,2);

    assert.equal(true, neighbourhoodEquality(expectedNeighbourhood, actualNeighbourhood));
  });
});