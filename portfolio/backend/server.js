const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set up Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another email provider
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password', // Or better, use environment variables for security
  },
});

// Endpoint to handle form submission
app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'recipient-email@example.com', // Where the email will be sent
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Failed to send email');
    }
    res.status(200).send('Message sent successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
