const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/pomodoro', (req, res) => {
  res.render('pomodoro')
})

app.get("/credit-card", (req, res) => {
  res.render("credit-card");
});

app.get("/countdown", (req, res) => {
  res.render("countdown");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})