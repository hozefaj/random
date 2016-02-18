// validating CMS redirect txt file

var fs = require('fs');
var list = (fs.readFileSync('orginalURL.txt', 'utf8')).toString().split("\n");

for(i in list) {
    if(list[i].match(/\".*\" := \"{1}.*\",/g) == list[i]){
        //console.log([i] + ": MATCHING: "+ list[i]);
    } else {
        console.log("ERROR: "+ list[i]);
    }
}