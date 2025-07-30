const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { registerSchema, loginSchema } = require('../validators/auth');
const { sendRegistrationEmail, sendForgotPasswordEmail, sendResetSuccessEmail } = require('../service/email.service');

const createToken = (userId, email) =>
  jwt.sign({ id: userId, email }, process.env.JWT_SECRET, { expiresIn: '1d' });

exports.register = async (req, res, next) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: 'User already exists' });

    const newUser = new User({ username, email, password });
    await newUser.save();

    const token = createToken(newUser._id, newUser.email);
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    await sendRegistrationEmail(email, username);
    res.status(201).json({
      message: "Registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = createToken(user._id, user.email);
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.profile = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "User profile fetched successfully",
      user: req.user
    });
  } catch (error) {
    next(error);
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const code = Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit OTP
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // valid for 10 min

    user.resetCode = code;
    user.resetCodeExpires = expiry;
    await user.save();

    // Send the email
    await sendForgotPasswordEmail(email, user.username, code);

    res.status(200).json({ message: "Password reset OTP sent successfully" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Failed to send password reset OTP"
    });
    next(error);
  }
};

exports.verifyResetCode = async (req, res, next) => {
  try {
   const { email, code } = req.body;

  const user = await User.findOne({ email });
  if (!user || user.resetCode !== code || user.resetCodeExpires < new Date()) {
    return res.status(400).json({ message: "Invalid or expired code" });
  }

  res.status(200).json({ message: "OTP verified ✅" });
  } catch (error) {
    next(error);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { email, code, newPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.resetCode !== code || user.resetCodeExpires < new Date()) {
      return res.status(400).json({ message: "Invalid or expired code" });
    }

    user.password = newPassword; // Assume auto-hashing is handled in schema
    user.resetCode = null;
    user.resetCodeExpires = null;
    await user.save();

    // Send confirmation email
    await sendResetSuccessEmail(user.email, user.username);

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    next(error);
  }
};