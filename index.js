// Code your solutions in this file

const writeCards = (names, event) => {
  let messages = []
  for (let name of names) {
    messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`)
  }
  return messages;
}
const countDown = (n) => {
  for(let i = n; i >= 0; i--) {
    console.log(i);
  }
}
