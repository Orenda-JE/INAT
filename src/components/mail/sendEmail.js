/*const path = require('nodemailer');

module.exports = {
  // Other webpack configuration options...
  resolve: {
    // Other resolve options...
    fallback: {
      "crypto": false
    }
  }
};

const mailgen = require('mailgen');

const sendEmail = async (recipient, subject, body) => {
  try {
    let config = {
      service: 'gmail',
      auth: {
        user: 'mnasriomar4@gmail.com',
        pass: 'pgno xbil hulg hprh'
      }
    };

    let transporter = nodemailer.createTransport(config);

    let mailGenerator = new mailgen({
      theme: 'default',
      product: {
        name: 'mailgen',
        link: 'https://mailgen.js/'
      }
    });

    let response = {
      body: {
        name:'orenda junior',
        intro: 'The email is received',
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

    let mail = mailGenerator.generate(response);

    let message = {
      from: 'mnasriomar4@gmail.com',
      to: recipient,
      subject: subject,
      html: mail
    };

    await transporter.sendMail(message);
    console.log('Email sent successfully!');
    return { message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

const sendSignupEmail = async () => {
  try {
    await sendEmail('mnasriomar4@gmail.com', 'Trying mailing with mailgen');
    console.log('Signup email sent successfully!');
  } catch (error) {
    console.error('Error sending signup email:', error);
  }
};

module.exports = { sendSignupEmail };
*/