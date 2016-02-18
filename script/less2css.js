/**
 * Created by hjodiawalla
 */
'use strict';

var less = require('less'),
    fs = require('fs'),
    Q = require('q');

/*fs.readFile('less/page.less', {'encoding': 'utf-8'}, function(err, data) {
    if (err) throw err;

    less.render(data, {'compress': true})
    .then(function(output) {

            if (!fs.existsSync('css')) {
                fs.mkdirSync('css');
            }

            fs.writeFile("css/style.css", output.css, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("The file was saved!");
                }
            });
        },
        function(error) {
            console.log(error);
        });
});*/

// using promises
function _readfile() {
    return Q.nfcall(fs.readFile, 'less/page.less', {'encoding': 'utf8'});
}

function _renderLess(data){
    return less.render(data, {'compress': true});
}

function _writeFile(output){
    return Q.nfcall(fs.writeFile, 'less/page.css', output.css);
}

 var promises = [
        _readfile,
        _renderLess,
        _writeFile
    ];

promises.reduce(Q.when, Q());