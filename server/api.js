const express = require('express')
const router = express.Router()
router.get('/users', (req, res, next) => {
  const mysql = require('mysql');
  // TODO: 一般化
  const connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    database: 'htw',
    password: ''
  });
  var ret=[];
  connection.connect();
  connection.query('SELECT * from users;', function(error, row, fields){
    if (error) {
      console.log(error);
    }
    var dat = [];
    for (var i = 0;i < row.length; i++) {
      dat.push({id: row[i].id, name: row[i].name});
    }
    ret = JSON.stringify(dat);
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(ret)
  });
  connection.end();
})
module.exports = router
