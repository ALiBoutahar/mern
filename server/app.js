var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ali27karam09@gmail.com',
    pass: 'mfun ngrr dkts llqb'
  }
});

var mailOptions = {
  from: 'ali27karam09@gmail.com',
  to: 'ali99boutahar@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: '<h1>Welcome</h1><p>That was easy!</p> ',
  attachments: [
    {
        filename: '',
        path: ''
    }
  ]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});