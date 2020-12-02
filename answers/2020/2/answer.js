module.exports = function(input) {
    // prepare result
    let results = []

    // parse input
    const entries = input.split('\n');

    // answer part 1
    let valid = [];
    for (let i = 0; i < entries.length; i++) {
        const element = entries[i].split(': ');
        const password = element[1] ? element[1] : "";
        const policy = element[0].split(' ');
        const target = policy[1];
        const range = policy[0].split('-');
        const lower = range[0];
        const upper = range[1];
        let count = 0;
        for (let j = 0; j < password.length; j++) {
            const character = password.charAt(j);
            if(character === target) count++;
        }
        if(count >= lower && count <= upper) valid.push(element.join(': '));
    }
    results.push(`First policy says ${valid.length}/${entries.length} are valid.`);

    // answer part 2
    valid = [];
    for (let i = 0; i < entries.length; i++) {
        const element = entries[i].split(': ');
        const password = element[1] ? element[1] : "";
        const policy = element[0].split(' ');
        const range = policy[0].split('-');
        const lower_match = password.charAt(range[0]-1)==policy[1];
        const upper_match = password.charAt(range[1]-1)==policy[1];
        if((lower_match || upper_match) && lower_match != upper_match) valid.push(element.join(': '));
    }
    results.push(`Second policy says ${valid.length}/${entries.length} are valid.`);

    // return answers to both parts
    return results
}