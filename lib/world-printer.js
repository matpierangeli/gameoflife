var alive = require('./cell.js').createAliveCell();

var worldPrinter = (currentWorld, writer) => {
    var output = currentWorld.currentMatrix.map(x => {
      return x.map(y => {
        return (y.currentState == alive.currentState) ? "x" : "-";
      }).join('');
    }).join('\n');
    
    writer(output);
};

module.exports = worldPrinter;