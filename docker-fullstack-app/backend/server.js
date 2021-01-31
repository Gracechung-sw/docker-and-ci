const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.listen(5000, () => {
  console.log('어플리케이션이 서버 5000번 포트에서 실행되었습니다.');
});
