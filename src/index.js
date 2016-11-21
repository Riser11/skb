import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/2a', (req, res) => {

  const vA = Number(req.query.a);
  const vB = Number(req.query.b);
  const sum = String((vA || 0) + (vB || 0));

  return res.send(sum);

});

app.get('/2b', (req, res) => {
  const input = (req.query.fullname);


  let fio = 'Invalid fullname';
  if (input.match(/[0-9_/]/) != null) {
    return res.send(fio);
  } else {
    const spl = input.split(' ');
    if (spl.length <= 3) {
      fio = '';
      fio += spl[spl.length - 1];
      if (spl.length > 1) {
        fio += ' ' + spl[0].charAt(0) + '.';
        if (spl.length > 2) {
          fio += ' ' + spl[1].charAt(0) + '.';
        }

      }
      if (fio == '') {
        fio = 'Invalid fullname'
      }
    }

    return res.send(fio);
  }
});

app.get('/2c', (req, res) => {

  const input = (req.query.username)
  console.log(req.hostname)
  let start;
  let counter = 0;
  let username;
  while (true) {

    if (input.charAt(input.indexOf('/', counter) + 1) == '/' || input.charAt(input.indexOf('/', counter) - 1) == '/') counter++;
    else {
      start = input.indexOf('/', counter);
      while (input.substring(start + 1, input.length).match(/[a-z]*/) == '') {
        start++
      }
      username = '@' + input.substring(start + 1, input.length).match(/[a-z]*/);
      break;
    }
    if (counter > 10) {
      break;
    }
  }



  return res.send(username);

});

app.get('/2d', (req, res) => {
  if(req.query.color){
let input = req.query.color;
const re = /[0-9a-f]*/ig;
if(input.charAt(0)==' '){input =input.substring(1,input.length)}
const matchedInput = input.match(re)
console.log(input.charAt(1))

for(let i = 0; i<matchedInput.length; i++){
  if (matchedInput[i]=='')  {
  matchedInput.splice(i);
  i=0;
}
}


if(matchedInput.length!=1){
    return res.send('Invalid color');
}
else{
  if(matchedInput[0].length!=3&&matchedInput[0].length!=6){
    return res.send('Invalid color');
  }
  else{
if(matchedInput[0].length==3){
  let temp = matchedInput[0].charAt(0)+matchedInput[0].charAt(0)+matchedInput[0].charAt(1)+matchedInput[0].charAt(1)+matchedInput[0].charAt(2)+matchedInput[0].charAt(2);
  matchedInput[0]=temp;
}
  return res.send('#'+matchedInput[0].toLowerCase());
  }
}
}
else{
    return res.send('Invalid color');
}
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
