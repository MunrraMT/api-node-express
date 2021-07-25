const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

let db = [{ '01': 'Esta vazio' }];

app.listen(5000, () => {
  console.log('Express começou na porta: http://localhost:5000');
});
