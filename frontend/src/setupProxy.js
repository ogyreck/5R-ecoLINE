const createProxyMiddleware = require('http-proxy-middleware');
     
module.exports = function(app) {
    app.use(createProxyMiddleware('/api', { target: 'https://api-five-r-ecoline.herokuapp.com/shop/get' }))
};