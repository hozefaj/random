/*
    Working Now

    This will construct MPP URLs from a text list. The raw list format (/ContentRoot/NZ/en/business-activation)
    and output result (https://www.paypal.com/webapps/mpp/business-activation?country.x=NZ&locale.x=en_NZ).
*/

var fs = require('graceful-fs');
var path = require('path'),
var list = (fs.readFileSync(path.join(__dirname, 'orginalURL.txt'), 'utf8')).toString().split("\n");

var array_with_url_parts = [];

for(var i in list) {
    array_with_url_parts.push(list[i].split("/"));
}
//console.log(array_with_url_parts); //[ '', 'ContentRoot', 'MY', 'en', 'business-activation\r' ]
for (var j in array_with_url_parts) {
    var pageURL = "https://www.paypal.com/webapps/mpp/"+array_with_url_parts[j][4].replace(/(\n|\r)+$/, ''),
        country_locale = "?country.x="+array_with_url_parts[j][2]+"&locale.x="+array_with_url_parts[j][3]+"_"+array_with_url_parts[j][2];
    var fullURL,
        array_part = "";

    //console.log("length: " + array_with_url_parts[j].length);
    if (array_with_url_parts[j].length > 5) {
        // if url page is nested in folder(s) (ie /ContentRoot/VN/en/security/directory/sell-toolstobuildbuyer), concatenate everything after /en/.
        for (var k = 4; k < array_with_url_parts[j].length; k++) {
            array_part += array_with_url_parts[j][k].replace(/(\n|\r)+$/, '')+"/";
            //console.log(array_part);
            pageURL = ("https://www.paypal.com/webapps/mpp/"+array_part).slice(0, -1);
        }
    }
    fullURL = pageURL+country_locale;
    console.log(fullURL);
    writeToFile(fullURL);
}
function writeToFile(urlOutput) {
    fs.appendFile(outputFile, urlOutput+"\n", function(err) {
        if(err) {
            return console.log(err);
        }
        //console.log("The file was saved!");
    });
}