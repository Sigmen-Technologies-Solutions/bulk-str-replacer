const {jsFileArrCreator} = require('./jsFileArrCreator.js');
const {fileReplacer} = require('./jsFileReplacer.js');
const executor = async function(bsPath,replacableStr,replacingStr,fileTyp){
    let filePathArr = jsFileArrCreator(bsPath,fileTyp);
    for(var itr = 0; itr < filePathArr.length; itr++){
        fileReplacer(filePathArr[itr],replacableStr,replacingStr);
    }
}
module.exports = {fileStrReplace : executor};

