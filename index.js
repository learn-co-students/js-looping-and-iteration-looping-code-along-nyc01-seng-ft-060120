// Code your solutions in this file
function writeCards(names, event){
    const thanksCollect = [];

    for (let index = 0; index < names.length; index++){
        let thanks = `Thank you, ${names[index]}, for the wonderful surprise gift!`;
        thanksCollect.push(thanks); 
    }
    return thanksCollect
}


function countDown(positiveNum) {
    while (positiveNum >= 0) {
        console.log(positiveNum);
        positiveNum -= 1
    }
}
