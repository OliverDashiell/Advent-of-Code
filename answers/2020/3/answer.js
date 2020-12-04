module.exports = function(input) {
    // prepare result
    let results = []

    // parse input
    const tree = '#'
    const lines = input.split('\n')

    // answer part 1
    let offset = 0
    let count = 0
    for (let index = 0; index < lines.length; index++) {
        let line = lines[index].repeat(index)
        if(line.charAt(offset)==tree) count++
        offset += 3
    }
    results.push(`There are exactly ${count} trees on the path through this journey.`)

    // answer part 2
    let journies = [[1,1],[3,1],[5,1],[7,1],[1,2]]
    let counts = [0,0,0,0,0]
    let answer = 1
    for (let i = 0; i < journies.length; i++) {
        const journey = journies[i]
        count = counts[i]
        offset = 0
        for (let j = 0; j < lines.length; j++) {
            let line = lines[j].repeat(j)
            if(j % journey[1] == 0)
            {
                if(line.charAt(offset)==tree) count++
                offset += journey[0]
            }
        }
        counts[i] = count
        answer *= count
    }
    results.push(`For the ${journies.length} journies; ${counts} trees were found. The product is ${answer}.`)

    // return answers to both parts
    return results
}