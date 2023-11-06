const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const {sendBasicEmail} = require('./services/email-service');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at Port ${PORT}`);

        sendBasicEmail(
            'flightservice601@gmail.com',
            'ayushsunilraj@gmail.com',
            'This is a testing email',
            'Hey How are you, I hope you like the service'
        );         
    }); 
}

setupAndStartServer();