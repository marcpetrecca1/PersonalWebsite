const express = require('express');
const app = express();
const port = process.env.PORT || 443;

app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));

app.get('/', (req, res) => {
  res.status(200).send("Reaching server successfully");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});