const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
extended: true
}))
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    database:"jewelery",
    user: "root",
    password: ""
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get('/jewelry', (req, res) => {
    const sql = `
        SELECT * 
        FROM jewelry
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})