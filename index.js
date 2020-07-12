// Code your solutions in this file
function writeCards(names, event){
    let notes = []
    for (let i = 0; i < names.length; i++){
        notes.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return notes
};

function countDown(value){
    let i = 0
    while(i<=value){
        console.log(value-i)
        i++
    }
}

