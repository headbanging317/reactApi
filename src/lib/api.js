import axios from 'axios';
// const request = require('request');
// // const crawl = require('./crawl');
// const Koa = require('koa');
// const app = new Koa();
// const Router = require('koa-router');
// const router = new Router();
// const rp = require('request-promise');
// const url = 'https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/%ED%97%A4%EB%93%9C%EB%B1%85%EC%9E%89?api_key=RGAPI-9e84209b-b5a3-4459-b67c-1de6986f095b';
// const url2 = 'https://jsonplaceholder.typicode.com/users';
// var config = {
//     headers: {
//         'Access-Control-Expose-Headers': 'X-json',
//         'Access-Control-Allow-Headers': '*',
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/x-www-form-urlencoded' ,
//         Accept: 'application/x-www-form-urlencoded',
//     }
// };
// export const getStat = () => crawl.getStat;

export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');


// export const getId = () => router.get('/api', (req, res, next) => {
//     console.log('hello router')
//     request({
//         url: url2,
//         method: 'GET'
//     }, (error, response, body) => {
//         console.log('Hello router')
//     })
// })
// var options = {
//     url: url2,
//     method: 'GET',
//     headers: {
//         'User-Agent': 'Super Agent/0.0.1',
//         'Content-Type': 'application/x-xxx-form-unlenconded'
//     },
//     json: true
// }

// export const crawl = () => {
//     rp(options).then(function (repos) {
//         console.log(repos)
//     }).catch(function (err) {
//         console.log(err)
//     })
// }


// router.get(url2, ctx=> {
//     ctx.body = ctx.params.id;
// })

// app.use(router.allowedMethods())
// app.use(router.routes())
