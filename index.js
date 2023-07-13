import express from 'express';
import router from './router/portfolio.router.js';
import connectDB from './lib/db-connect.js';
import { config } from 'dotenv';
import cors from 'cors';

config()
let app = express();
const port = process.env.PORT;
app.use(cors());

connectDB()

app.listen(port, (req, res) => {
    console.log(`App running at port http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello world')
})


app.use('/portfolio', router)