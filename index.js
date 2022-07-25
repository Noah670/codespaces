let express = require('express');
let app = express();
let ejs = require('ejs');
let jackwario = 'snowing on Mount Fuji'
const haikus = require('./haikus.json');
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');

// adding a sample test case


app.get('/', (req, res) => {
  res.render('index', {haikus: haikus});
});

app.listen(port);