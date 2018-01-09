import axios from 'axios';
import jsonp from 'jsonp';
import rp from 'request-promise';
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

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Max-Age': '3600',
        'Access-Control-Allow-Headers': 'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
        'Content-Type': 'application/json',
        // 'data-Type': 'jsonp',
        // Accept: 'Application/json'
    }
    
}
const url = 'https://kr.api.battle.net/wow/character/azshara/%EC%8B%9C%EC%9A%B0%EB%8B%88?locale=ko_KR&apikey=4z9765hug4z2pyfhuhj2rga9xmvj7474'
const url2 = 'https://jsonplaceholder.typicode.com/users';
const options = {
    url: url2,
    method: 'GET',
    headers : {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/w-xx-form-unlenconded'
    }
}

export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users', config).then(console.log(rp(options)));
export const getId = () => axios.get(url2)
// .then(function(res) {
//     console.log(res);
// }).catch(function(res) {
//     if(res instanceof Error) {
//         console.log(res.message);
//     } else {
//         console.log(res);
//     }
// })
// export const getId =() => axios.get(url2)
// export const getId = () => rp(options).then(console.log('Hello RP'));


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
