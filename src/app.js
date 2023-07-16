const express = require('express');
require('../src/db/conn');
const mensRouter = require('../src/routers/mensRouter')
const app = express();
const port = process.env.PORT || 8000;
const router = new express.Router();
app.use(express.json());

app.use(mensRouter);

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})