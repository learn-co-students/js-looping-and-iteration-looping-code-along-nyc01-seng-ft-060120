// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"];
const birthday = "birthday"

function writeCards(names, birthday) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
    }
    return cards
}

////////////////////////////////////////////////////////////////////////////////////
startingNumber = 10

function countDown(startingNumber) {
    let counter = 0;
    while (startingNumber > counter) {
        console.log(startingNumber);
        startingNumber -= 1;
    } 
    console.log(startingNumber)
}