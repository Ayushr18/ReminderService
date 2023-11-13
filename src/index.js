const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
//const {sendBasicEmail} = require('./services/email-service');
const jobs = require('./utils/job');
const TicketController = require('./controllers/ticket-controller');
const {createChannel} = require('./utils/messageQueue');

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));   

   // const channel = await createChannel(); 
    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server started at Port ${PORT}`);
        //jobs();
        // sendBasicEmail(
        //     'flightservice601@gmail.com',
        //     'ayushsunilraj@gmail.com',
        //     'This is a testing email',
        //     'Hey How are you, I hope you like the service'
        // );       
         
    }); 
}

setupAndStartServer();