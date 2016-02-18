/*jslint node:true */
var fs = require('fs');

function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}

function func(data) {
  var url = "https://www.paypal.com/us/webapps/mpp/clickthru/" + data + "\n";
  fs.appendFile('output.txt', url, function(err) {
    if (err) throw err;
  });
}

var input = fs.createReadStream('list.txt');
readLines(input, func);