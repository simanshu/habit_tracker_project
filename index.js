// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Sample data structure
let habits = [];

// Initialize sample habits
habits.push({ name: 'Reading a Book', status: [] });
habits.push({ name: 'Going to the Gym', status: [] });

app.get('/', (req, res) => {
  res.render('index', { habits });
});

app.get('/new_habit', (req, res) => {
  res.render('new_habit');
});

app.post('/add_habit', (req, res) => {
  const habitName = req.body.habitName;
  habits.push({ name: habitName, status: [] });
  res.redirect('/');
});

app.post('/update_status', (req, res) => {
  const habitIndex = req.body.habitIndex;
  const status = req.body.status;
  const date = new Date().toLocaleDateString();
  
  habits[habitIndex].status.push({ date, status });
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
