const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const request = require('request');
const rp = require('request-promise');
const cheerio = require('cheerio');
const myJSON = require('JSON');
// const myJSON = require('JSON');
const url = 'https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/%ED%97%A4%EB%93%9C%EB%B1%85%EC%9E%89?api_key=RGAPI-9e84209b-b5a3-4459-b67c-1de6986f095b';
const url2 = 'https://jsonplaceholder.typicode.com/users';

const a = ''

var options = {
    url: url2,
    method: 'GET',
    headers : {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/w-xxx-form-unlenconded'
    },
    json: true  // Automatically parses the JSON string in the response
};

const crawl = () => {
    var a = '';
    rp(options).then(function (repos) {
        // console.log('User has %d repos', repos.length);
        a = JSON.stringify(repos)
        // console.log(repos)
        return repos
    }).catch(function (err) {
        // console.log(err);
    })
    // return a;
}


// function crawl(callback) {
//     request(options, function(error, response, body) {
//         if(!error && response.statusCode === 200) callback(body)
//         else console.log(error)
//     })
// }



// crawl();
// const crawl = (function() {
    
//     request({
//         url: url2,
//         method: 'GET'
//     }, function (error, response, body) {
//         // console.log(response.body)
//         var b = JSON.stringify(body)
//         return b;
        
//     });
   
// })

//  const crawl = () => router.get('/api', (req, res, next) => {
//     console.log('hello router')
//     request({
//         url: url2,
//         method: 'GET'
//     }, (error, response, body) => {
//         console.log('Hello router')
//     })
// })



// const options = {
//     url = 'https://jsonplaceholder.typicode.com/users',
//     method = 'GET',
//     headers: {
//         'Accept': 'application/json',
//         'Accept-Charset': 'utf-8',
//     }
// }



// const options = {
//     url: url2,
//     method: 'GET',
//     json: true,
//     headers: {
//         'Accept': 'application/json',
//         'Accept-Charset': 'utf-8'
//     }
// }

// const  d =     request(options, function (error, response, body) {
//     let json = JSON.parse(body)
//     return json
// });


// const crawl = () => 
//     request(options, function (error, response, body) {
//         // let json = JSON.parse(body)
//         // console.log(body)
//         return body
//     })





// const crawl = request({
//         url: url2,
//         method: 'GET'
//     }, function (error, response, body) {
//         // console.log(body)
//         return body;
// })

// request(options, function(err, res, body) {
//     let json = JSON.parse(body);
//     console.log(json);
// })

// getStat()



///////////////////////////////////////////////////////////

// function crawl(url, callback) {
//     request(options, function(error, response, body){
//         if (error || response.statusCode !== 200)
//             return callback(error || { statusCode: response.statusCode });
        
//         callback(null, JSON.parse(body));
//     });
// }

module.exports = crawl;