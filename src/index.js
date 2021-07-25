const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./config/routes');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(5000, () => {
  console.log('Express começou na porta: http://localhost:5000');
});
