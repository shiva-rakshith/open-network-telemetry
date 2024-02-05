import express from 'express';
import { config } from '../configs/Config.js';
import bodyParser from 'body-parser';

var app = express();
app.use(express.json());

app.post('/telemetry/generate', function (req, res) {
   console.log('Request Body ' + req.body);
   res.send('Hello World');
})

var server = app.listen(config.server.port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})