//--- depencies ---
import dotenv from 'dotenv';
import express from 'express';
const app = express();
import cors from 'cors';
dotenv.config();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080

//--- connecting pool ---
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
pool.connect();

//--- routes ---
app.get('/', (req, res) => {
    res.send('Hello World')
});

//--- routes to show all wallets ---
app.get('/api/wallet', (req, res) => {
    pool.query('SELECT * FROM wallet ORDER BY ID').then((result) => {
        res.send(result.rows)
    })
})

//--- route to show singular wallet---
app.get('/api/wallet/:id', (req, res) => {
    pool.query(`SELECT * FROM wallet WHERE id=${req.params.id}`).then((result) => {
        res.send(result.rows)
    })
})

app.post('/api/wallet', (req, res) => {
    let walletName = req.body.name
    let coin = req.body.coin
    let amount = req.body.amount
    let value = req.body.value
    let dateOfPurchase = req.body.dateOfPurchase
    pool.query(`INSERT INTO wallet (name, coin, amount, value, dateOfPurchase) VALUES ('${walletName}', '${coin}', ${amount}, ${value}, ${dateOfPurchase}) RETURNING *;`).then((result) => {
        res.send(result.rows)
    })
})

app.delete('/api/wallet/:id', (req,res)=>{
    pool.query(`DELETE FROM wallet WHERE id=${req.params.id};`).then((result)=>{
        res.send(result.rows)
    })
})



//--- setting port listener ---
app.listen(PORT, (error) => {
    if (error) {
        console.error('error')
    } else {
        console.log(`server running at ${PORT}`)
    }
});