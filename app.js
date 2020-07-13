const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

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
  const title = 'about'
  res.render('about',{
    title: title
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});