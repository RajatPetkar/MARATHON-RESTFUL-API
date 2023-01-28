const express = require('express');
require('../src/db/conn');
const mensRouter = require('../src/routers/mensRouter')
const app = express();
const port = process.env.PORT || 3000;
const router = new express.Router();
app.use(express.json());

app.use(mensRouter);
app.get('/', function (req, res) {
    
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})