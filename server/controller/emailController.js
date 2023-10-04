const express = require("express");
const nodemailer = require('nodemailer');
const sendRoutes = express.Router();

require("dotenv").config({ path: "./config.env" });
const pass = process.env.PASS;

const multer = require('multer');
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

sendRoutes.post('/send-email', upload.single('attachment'), async (req, res) => {
  try {
    const { subject, message } = req.body;
    const attachment = req.file;
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: '**********************',
        pass: `${pass}`,
      },
    });
    const mailOptions = {
      from: '*********************',
      to : '**********************',
      subject,
      text: message,
      attachments: attachment
        ? [{ filename: attachment.originalname, content: attachment.buffer }]
        : [],
    };
    await transporter.sendMail(mailOptions);
    res.render("send", { statuts: "Email sent successfully" , color: "success" });
  } catch (error) {
    console.error('Error sending email:', error);
    res.render("send", { statuts: "Error sending email", color: "danger"  });
  }
});

module.exports = sendRoutes;