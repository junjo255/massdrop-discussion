const express = require('express');
const parser = require('body-parser') //instantiate an express object by calling it. 
// const axios = require('axios');
const path = require('path');
const app = express();
const sqlite3 = require('sqlite3');
const db = require('./db/index.js')
// console.log(__dirname)

app.use(parser.json());
app.use(express.static(`${__dirname}/../public`));


app.get('/products/:product_id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// grabs dirname  /public/index path
// /api/products/${itemId}/discussions

app.get(`/api/products/:itemId/discussions`, (req, res) => {

  const discussions = req.params.product_id

  db.all(`SELECT * FROM messages m INNER JOIN user u on u.id = m.sending_user_id INNER JOIN product_threads p on p.thread_id = m.thread_id WHERE p.product_id = "${discussions}"`,
    (err, rows) => {
       if (err) {
         console.log(err)
       } else {
        
         res.send(rows)
       }   
    })
});


let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);











  // app.get('/users', (req, res) => {
  //   // db.all() fetches all results from an SQL query into the 'rows' variable:
  //   db.all('SELECT name FROM users_to_pets', (err, rows) => {
  //     console.log(rows);
  //     const allUsernames = rows.map(e => e.name);
  //     console.log(allUsernames);
  //     res.send(allUsernames);
  //   });
  // });
});


// seed -> indexedDB


// app.get('/products/:product_id/discussions', (req,res) => {
//   db.all('SELECT * FROM messages', (err, rows) => {
//     if (err) {
//       console.log(err)
//     }
//     res.send(rows)
//   })
// })
