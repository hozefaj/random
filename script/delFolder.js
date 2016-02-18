/*jslint node:true */
/*jslint white: true */
var fs = require('fs');
var path = require('path');
var del = require('delete');

var contents = fs.readFileSync(path.resolve(__dirname, 'orginalURL.txt'), {encoding: 'utf-8'}),
    array = contents.toString().split("\n"),
    i=0;

for (i in array) {
    del.sync(path.join('/Users/hjodiawalla/Desktop/MPP/MPPContent/ContentRoot/', array[i]), {force: true});
}