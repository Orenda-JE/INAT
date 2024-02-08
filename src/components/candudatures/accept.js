/*const nodemailer = require('nodemailer');
const mailgen = require('mailgen');

async function accept() {
  try {
    // Configuration for the email service
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mnasriomar4@gmail.com',
        pass: 'pgno xbil hulg hprh'
      }
    });

    // Mail generation options
    let mailGenerator = new mailgen({
      theme: 'default',
      product: {
        name: 'mailgen',
        link: 'https://mailgen.js/'
      }
    });

    // Email content
    let response = {
      body: {
        name: 'Nom Candidat',
        intro: 'Votre candidature a été acceptée',
        table: {
          data: [
            {
              item: 'Working with Nodemailer',
              description: 'Backend app',
              price: '10m'
            }
          ]
        }
      }
    };

    // Generate the email HTML content
    let mail = mailGenerator.generate(response);

    // Email message details
    let message = {
      from: 'mnasriomar4@gmail.com',
      to: 'mahalassoued235@gmail.com',
      subject: 'Candidature Acceptée',
      html: mail
    };

    // Send the email
    await transporter.sendMail(message);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Propagate the error for handling at the caller level
  }
}

module.exports = accept;
*/