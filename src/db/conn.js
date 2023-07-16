const mongoose = require("mongoose");
const DB = 'mongodb+srv://Rajat_Petkar:GZQXbkZXzu7tE36u@cluster0.3aobb3y.mongodb.net/olympic?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);

mongoose.connect(DB,{
    // usenewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
}).then(() => {
    console.log('connected');
}).catch((err) => {
    console.log('no connection');
})