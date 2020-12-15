// Imports
const fs = require('fs')
const get_target_path = require(`${__dirname}/../helpers/get_target_path.js`)


// get the target and path from the args or defaults
const args = get_target_path(process.argv.slice(2))

// display target for answer
console.log(`Running answer for ${args.target}.\n`)

// get the input for the day
let input = "";
try {
    // check the answer has been setup
    if(!fs.existsSync(args.path)) require(`./setup.js`)
    // read the input
    input = fs.readFileSync(`${args.path}/input.txt`, 'utf8')
} catch (err) {
    console.error('Failed to load the input for this answer.')
    console.error(err)
    process.exit(0)
}

// run the answer for the target day
const action = require(`${args.path}/answer.js`)
const results = action(input)

// display the result
console.log(`Part One:\n ${results[0]}\n`)
console.log(`Part Two:\n ${results[1]}\n`)