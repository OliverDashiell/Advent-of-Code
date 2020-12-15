module.exports = function(input) {
    // prepare result
    let results = []

    // parse input
    const cards = input.split('\n')

    // set constants
    const ID_BOUNDARY = 7
    const MAX_ROW = 128
    const MAX_COL = 8
    const ID_MULTIPLIER = 8

    // answer part 1
    let all_ids = []
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i]

        // find the row index
        const row_id = card.slice(0,ID_BOUNDARY)
        let row_indexes = Array.from(Array(MAX_ROW).keys())
        for (let j = 0; j < row_id.length; j++) {
            const lower = row_id[j] == 'F'
            const max = row_indexes.length
            row_indexes = row_indexes.slice(lower ? 0 : max/2, lower ? max/2 : max)
        }

        // find the column index
        const col_id = card.slice(ID_BOUNDARY,card.length)
        let col_indexes = Array.from(Array(MAX_COL).keys())
        for (let j = 0; j < col_id.length; j++) {
            const part_id = col_id[j]
            const lower = col_id[j] == 'L'
            const max = col_indexes.length
            col_indexes = col_indexes.slice(lower ? 0 : max/2, lower ? max/2 : max)
        }

        // calculate seat id
        const seat_id = (row_indexes[0] * ID_MULTIPLIER) + col_indexes[0]
        all_ids.push(seat_id)
    }
    results.push(`The maximum seat ID is ${Math.max(...all_ids)}.`)

    // answer part 2
    all_ids = all_ids.sort((a,b) => a-b)
    let my_seat = null
    for (let i = 1; i < all_ids.length-1; i++) {
        const this_seat = all_ids[i]
        const last_seat = all_ids[i-1]
        if(this_seat-last_seat != 1) my_seat = last_seat+1
    }
    results.push(`My seat ID is ${my_seat}.`)

    // return answers to both parts
    return results
}