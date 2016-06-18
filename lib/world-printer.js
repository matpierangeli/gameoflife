var alive = require('./cell.js').createAliveCell();

var worldPrinter = (world, writer) => {
    var output = world.currentMatrix.map(x => {
      return x.map(y => {
        return (y.currentState == alive.currentState) ? "x" : "-";
      }).join('');
    }).join('\n');
    
    writer(output);
};

module.exports = worldPrinter;