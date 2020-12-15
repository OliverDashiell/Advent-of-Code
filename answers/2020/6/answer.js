module.exports = function(input) {
    // prepare result
    let results = []

    // parse input
    const groups = input.split('\n\n')

    // answer part 1
    let affirmed = []
    for (let i = 0; i < groups.length; i++) {
        const answers = groups[i].replace(/\n/g,'').split('')
        const unique_answers = [...new Set(answers)]
        affirmed.push(unique_answers.length)
    }
    let sum = affirmed.reduce((a, b) => a + b)
    results.push(`The sum total of all unique affirmative responses within groups is ${sum}.`)

    // answer part 2
    affirmed = []
    for (let i = 0; i < groups.length; i++) {
        const head_count = groups[i].split('\n').length
        const answers = groups[i].replace(/\n/g,'').split('')
        let answer_count = {}
        let all_affirmed = []
        for (let j = 0; j < answers.length; j++) {
            const answer = answers[j]
            let count = answer_count[answer] || 0
            count++
            answer_count[answer] = count
            if(count == head_count) all_affirmed.push(answer)
        }
        affirmed.push(all_affirmed.length)
    }
    sum = affirmed.reduce((a, b) => a + b)
    results.push(`The sum total of all group affirmative responses is ${sum}.`)

    // return answers to both parts
    return results
}