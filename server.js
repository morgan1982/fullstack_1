const express = require('express');
const app = express();
const path = require('path');
const nodePort = process.env.PORT || 5000;


// Routes
require('./api/index.js')(app);
// app.get('/', (req, res) => {
//     res.send("hi there");
// })

if (process.env.NODE_ENV === 'production') {
    // looks for the asset inside build
    app.use(express.static('client/build'));

    // catch all case
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

}

app.listen(nodePort, () => console.log(`running on port: ${nodePort}` ));
