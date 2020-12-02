module.exports = function(args) {
    // set defaults
    const today = new Date()
    let target_year = today.getFullYear()
    let target_day = today.getDate() > 24 ? 24 : today.getDate()

    // check the target can be set from the args
    if(args.length > 0)
    {
        if(!args[0].includes('/')) {
            console.log(`Could not interpret target ${args[0]}. Please check the format of your args.`)
            process.exit(0)
        }
        // get the target year and day from the first arg
        target_year = args[0].split("/")[0]
        target_day = args[0].split("/")[1]
    }

    // set the path and target
    const target = `${target_year}/${target_day}`
    const path = `${__dirname}/../answers/${target}`

    // return parsed result
    return {target,path}
}