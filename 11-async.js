const {readFile, writeFile} = require('fs')

console.log('start')
kt
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', 
            `Here is the result: ${first}, ${second}` ,
            (err, final) => {
            if(err){
                console.log(err)
                return 
            }
            console.log('done with this task')
        }
        )
    })
})
console.log('starting the next task')