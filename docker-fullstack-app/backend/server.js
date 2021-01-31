const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const app = express();

app.use(bodyParser.json());

//DB lists 테이블에 있는 모든 데이터를 프론트 서베에 보내주기
app.get('/api/hi', function (req, res) {
  //데이테베이스에서 모든 정보 가져오기
  res.status(200).send('good');
});

//DB lists 테이블에 있는 모든 데이터를 프론트 서베에 보내주기
app.get('/api/values', function (req, res) {
  //데이테베이스에서 모든 정보 가져오기
  db.pool.query('SELECT * FROM lists;', (err, results, fileds) => {
    if (err) return res.status(500).send(err);
    else return res.json(results);
  });
});

// 클라이언트에서 입력한 값을 데이터베이스 lists 테이블에 넣어주기
app.post('/api/value', function (req, res, next) {
  //데이터베이스에 값 넣어주기
  db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}")`, (err, results, fileds) => {
    if (err) return res.status(500).send(err);
    else return res.json({ success: true, value: req.body.value });
  });
});

app.listen(5000, () => {
  console.log('어플리케이션이 서버 5000번 포트에서 실행되었습니다.');
});
