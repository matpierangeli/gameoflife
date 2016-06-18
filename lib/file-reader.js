const fs = require('fs');
var cell = require('./cell.js');

var fileName = process.argv[2];

var fileReader = (fileName, callback) => {
  fs.readFile(__dirname + '/../resources/' + fileName, 'utf8', (err, data) => {
    if (err) throw err;
    var result = data.split('\n').map(x => {
      return x.split('').map(y => {
        if(y==='O')
          return cell.createAliveCell();
        else if(y==='.')
          return cell.createDeadCell();
      });
    });
    callback(result);
  });
}

module.exports = fileReader;