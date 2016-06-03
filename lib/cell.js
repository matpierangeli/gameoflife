/*
neighbours
1 2 3
4 x 5
6 7 8
*/

var nextGeneration = (rules, neighbours) => {
  var liveNeighbours = neighbours.reduce((accumulator, element) => {
    return accumulator + element;
  }, 0);

  var matchRule = rules.find(x => x.f(liveNeighbours));
  result = (matchRule) ? matchRule.state : false;
  
  return create(result);
}

var aliveRules = [
  {f : (n) => n==2, state : true},
  {f : (n) => n==3, state : true},
  {f : (n) => n<2, state : false},
  {f : (n) => n>3, state : false}
];

var deadRules = [
  {f : (n) => n==3, state : true}
];

var create = (cellState) => {
  if(cellState)
    return {
      currentState : 'alive',
      nextGenerationState : (neighbours) => nextGeneration(aliveRules, neighbours)
    }
  else
    return {
      currentState : 'dead',
      nextGenerationState : (neighbours) => nextGeneration(deadRules, neighbours)
    }
}

module.exports = (cellState) => {
  return create(cellState);
}