function writeCards(array, eventName) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return output;
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}