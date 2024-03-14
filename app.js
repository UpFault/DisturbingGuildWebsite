const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'home.html'));
});

app.get('/verification', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'verification.html'));
});

app.get('/info', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'info.html'));
});

app.get('/features', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'features.html'));
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
