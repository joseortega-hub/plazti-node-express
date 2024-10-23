const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandle');
const app = express();
const port = 3000;

app.use(express.json());

/*const whitelist = ['http://localhost:8080', 'http://localhost:3000', 'http://myapp.com'];
const opt = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(opt));*/
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.get('/', (req, res) => {
  res.send('Hola mundo');
})

app.listen(port, () => {

})


