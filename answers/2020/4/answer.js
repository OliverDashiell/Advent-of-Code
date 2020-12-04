module.exports = function(input) {
    // prepare result
    let results = []

    // clean up the input
    let clean_input = input.replaceAll('\n\n','__')
    clean_input = clean_input.replaceAll('\n',',')
    clean_input = clean_input.replaceAll(' ',',')

    // parse input
    const entries = clean_input.split('__')

    // answer part 1
    // "cid" optional
    let valid_keys = ["byr","iyr","eyr","hgt","hcl","ecl","pid"]
    let valid_count = 0
    for (let i = 0; i < entries.length; i++) {
        let count = 0
        const document = entries[i]
        const data = document.split(',')
        for (let j = 0; j < data.length; j++) {
            const element = data[j].split(':')
            const field = element[0]
            const value = element[1]
            if(valid_keys.includes(field) && value) count++
        }
        if(count == valid_keys.length) valid_count++
    }
    results.push(`The number of valid documents is exactly ${valid_count}/${entries.length}.`)

    // answer part 2
    validation_rules = {
        "byr": (value) => (value && value.length==4 && parseInt(value)>=1920 && parseInt(value)<=2002),
        "iyr": (value) => (value && value.length==4 && parseInt(value)>=2010 && parseInt(value)<=2020),
        "eyr": (value) => (value && value.length==4 && parseInt(value)>=2020 && parseInt(value)<=2030),
        "hgt": (value) => {
            if(value) {
                height = parseInt(value.match(/\d+/),10)
                return (height >= 150 && height <= 193 && value.endsWith('cm')) 
                    || (height >= 59 && height <= 76 && value.endsWith('in'))
            } 
            else return false
        },
        "hcl": (value) => (value && /#[0-9a-fA-F]{6}/.test(value)),
        "ecl": (value) => (value && ["amb","blu","brn","gry","grn","hzl","oth"].includes(value)),
        "pid": (value) => (value && /^[0-9]{9}$/.test(value))
    }
    valid_count = 0
    for (let i = 0; i < entries.length; i++) {
        let count = 0
        const document = entries[i]
        const data = document.split(',')
        for (let j = 0; j < data.length; j++) {
            const element = data[j].split(':')
            const field = element[0]
            const value = element[1]
            if(validation_rules[field] && validation_rules[field](value) === true) count++
        }
        if(count == valid_keys.length) valid_count++
    }
    results.push(`The number of valid documents is exactly ${valid_count}/${entries.length}.`)

    // return answers to both parts
    return results
}