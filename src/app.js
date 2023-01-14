const express = require('express');
const path = require('path');
const mainRouter = require('./routers/main')

const app = express();

app.listen(3000, ()=> console.log('El servidor prendió'));

app.use(express.static(path.join(__dirname, "../public")))

app.use(mainRouter);