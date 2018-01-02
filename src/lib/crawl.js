const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const request = require('request');
const url = 'https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/%ED%97%A4%EB%93%9C%EB%B1%85%EC%9E%89?api_key=RGAPI-9e84209b-b5a3-4459-b67c-1de6986f095b';
const url2 = 'https://jsonplaceholder.typicode.com/users';

// x-response-time

request({
    url: url2,
    method: 'GET'
}, function (error, response, body) {
    console.log(body)
});

app.listen(3000);