/*jslint node:true */
// usage: node del.js <country-code> <locale-code>
// example: node del.js US en           
'use strict';
var fs = require('fs'),
    del = require('del'),
    dirPath = '/Users/hjodiawalla/Desktop/MPP/MPPContent/ContentRoot/',
    i = 0,
    path = require('path'),
    recursive = require('recursive-readdir'),
    country = process.argv[2],
    locale = process.argv[3];

dirPath = path.join(dirPath, country.toUpperCase(), '/', locale.toLowerCase(), '/');

recursive(dirPath, ['*.css', '*.dust', '*.js', '*.less', '*.properties', 'context.json', '*.txt', '.DS_Store', '*.xml'], function (err, files) {
    if (err) {
        throw err;
    }
    // Files is an array of filename
    var i = 0;
    for (i in files) {
        cleanContent(files[i]);
    }
});

function cleanContent(filePath) {
    fs.readFile(filePath, 'utf8', function (err, data) {

        if (err) throw err;

        try {
            if (!data) {
                data = "{}";
            }

            var json = JSON.parse(data),
                redirect;

            if (json.redirectInfo) {
                redirect = json.redirectInfo.redirectType;
            } else {
                redirect = 0;
            }

            if (parseInt(redirect, 10) === 301) {

                var pageName = filePath.substring(0, filePath.length - 13),
                    dust = path.join(pageName, 'page.dust'),
                    js = path.join(pageName, 'page.js'),
                    folder = path.join(pageName, 'resources');

                // delete files/folder
                del([dust, js, folder], {
                    'force': true
                }).then(function () {
                    console.log(filePath);
                })['catch'](function (error) {
                    console.log("Failed!", error);
                });
            }
        } catch (e) {
            console.log("Unexpected file(not a .json format): " + filePath);
        }
    });
}
