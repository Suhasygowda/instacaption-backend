module.exports = (username) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px; overflow: hidden;">
    <!-- Header -->
    <div style="background-color: #28a745; color: white; padding: 20px; text-align: center;">
      <h1 style="margin: 0;">InstaCaption</h1>
    </div>

    <!-- Body -->
    <div style="padding: 20px;">
      <h2>Password Reset Successful</h2>
      <p>Hi ${username || 'User'},</p>
      <p>Your password has been <strong>successfully changed</strong>.</p>
      <p>If you did not perform this action, please <strong>contact support immediately</strong>.</p>
    </div>

    <!-- Footer -->
    <div style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #777;">
      <p style="margin: 0;">&copy; 2023 InstaCaption. All rights reserved.</p>
      <p style="margin: 0;"><a href="#" style="color: #28a745; text-decoration: none;">Privacy Policy</a> | <a href="#" style="color: #28a745; text-decoration: none;">Terms of Service</a></p>
      <p style="margin: 0;">Contact us at: <a href="mailto:support@instacaption.com" style="color: #28a745; text-decoration: none;">support@instacaption.com</a></p>
    </div>
  </div>
`;
