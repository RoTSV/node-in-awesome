//console.log(__dirname);
const path = require('path');
//console.log(path.basename(__dirname));
//console.log(path.dirname(__filename));
//console.log(path.extname('style.module.scss'));
//console.log(path.extname(__filename));
//console.log(path.extname('style.module.scss'));
//console.log(path.extname('www'));
//console.log(path.join(__filename, 'utils', '..', 'public'));
//console.log(path.parse(__filename));
//console.log(path.parse(__filename).name);
//console.log(__filename.split(path.sep));
const fs = require('fs');
let ert = path.join(__dirname, 'public', 'main.html');
fs.writeFile(
    ert,
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="./main.css">
        <title>Document</title>
    </head>
    <body>
       <h1>Привет Мир</h1> 
    </body>
    </html>`,

    (err)=>{
        if(err)throw err;
        console.log("dfdfdfdfdfdf");
    }
)
