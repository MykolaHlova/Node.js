const fs = require('fs');

function addPhoto(setPhoto, getPhoto){

    fs.createReadStream(getPhoto).pipe(fs.createWriteStream(setPhoto));
    console.log('Done');
}

module.exports = addPhoto;


