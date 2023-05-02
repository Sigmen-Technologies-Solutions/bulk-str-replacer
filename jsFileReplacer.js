const fs = require('fs'); 
const srtingReplacer = function(filePath,replacableString,replacingString){
    fs.readFile(filePath, 'utf-8', function(err, data){
        if (err) throw err;
        // var newTxt = data.replace(replacableString, replacingString);
        var newTxt = data.split(replacableString)[0] + replacingString;
        fs.writeFile(filePath, newTxt, err => {
            if (err) {
            console.error(err);
            }
        });
    });
}
module.exports = {fileReplacer: srtingReplacer};