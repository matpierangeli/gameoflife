var fileReader = require('./file-reader.js');
var initialWorld = require('./world.js');
var worldPrinter = require('./world-printer.js');

var stdoutWriter = (output, inline) => {
  process.stdout.write(output);
  process.stdout.write(inline ? '' : '\n');
}

stdoutWriter('\033c', true); //reset terminal to initial state

var i = 1;
var repeater = (world, worldPrinter, writer) => {
  setTimeout(() => {
    //http://ascii-table.com/ansi-escape-sequences-vt-100.php
    writer('\033[f', true) //move cursor to upper left corner

    worldPrinter(world, writer);
    
    writer("\niteration:" + i++);
    repeater(world.nextGeneration(), worldPrinter, writer);
  }, 100);
}

var fileName = process.argv[2] || 'default.txt';

fileReader(fileName, (matrix) => {
  var world = initialWorld(matrix);
  repeater(world, worldPrinter, stdoutWriter);
});