// services/cronJob.js

const cron = require('node-cron');
const { sendEmail } = require('../utils/email'); 

cron.schedule('* * * * *', async () => {
  console.log('Running a task every minute');

  try {
    await sendEmail('recievermailid@gmail.com', 'Hello!', 'This is a scheduled email!'); // need to enter recievermailid@gmail.com
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
});
