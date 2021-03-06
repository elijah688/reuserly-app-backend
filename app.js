const express = require('express')
const app = express(); 
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const strawRoutes = require('./routes/straw')
const protectorRoutes = require('./routes/protector')
const fluteRoutes = require('./routes/flute')
const bookRoutes = require('./routes/book')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const  mgongooseConnect = async ()=>{
    try {
        const mongoosePromise = await mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PW}@cluster0-zkdyr.mongodb.net/barny-app-db?retryWrites=true&w=majority`, {useNewUrlParser: true});
        console.log("SUCCESS: Connection to MongoDB CLuster Successful!");
   } 
    catch (error) {
        console.log("ERROR: Connection to MongoDB CLuster Unuccessful!");
   } 
} 
mgongooseConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});


app.use('/api/straws', strawRoutes);
app.use('/api/protectors', protectorRoutes);
app.use('/api/flutes', fluteRoutes);
app.use('/api/books', bookRoutes);

module.exports = app;