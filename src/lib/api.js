
import axios from 'axios';
const request = require('request');
const crawl = require('./crawl');
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const url = 'https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/%ED%97%A4%EB%93%9C%EB%B1%85%EC%9E%89?api_key=RGAPI-9e84209b-b5a3-4459-b67c-1de6986f095b';
const url2 = 'https://jsonplaceholder.typicode.com/users';
var config = {
    headers: {
        'Access-Control-Expose-Headers': 'X-json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded' ,
        Accept: 'application/x-www-form-urlencoded',
    }
};
// export const getStat = () => crawl.getStat;

export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');
// export const getId = () => axios.get('https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/%ED%97%A4%EB%93%9C%EB%B1%85%EC%9E%89?api_key=RGAPI-9e84209b-b5a3-4459-b67c-1de6986f095b');
// export const getId = () =>axios.get('https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/%ED%97%A4%EB%93%9C%EB%B1%85%EC%9E%89?api_key=RGAPI-9e84209b-b5a3-4459-b67c-1de6986f095b',config)
//     .then(function (response) {
//         console.log(response.data);
//     })


// export const getId = () =>  axios(url, {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-headers': 'Origin, X-Requested-With, Content-Type, Accept',
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   }).then(response => {
//         console.log('hello consconsconscon');
//   })


// export const getId = () => axios.create({
//     baseURL: url,
//     timeout: 10000,
//     withCredentials: true,
//     transformRequest: [(data) => JSON.stringify(data.data)],
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     }
//   })

//   .then(console.log('hello'))

// export const getId = () => axios({
//     url: url,
//     method:'GET',
//     header : {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE',
//         'Access-Control-Allow-Headers': 'Authorization'
//     }
// }).then((response) => {
//     console.log('ajsdklasd')
//     console.log(response);
// }).catch(function(error) {
//     console.log('This is error')
//     console.log(error)
// })

// export const getId = () => axios.get(url,config)

// .then(error => {
//     // If request is good...
//     console.log(error);
//   })
//   .catch((error) => {
//     console.log('error 3 ' + error);
//   });
export const getId = () => router.get('/api', (req, res, next) => {
    console.log('hello router')
    request({
        url: url2,
        method: 'GET'
    }, (error, response, body) => {
        console.log('Hello router')
    })
})


// router.get(url2, ctx=> {
//     ctx.body = ctx.params.id;
// })

// app.use(router.allowedMethods())
// app.use(router.routes())
