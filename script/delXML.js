var fs = require('fs');
var path = require('path');
var del = require('delete');

var contents = fs.readFileSync(path.resolve(__dirname, 'orginalURL.txt'), {encoding: 'utf-8'});
var array = contents.toString().split("\n");

for (i in array) {
    del.sync(array[i], {force: true});
}