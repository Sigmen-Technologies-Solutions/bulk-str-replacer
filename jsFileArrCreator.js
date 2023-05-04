const fs = require('fs'); 
const pa = require('path');
const getFilePath = function(path,fileTyp){
    var files = fs.readdirSync(path, { withFileTypes: false });
    var allFiles = [];
    for(var i = 0; i < files.length; i++){
        if(fs.statSync(path + '/' + files[i]).isDirectory()){
            let recur = getFilePath(path + '/' + files[i],fileTyp);
            allFiles = [...allFiles, ...recur];
        } else if(pa.extname(path + '/' + files[i]) == '.' + fileTyp) {
            allFiles = [...allFiles,path + '/' + files[i]];
        }
    }
    return allFiles;
}
module.exports = {jsFileArrCreator: getFilePath};