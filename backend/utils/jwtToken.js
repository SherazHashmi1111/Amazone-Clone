const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken(); // Ensure this method exists in user model

  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000), 
    secure: process.env.NODE_ENV === "production", // Only use secure cookies in production (HTTPS)
    sameSite: "Lax", // Prevents CSRF issues but allows authentication in subdomains
  };

  res.status(statusCode)
    .cookie("token", token, options) // Store JWT token in cookie
    .json({
      success: true,
      token,
      user,
    });
    
};

module.exports = sendToken;
