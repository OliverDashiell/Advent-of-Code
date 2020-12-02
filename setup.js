const fs = require('fs')

// get the current year to use as a root folder
const year = new Date().getFullYear();

try {
    for (let index = 1; index < 25; index++) {
        const path = 'src/'+year+'/'+index;
        fs.mkdirSync(path);
        fs.writeFileSync(path+'/answer.js','')
        fs.writeFileSync(path+'/input.txt','')
    }
} 
catch (err) {
    console.error(err)
}