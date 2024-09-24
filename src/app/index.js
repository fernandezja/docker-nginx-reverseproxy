const express = require('express')
const app = express()
const port = 3000

let randomName = null;

app.get('/', (req, res) => {
  if(randomName==null){
    randomName = randomString(4);
  }

  console.log('App '+ randomName);

  res.send('Hello World! | '+ randomName);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function randomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}