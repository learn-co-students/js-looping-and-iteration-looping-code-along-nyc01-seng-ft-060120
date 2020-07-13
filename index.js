// Code your solutions in this file

const array = ["jill","ben","amanda"];
const event = "birthday";

function writeCards(array, event) {
    let thanks = []
     for (let i = 0; i < array.length; i++){
        thanks.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return thanks;
}

writeCards(array, event);


function countDown( num ) {
    while ( num > 0 ) {
      console.log( num );
      num -= 1;
    }
    console.log( num );
  }
  

// function countDown(num){
//     let i = num;
//     while (i > -1){
//     console.log(`${i}`)
//     i -= 1;}
// }

countDown(3);

