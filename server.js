const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = require('./routes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

async function run(app) {
  await mongoose.connect(process.env.MONGO_DB_CONNECTION, {useNewUrlParser: true});

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  
  // parse application/json
  app.use(bodyParser.json());

  app.use('/api/v1/posts', router);

  app.get('/', (req, res) => {
    res.status(200).end('Hola Bedu!');
  });
  
  app.listen(port, () => console.log(`Servidor listo en http://localhost:${port}`));
}

run(app);
