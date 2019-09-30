const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('Hello Class Super Tofu'))

app.listen(port, () => console.log(`Express test running on port ${port}`))