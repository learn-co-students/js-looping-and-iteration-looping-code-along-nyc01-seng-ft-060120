// Code your solutions in this file
const friends = ["Ada", "Brendan", "Ali"]
let event = "birthday"

function writeCards (friends, event) { 
    let thankYouCards = []
    for (let i=0; i<friends.length; i++) {
        thankYouCards.push(`Thank you, ${friends[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards;
}

function countDown ( startingNumber ) {
    while ( startingNumber > 0 ) {
        console.log( startingNumber );
        startingNumber -= 1;
    }
    console.log(startingNumber);
}

