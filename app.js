const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
//const userRoute = require('./routes/users');

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth_routes'));
app.use('/api/user', require('./routes/users'));

const PORT = config.get("port") || 5000;


async function start(){ 
    try {
      await mongoose.connect(config.get('mongoUri'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      });
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();

app.listen(PORT, () => console.log(`App has been startet at ${PORT} port!`));