const express = require('express');
const redis = require('redis');

//Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// redis client 생성
const client = redis.createClient({
  host: 'redis-server', //docker환경인 경우, 즉 docker compose를 사용할 때는 docker-compose.yml 파일에 명시한 컨테이너 이름으로 host를 준다.
  //docker 환경이 아닌 경우, 즉 Redis 서버가 작동하는 곳이 redis-server.com이라면 host는 https://redis-server.com이 된다.
  port: 6379,
});

//APP
const app = express();

// 숫자는 0 부터 시작
client.set('number', 0);

// 해당 주소에 들어 올 때마다 숫자가 1씩 증가하도록 하는 프로그램
app.get('/', (req, res) => {
  client.get('number', (err, number) => {
    //현재 숫자를 가져 온 후에 1씩 증가
    res.send('방문자 수: ' + number);
    client.set('number', parseInt(number) + 1);
  });
});

app.listen(PORT, HOST);
console.log(`Running 2 on http://${HOST}:${PORT}`);
