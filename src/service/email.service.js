const nodemailer = require('nodemailer');
const registerTemplate = require('../templates/register.template');
const forgotPasswordTemplate = require('../templates/forgot.template');
const resetPasswordTemplate = require('../templates/reset.template');

// Create reusable transporter using SMTP (recommended for production)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
  port: 465, // or 587
  secure: true, // true for port 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email Transporter Error:', error);
  } else {
    console.log('✅ Email server is ready to take messages');
  }
});

/**
 * Send registration confirmation email
 * @param {string} to - Recipient email address
 * @param {string} username - Recipient's username
 */
const sendRegistrationEmail = async (to, username) => {
  try {
    const mailOptions = {
      from: `"InstaCaption" <${process.env.EMAIL_USER}>`,
      to,
      subject: 'Welcome to InstaCaption! 🎉',
      html: registerTemplate(username),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Registration email sent:', info.messageId);
  } catch (error) {
    console.error('❌ Failed to send registration email:', error);
    throw error;
  }
};
const sendForgotPasswordEmail = async (to, username, code) => {
  try {
    const mailOptions = {
      from: `"InstaCaption Support" <${process.env.EMAIL_USER}>`,
      to,
      subject: 'Reset Your Password - OTP Inside',
      html: forgotPasswordTemplate(username, code),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Forgot Password email sent:', info.messageId);
  } catch (error) {
    console.error('❌ Failed to send forgot password email:', error);
    throw error;
  }
};

/**
 * Send confirmation email after successful password reset
 * @param {string} to - Recipient email
 * @param {string} username - User's name
 */
const sendResetSuccessEmail = async (to, username) => {
  try {
    const mailOptions = {
      from: `"InstaCaption Security" <${process.env.EMAIL_USER}>`,
      to,
      subject: 'Your Password Has Been Changed',
      html: resetPasswordTemplate(username),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Password reset success email sent:', info.messageId);
  } catch (error) {
    console.error('❌ Failed to send reset success email:', error);
    throw error;
  }
};

module.exports = {
  sendRegistrationEmail,
  sendForgotPasswordEmail,
  sendResetSuccessEmail, // 👈 Don't forget to export this
};