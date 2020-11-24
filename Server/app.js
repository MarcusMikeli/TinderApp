// WE IMPORT THE PACKAGE
const express = require('express');
const cors = require('cors');
// WE IMPORT BODYPARSER SO OUR POST WILL BE DEFINED
const bodyParser = require('body-parser');
// WE EXECUTE IT
const app = express();
// WE IMPORT MONGOOSE
const mongoose = require('mongoose');

require('dotenv/config');

app.use(cors());

// MIDDLEWARES IS A FUNCTION THAT EXECUTES WHEN ROUTES ARE BEING HIT, SO WHEN WE ARE HITTING THE ROUTE
// WE CAN RUN A FUNCTION THAT'S ALWAYS GONNA EXECUTE WHEN WE HIT THE ROUTE
// APP.USE(AUTH); CHECKS IF THE USER IS AUTCHENTICATED
// app.use('/post', () => {
  //  console.log('This is a middleware running');
// });

// WE CREATE ANOTHER MIDDLEWEAR, SO WE SAY THAT EVERY TIME WE HIT ANY REQUEST
// WE WILL MAKE SURE THE BODY-PARSER RUNS
app.use(bodyParser.json());

// IMPORT ROUTES
const postsRoute = require('./Routes/posts');

// WE CAN NOW CREATE THE MIDDLEWEAR, AND SAY THAT EVERY TIME YOU GO TO THE POST
// THEN USE THIS POST ROUTE
app.use('/posts',postsRoute);

app.get('/', (req, res) => {
    res.send('We are on home');
});

// CONNECT TO DB (Database)
mongoose.connect( 
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    // { useUnifiedTopology: true }, - VIRKER IKKE MED VORES SERVER
    // DEN SIDSTE FEJL KAN IKKE FJERNES I TERMINALEN 
    () => console.log('connected to DB!'));

// HOW DO WE START LISTENING TO THE SERVER
app.listen(3000);