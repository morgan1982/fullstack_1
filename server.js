const express = require('express');
const app = express();
const path = require('path');
const bodyParser  = require('body-parser');

const postsRoutes = require('./api/routes/posts');
const AuthRoutes = require('./api/routes/auth');


const nodePort = process.env.PORT || 5000;


let morgan = null;


// -- MIDDLEWARES --
if (process.env.NODE_ENV !== "production") {
    morgan = require('morgan');
    app.use(morgan('dev')); // short extended
    app.use(express.static('./templates'))

}
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS CONFIGURATION
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Origin, X-Requested-With, Content-Type, Accept, Authorization');
                //adjusts the response to accept cross origin requests

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next();
})
// star can be changed with the ip or the domain of the applications whitch makes the req


// -- ROUTING --
app.use('/api', postsRoutes);
app.use('/auth', AuthRoutes);

// old api
// require('./api/index.js')(app);


// -- ERROR HANDLERS --
app.use((req, res, next) => {

    let pathname = req._parsedUrl.pathname;
    const error = new Error(`path: ${pathname} not found`);
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => { // catches server errors globally
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})



// SERVER INIT
app.listen(nodePort, () => console.log(`running on port: ${nodePort}` ));
