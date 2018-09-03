const express = require('express');
const app = express();
const nodePort = process.env.PORT || 5000;


// Routes
app.get('/', (req, res) => {
    res.send("hi there");
})
app.listen(nodePort, () => console.log(`running on port: ${nodePort}` ));