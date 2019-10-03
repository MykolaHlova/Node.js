const fs = require('fs');

function student (name, group, data) {

   fs.mkdir(`./${group}/${name}`, err => {

       if (!err) {
           console.log('Student saved');
       }
   });

   fs.writeFile(`./${group}/${name}/info.txt`, data, err => {

        if (!err) {
            console.log('Info saved');
        }
    })
};

module.exports = student;

