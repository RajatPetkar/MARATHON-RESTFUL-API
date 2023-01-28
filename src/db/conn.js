const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/olymics')
.then(()=>{
    console.log('Connected successful')
})
