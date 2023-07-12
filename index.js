import express from 'express';

let app = express();
const port = 3000;

app.listen(port, (req, res) => {
    console.log(`App running at port http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello world')
})