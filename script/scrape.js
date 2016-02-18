/*jslint white: true */
/*jslint node:true */
'use strict';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var fs = require('fs'),
    request = require('sync-request'),
    cheerio = require('cheerio'),
    path = require('path'),
    i = 0,
    url = '',
    dust = '';

var MetaInspector = require('node-metainspector');
var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('orginalURL.txt');

var orglist = (fs.readFileSync(path.resolve(__dirname, 'orginalURL.txt'), 'utf8')).toString().split("\n");

for (i in orglist) {

    url = orglist[i];
    var res = request('GET', url);

    var content = res.body;

    var pageArr = content.toString().split("\n").filter(function(elem) {
        return /s.pageName/.test(elem);
    });

    console.log(i + " : " + pageArr.toString());
    if (pageArr.length) {
        fs.appendFile('destinationURL.txt', (pageArr.toString()).substring(12) + "\n", 'utf8');
    } else {
        fs.appendFile('destinationURL.txt', "No page name \n", 'utf8');
    }
}

/*var data = '';

lr.on('line', function (line) {
    // 'line' contains the current line without the trailing newline character.
    url = 'https://www.paypal.com/us/webapps/mpp/' + line;
    var client = new MetaInspector(url, {
        timeout: 3000
    });

    client.on("fetch", function() {
        data = '{"description": "'+client.description+'", "keywords": "'+client.keywords+'", "title": "'+client.title+'", "url": "'+client.url+'" },'
        fs.appendFileSync('searchData.js', data);
        data = '';
    });

    client.on("error", function(err) {
        console.log(err);
    });

    client.fetch();
});*/
