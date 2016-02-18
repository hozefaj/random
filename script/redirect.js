process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var fs = require('fs'),
    path = require('path'),
    request = require('sync-request');

// :0 or : 0 (use both)
var oldV = '"redirectType": 0';
var newV = '"redirectType": 301';
var oldR = '"defaultRedirectURI": ""';

var orglist = [],
    destlist = [],
    metadata = '',
    dust = '',
    result = '',
    content = '';

// creating list of orignal URL's
var orglist = (fs.readFileSync('orginalURL.txt', 'utf8')).toString().split("\n");
var destlist = (fs.readFileSync('destinationURL.txt', 'utf8')).toString().split("\n");

for(i in orglist) {
    metadata = path.join('/Users/hjodiawalla/Desktop/MPP/MPPContent/ContentRoot/US/en/', orglist[i], '/metadata.json');
    dust = path.join('/Users/hjodiawalla/Desktop/MPP/MPPContent/ContentRoot/US/en/', orglist[i], '/page.dust');
    content = path.join('/Users/hjodiawalla/Desktop/MPP/MPPContent/ContentRoot/US/en/', orglist[i], '/resources/content.properties');

    // cleaning the page.dust
    result = fs.writeFileSync(content, '', 'utf8');

    // curl page to generate new page.js
    var url = 'https://localhost.paypal.com:8443/us/webapps/mpp/' + orglist[i];
    var options = {
        qs: {
            "country.x": 'us',
            "locale.x": "en_US"
        }
    }
    var res = request('GET', url, options);
    console.log(url + " : " +res.statusCode);

    // adding the 301 redirect
    /*result = (fs.readFileSync(metadata, 'utf8')).replace(oldV, newV);
    fs.writeFileSync(metadata, result, 'utf8');
    result = (fs.readFileSync(metadata, 'utf8')).replace(oldR, '"defaultRedirectURI":'+'"/webapps/mpp/'+destlist[i]+'"');
    fs.writeFileSync(metadata, result, 'utf8');*/

    // append to metadata.json
    //var append = '"redirectInfo":{"redirectType": 301,"defaultRedirectURI": "/webapps/mpp/'+destlist[i]+'"}';
    //console.log(append);
    //fs.appendFileSync(metadata, append);
}