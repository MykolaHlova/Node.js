const fs = require('fs');

const createStudens = require('./createStudent');

const addPhoto = require('./addPhoto');


fs.mkdir(`./jscx-1800`, (err) => {

    if(err) console.log(err);
});

fs.mkdir(`./jscx-2000`, (err) => {

    if (err) console.log(err);
});

createStudens('Ivan_Ivan', 'jscx-1800', 'age: 27');
createStudens('Vitalik_Vitalik','jscx-2000','age:25');

addPhoto('./jscx-1800/Ivan_Ivan/photo.jpg','../1.jpg');
addPhoto('./jscx-2000/Vitalik_Vitalik/photo.jpg','../2.jpg');
