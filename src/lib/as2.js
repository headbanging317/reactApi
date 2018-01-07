var request = require('request');

module.exports = function (callee) {
    function API_Call(callee) {
        var OPTIONS = {
            headers: {'Content-Type': 'application/json'},
            url: null,
            body: null
        };
        const PORT = '3000';
        const BASE_PATH = '/users';
        var HOST = null;
        (function () {
            switch (callee) {
                case 'dev':
                    HOST = 'https://jsonplaceholder.typicode.com';
                    break;
                case 'prod':
                    HOST = 'https://jsonplaceholder.typicode.com';
                    break;
                case 'another':
                    HOST = 'https://localhost.com';
                    break;
                default:
                    HOST = 'http://localhost.com';
            }
        })(callee);
        return {
            login : function (user_id, password, callback) {
                OPTIONS.url = HOST + ':' + PORT + BASE_PATH + '/login';
                OPTIONS.body = JSON.stringify({
                    "user_id": user_id,
                    "password": password
                });
                request.post(OPTIONS, function (err, res, result) {
                    statusCodeErrorHandler(res.statusCode, callback, result);
                });
            }
        };
    }
    function statusCodeErrorHandler(statusCode, callback , data) {
        switch (statusCode) {
            case 200:
                callback(null, JSON.parse(data));
                break;
            default:
                callback('error', JSON.parse(data));
                break;
        }
    }
    var INSTANCE;
    if (INSTANCE === undefined) {
        INSTANCE = new API_Call(callee);
    }
    return INSTANCE;
};