var nodemailer = require('nodemailer');

const sendEmail = () => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jobandhotj7@gmail.com',
            pass: 'Joban2730'
        }
    });

    var mailOptions = {
        from: 'jobandhotj7@gmail.com',
        to: 'singhjobandhot@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = sendEmail;
