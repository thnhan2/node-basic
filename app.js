const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
app.use(express.static('public'));

app.get('/about', (req, res) => {
    let a = 1,
        b = 2;
    return res.send(`a + b = ${a + b}`);
});

app.get('/users', (req, res) => {
    const data = fs.readFileSync('./data.txt', 'utf8');
    return res.send(data);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
