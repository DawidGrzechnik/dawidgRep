const app = require('./app');

require('./mongodb');

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), () => {
    console.log(`Listening on ${ server.address().port }`);
});