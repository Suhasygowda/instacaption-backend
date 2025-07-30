module.exports = (username) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to InstaCaption</title>
    <style>
        /* Reset styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        /* Base styles */
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8f9fa;
            margin: 0;
            padding: 20px;
        }
        
        /* Container */
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        /* Header */
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        
        .logo {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
            letter-spacing: -0.5px;
        }
        
        .tagline {
            font-size: 16px;
            opacity: 0.9;
            margin: 0;
        }
        
        /* Main content */
        .content {
            padding: 40px 30px;
        }
        
        .welcome-title {
            font-size: 24px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .welcome-message {
            font-size: 16px;
            color: #4a5568;
            margin-bottom: 30px;
            text-align: center;
            line-height: 1.7;
        }
        
        .cta-section {
            text-align: center;
            margin: 30px 0;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            transition: transform 0.2s ease;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
        }
        
        .features {
            margin: 30px 0;
            padding: 25px;
            background-color: #f7fafc;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }
        
        .features h3 {
            color: #2d3748;
            font-size: 18px;
            margin-bottom: 15px;
        }
        
        .feature-list {
            list-style: none;
            padding: 0;
        }
        
        .feature-list li {
            padding: 8px 0;
            color: #4a5568;
            position: relative;
            padding-left: 25px;
        }
        
        .feature-list li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #48bb78;
            font-weight: bold;
        }
        
        /* Divider */
        .divider {
            height: 1px;
            background: linear-gradient(to right, transparent, #e2e8f0, transparent);
            margin: 30px 0;
        }
        
        /* Footer */
        .footer {
            background-color: #2d3748;
            padding: 30px;
            color: #a0aec0;
        }
        
        .footer-content {
            text-align: center;
        }
        
        .company-info {
            margin-bottom: 20px;
        }
        
        .company-name {
            font-size: 20px;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 8px;
        }
        
        .company-tagline {
            font-size: 14px;
            margin-bottom: 15px;
        }
        
        .social-links {
            margin: 20px 0;
        }
        
        .social-links a {
            color: #a0aec0;
            text-decoration: none;
            margin: 0 15px;
            font-size: 14px;
            transition: color 0.2s ease;
        }
        
        .social-links a:hover {
            color: #ffffff;
        }
        
        .contact-info {
            font-size: 14px;
            margin: 20px 0;
        }
        
        .legal-links {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #4a5568;
        }
        
        .legal-links a {
            color: #a0aec0;
            text-decoration: none;
            margin: 0 10px;
            font-size: 12px;
        }
        
        .legal-links a:hover {
            color: #ffffff;
        }
        
        .unsubscribe {
            font-size: 12px;
            margin-top: 15px;
            color: #718096;
        }
        
        .unsubscribe a {
            color: #a0aec0;
            text-decoration: none;
        }
        
        /* Responsive design */
        @media only screen and (max-width: 600px) {
            body {
                padding: 10px;
            }
            
            .email-container {
                border-radius: 0;
            }
            
            .header, .content, .footer {
                padding: 25px 20px;
            }
            
            .welcome-title {
                font-size: 22px;
            }
            
            .cta-button {
                padding: 12px 25px;
                font-size: 15px;
            }
            
            .social-links a {
                margin: 0 10px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="logo">InstaCaption</div>
            <p class="tagline">AI-Powered Caption Generation</p>
        </div>
        
        <!-- Main Content -->
        <div class="content">
            <h1 class="welcome-title">Welcome aboard, ${username}! 🎉</h1>
            
            <p class="welcome-message">
                Thank you for joining <strong>InstaCaption</strong>! We're thrilled to have you as part of our community. 
                Get ready to create amazing captions that will make your content stand out.
            </p>
            
            <div class="cta-section">
                <a href="#" class="cta-button">Get Started Now</a>
            </div>
            
            <div class="features">
                <h3>What you can do with InstaCaption:</h3>
                <ul class="feature-list">
                    <li>Generate engaging captions with AI</li>
                    <li>Customize tone and style</li>
                    <li>Schedule your posts</li>
                    <li>Analyze performance metrics</li>
                    <li>Access premium templates</li>
                </ul>
            </div>
            
            <div class="divider"></div>
            
            <p style="text-align: center; color: #718096; font-size: 14px; margin: 0;">
                Need help getting started? Check out our 
                <a href="#" style="color: #667eea; text-decoration: none;">Getting Started Guide</a> 
                or <a href="#" style="color: #667eea; text-decoration: none;">contact our support team</a>.
            </p>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <div class="footer-content">
                <div class="company-info">
                    <div class="company-name">InstaCaption</div>
                    <div class="company-tagline">Elevate your social media presence</div>
                </div>
                
                <div class="social-links">
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Facebook</a>
                </div>
                
                <div class="contact-info">
                    <p>📧 support@instacaption.com | 📞 1-800-CAPTION</p>
                    <p>123 Innovation Street, Tech City, TC 12345</p>
                </div>
                
                <div class="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                    <a href="#">Help Center</a>
                </div>
                
                <div class="unsubscribe">
                    <p>
                        If you did not register for this account, you can safely ignore this email.<br>
                        <a href="#">Unsubscribe</a> from future emails.
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`;