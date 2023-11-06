const sender = require('../config/emailConfig');

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

module.exports = {
    sendBasicEmail
} 