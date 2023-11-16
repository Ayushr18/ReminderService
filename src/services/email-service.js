const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');

const repo = new TicketRepository();

const sendBasicEmail = async (MailFrom, MailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: MailFrom,
            to: MailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await repo.get({status: "PENDING"});
        return response; 
    } catch (error) {
        console.log(error);
    }
}

const updateTicket = async (ticketId, data) => {
    try {
        const response = await repo.update(ticketId, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createNotification = async (data) => {
    try {
       const response = await repo.create(data);
       return response;
    } catch (error) {
        console.log(error);
    }
}

const subscribeEvent = async (payload) => {
    let service = payload.service;
    let data = payload.data;
    switch(service) {
        case 'CREATE_TICKET':
            await  createNotification(data);
            break;
        case 'SEND_BASIC_MAIL':
            await sendBasicEmail(data);
            break;
        default:
            console.log('No Validation event recieverd');
            break;        
    }

}
module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket,
    subscribeEvent
} 