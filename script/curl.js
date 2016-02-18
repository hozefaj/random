/*jslint node:true, devel: true */
// lets operating system we want to run file in node

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var request = require('sync-request'),
    fs = require('fs'),
    path = require('path'),
    i = 0,
    country = process.argv[2],
    locale = process.argv[3];

var orglist = (fs.readFileSync(path.resolve(__dirname, 'orginalURL.txt'), 'utf8')).toString().split("\n"),
    url = '',
    options = {},
    res = '';

for (i in orglist) {
    res = request('GET', orglist[i]);
    console.log(url + " : " + res.statusCode);
}