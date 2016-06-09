const ALIVE = 'alive';
const DEAD = 'dead';

var nextGeneration = (rules, neighbours) => {
  var liveNeighbours = neighbours.reduce((accumulator, element) => {
    return (element.currentState === ALIVE) ? ++accumulator : accumulator;
  }, 0);

  var matchRule = rules.find(x => x.f(liveNeighbours)).state;

  return (matchRule === ALIVE) ? createAliveCell() : createDeadCell();
}

var aliveRules = [
  {f : (n) => n==2, state : ALIVE},
  {f : (n) => n==3, state : ALIVE},
  {f : (n) => n<2, state : DEAD},
  {f : (n) => n>3, state : DEAD}
];

var deadRules = [
  {f : (n) => n==3, state : ALIVE},
  {f : (n) => true, state : DEAD}
];

var createAliveCell = () => {
  return {
    currentState : ALIVE,
    nextGenerationState : (neighbours) => nextGeneration(aliveRules, neighbours)
  }
}

var createDeadCell = () => {
  return {
    currentState : DEAD,
    nextGenerationState : (neighbours) => nextGeneration(deadRules, neighbours)
  }
}

module.exports = {
  createAliveCell : createAliveCell,
  createDeadCell : createDeadCell,
  ALIVE : ALIVE,
  DEAD: DEAD
}