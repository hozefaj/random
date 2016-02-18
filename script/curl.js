// lets operating system we want to run file in node`

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// to check status code of pages in synchrobnus fashion using node
// $ npm install sync-request
// $ node curl.js

var request = require('sync-request'),
    fs = require('fs'),
    path = require('path'),
    i = 0;
    country = process.argv[2],
    locale = process.argv[3];

var orglist = (fs.readFileSync(path.resolve(__dirname, 'orginalURL.txt'), 'utf8')).toString().split("\n"),
    url = '',
    options = {},
    res = '';

for (i in orglist) {

    //url = path.join('https://localhost.paypal.com:8443/', country.toLowerCase(), '/webapps/mpp/', orglist[i]);
    //console.log(url);
    // options = {
    //     qs: {
    //         "country.x": country.toLowerCase(),
    //         "locale.x": locale.toLowerCase()
    //     }
    // };
    res = request('GET', orglist[i]);
    console.log(url + " : " + res.statusCode);
}