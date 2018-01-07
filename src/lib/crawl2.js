const request = require('request');
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();


const url = 'https://jsonplaceholder.typicode.com/users';

const crawl2 = () => {
    app.get(url, (ctx)=> {
        console.log(ctx);
    })    
}
