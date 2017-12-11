/**
 * https://www.w3schools.com/nodejs/nodejs_email.asp
 */

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // 계정
        user: 'nyg4628@gmail.com',

        // 패스워드
        pass: ''
    }
});

var mailOptions = {
    // 보내는 사람
    from: 'nyg4628@gmail.com',

    // 받는 사람
    to: 'nyg4628@nate.com',
    // to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',

    // 제목
    subject: 'Sending Email using Node.js',

    // 내용
    // text: 'That was easy!'

    // 내용 HTML
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});