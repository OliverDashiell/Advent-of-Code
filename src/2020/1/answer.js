const fs = require('fs')

let input = "";
try {
    input = fs.readFileSync('src/2020/1/input.txt', 'utf8')
} catch (err) {
    console.error(err)
}

console.log("\nDay 1:\n");
const list = input.split('\n');

answer = []
for (let i = 0; i < list.length; i++) { 
    if(answer.length == 2) break; 
    const item = list[i]; 
    for (let j = 0; j < list.length; j++) { 
        if(answer.length == 2) break; 
        const compare_item = list[j];
        if(parseInt(item)+parseInt(compare_item)==2020) { 
            answer.push(item,compare_item); break; 
        }
    } 
}
result = answer[0]*answer[1];
console.log("The two values that add to 2020 are "+answer+ " so the first answer is "+result+".");

answer = []
for (let i = 0; i < list.length; i++) { 
    if(answer.length == 3) break; 
    const item = list[i]; 
    for (let j = 0; j < list.length; j++) { 
        if(answer.length == 3) break; 
        const compare_item = list[j]; 
        for (let k = 0; k < list.length; k++) { 
            const compare_item2 = list[k]; 
            if(parseInt(item)+parseInt(compare_item)+parseInt(compare_item2)==2020) { 
                answer.push(item,compare_item,compare_item2); break; 
            } 
        } 
    } 
}
result = answer[0]*answer[1]*answer[2];
console.log("The three values that add to 2020 are "+answer+ " so the second answer is "+result+".");

console.log("\n");