const express = require('express');
const parser =  require('body-parser');

const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(parser.json());
app.use(parser.json({extend: true}));

// app.use('/api', Router);

app.listen(port, console.log(`listen on port ${port}`));