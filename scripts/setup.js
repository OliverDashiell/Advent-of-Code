// Imports
const fs = require('fs')
const get_target_path = require(`${__dirname}/../helpers/get_target_path.js`)

// get the target and path from the args or defaults
// get the target and path from the args or defaults
const args = get_target_path(process.argv.slice(2))

// display target for setup
console.log(`Setting up answer template for ${args.target}.\n`)

try {
    // set the folder
    const folder = args.path
    if(!fs.existsSync(folder)) fs.mkdirSync(folder)

    // set the answer file
    const template = `${__dirname}/../helpers/template.js`
    const answer = `${folder}/answer.js`
    if(!fs.existsSync(answer)) fs.copyFileSync(template,answer)

    // set the input file
    const input = `${folder}/input.txt`
    if(!fs.existsSync(input)) fs.writeFileSync(input,'')
} 
catch (err) {
    console.error('Failed to setup this answer.')
    console.error(err)
    process.exit(0)
}

console.log(`Done.\n`)