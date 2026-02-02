const express = require("express");
const cors = require("cors");

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());

app.get('/api/games', (req, res) => {
  res.json([
    { id: 1, name: 'Munchkin' },
    { id: 2, name: 'Zelda' }
  ]);
});

app.listen(port, () => {
  console.log(`Rodando porta ${port}`);
});
