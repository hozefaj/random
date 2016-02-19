/*jslint node:true */
var fs = require('fs');
var path = require('path');


var file = "";
var jsonOutput = '',
    pageName = '';
var filePath = '';

/*fs.readFile(file, {encoding: 'utf-8'},function (err, data) {
    if(err) {
        console.log(err);
    } else {
        var array = data.toString().split("\n");
        for(i in array) {
            filePath = path.join("/Users/hjodiawalla/Desktop/MPPContentDevelopment/MPPContent/ContentRoot/US/en/", array[i], "/metadata.json")
            fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data) {
                if (err) {
                    console.error(err);
                } else {
                    jsonOutput = JSON.parse(data);
                    pageName = jsonOutput.analyticsDescriptor.website + ":" + jsonOutput.analyticsDescriptor.feature + ":" + (jsonOutput.analyticsDescriptor.subFeature1 || "") + ":" + (jsonOutput.analyticsDescriptor.subFeature2 || "") + ":" + jsonOutput.analyticsDescriptor.contentTask;
                    console.log(pageName);
                }
            });
        }
    }
});*/


var contents = fs.readFileSync(file, {encoding: 'utf-8'}),
    array = contents.toString().split("\n"),
    json = '',
    i=0;

for (i in array) {
    filePath = "/Users/hjodiawalla/Desktop/MPPContentDevelopment/MPPContent/ContentRoot/JM/en/"+array[i]+"/metadata.json";
    json = fs.readFileSync(filePath, {encoding: 'utf-8'});
    jsonOutput = JSON.parse(json);
    pageName = jsonOutput.analyticsDescriptor.website + ":" + jsonOutput.analyticsDescriptor.feature + ":" + (jsonOutput.analyticsDescriptor.subFeature1 || "") + ":" + (jsonOutput.analyticsDescriptor.subFeature2 || "") + ":" + (jsonOutput.analyticsDescriptor.contentTask || "");
    console.log(pageName);
}