const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');


const app = express();


// Connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev', {
  useMongoClient: true
})
.then(() => console.log('Mongodb Connected...'))
.catch(err => console.log(err));

// Load Idea Model
require('./models/Idea')
const Idea = mongoose.model('ideas');

//HandleBars middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Index route
app.get('/', (req, res) => {
  const title = 'Welcome'
  res.render('index', {
    title: title
  })
});

// About Route
app.get('/about', (req, res)=> {
  const title = 'About'
  res.render('about',{
    title: title
  });
});

// Add Idea form
app.get('/ideas/add', (req, res)=> {
  res.render('ideas/add');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});