
const writeCards = ( names, event ) => {
  let thankYouCards = [];
  for(let i = 0; i < names.length; i++) {
    thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  };
  return thankYouCards
};

const countDown = (num) => {
  while(num >= 0) {
    console.log(num);
    num--;
  }
}