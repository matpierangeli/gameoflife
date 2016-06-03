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

	var resultRules = rules.reduce((accumulator, element) => {
		return accumulator || element(liveNeighbours);
	}, false);

	return create(resultRules);
}

var aliveRules = []; //to implement!!

var deadRules = [
	(n) => n==3,
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