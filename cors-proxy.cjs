const cors_anywhere = require('cors-anywhere');

const host = 'localhost';
const port = 8080;

cors_anywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('CORS Anywhere server running on ' + host + ':' + port);
    console.log('RSS feeds için proxy hazır!');
});