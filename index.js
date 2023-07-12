import express from 'express';
import router from './router/portfolio.router.js';
import connectDB from './lib/db-connect.js';

let app = express();
const port = 3000;

connectDB()

app.listen(port, (req, res) => {
    console.log(`App running at port http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello world')
})


app.use('/portfolio', router)