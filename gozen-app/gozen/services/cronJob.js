// services/cronJob.js

const cron = require('node-cron');
const { sendEmail } = require('../utils/email'); 

cron.schedule('* * * * *', async () => {
  console.log('Running a task every minute');

  try {
    await sendEmail('abhisheksingaravel.1010@gmail.com', 'Hello!', 'This is a scheduled email!');
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
});