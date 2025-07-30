// module.exports = (username, code) => `
//   <div style="font-family: Arial, sans-serif; padding: 20px;">
//     <h2>Hi ${username || 'User'},</h2>
//     <p>You requested to reset your password.</p>
//     <p><strong>Your OTP is: <span style="color: #007BFF; font-size: 20px;">${code}</span></strong></p>
//     <p>This code is valid for <strong>10 minutes</strong>. Please don’t share it with anyone.</p>
//     <p>If you didn’t request this, you can safely ignore this email.</p>
//     <br />
//     <p>— InstaCaption Team</p>
//   </div>
// `;
module.exports = (username, code) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px; overflow: hidden;">
    <!-- Header -->
    <div style="background-color: #007BFF; color: white; padding: 20px; text-align: center;">
      <h1 style="margin: 0;">InstaCaption</h1>
    </div>

    <!-- Body -->
    <div style="padding: 20px;">
      <h2>Hi ${username || 'User'},</h2>
      <p>You requested to reset your password.</p>
      <p><strong>Your OTP is: <span style="color: #007BFF; font-size: 20px;">${code}</span></strong></p>
      <p>This code is valid for <strong>10 minutes</strong>. Please don’t share it with anyone.</p>
      <p>If you didn’t request this, you can safely ignore this email.</p>
    </div>

    <!-- Footer -->
    <div style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #777;">
      <p style="margin: 0;">&copy; 2023 InstaCaption. All rights reserved.</p>
      <p style="margin: 0;"><a href="#" style="color: #007BFF; text-decoration: none;">Privacy Policy</a> | <a href="#" style="color: #007BFF; text-decoration: none;">Terms of Service</a></p>
      <p style="margin: 0;">Contact us at: <a href="mailto:support@instacaption.com" style="color: #007BFF; text-decoration: none;">support@instacaption.com</a></p>
    </div>
  </div>
`;
