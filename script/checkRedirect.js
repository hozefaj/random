/*jslint node:true */
'use strict';

var fs = require('fs'),
    dirPath = '/Users/hjodiawalla/Desktop/MPP/MPPContent/ContentRoot/',
    i = 0,
    path = require('path'),
    recursive = require('recursive-readdir'),
    ignore = ['*.css', '*.dust', '*.js', '*.less', '*.properties', 'context.json', '*.txt', '.DS_Store', '*.bak', '*.png'];

var country = process.argv[2],
    locale = process.argv[3];

dirPath = path.join(dirPath, country.toUpperCase(), '/', locale.toLowerCase(), '/');

recursive(dirPath, ignore, function (err, files) {
    if(err) throw err;
    // Files is an array of filename
    for(i in files) {
        //console.log(files[i]);
        cleanContent(files[i]);
    }
});

function cleanContent(filePath) {
    fs.readFile(filePath, 'utf8', function(err, data) {

        if(err) throw err;

        try {
            if(!data) {
            data = "{}";
            }

            var json = JSON.parse(data),
                redirect;

            if(json.redirectInfo) {
                redirect = json.redirectInfo.redirectType;

                if(parseInt(redirect, 10) === 301) {

                    var defaultRedirectURI = json.redirectInfo.defaultRedirectURI;

                    if(defaultRedirectURI.indexOf("paypal.com") > -1) {
                        console.log(defaultRedirectURI + " : " + filePath);
                    }
                }
            }
        } catch (ex) {
            console.log("Unexpected file(not a .json format): " + filePath);
        }

    });
}