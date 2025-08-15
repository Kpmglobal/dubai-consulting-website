const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const router = express.Router();

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // limit each IP to 3 contact form submissions per windowMs
  message: 'Too many contact form submissions, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('phone').optional().matches(/^[\+]?[1-9][\d]{0,15}$/).withMessage('Please provide a valid phone number'),
  body('company').optional().trim().isLength({ max: 200 }).withMessage('Company name cannot exceed 200 characters'),
  body('subject').trim().isLength({ min: 5, max: 200 }).withMessage('Subject must be between 5 and 200 characters'),
  body('message').trim().isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters'),
  body('service').optional().trim().isLength({ max: 100 }).withMessage('Service name cannot exceed 100 characters'),
  body('budget').optional().trim().isLength({ max: 100 }).withMessage('Budget cannot exceed 100 characters'),
  body('timeline').optional().trim().isLength({ max: 100 }).withMessage('Timeline cannot exceed 100 characters')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const {
      name,
      email,
      phone,
      company,
      subject,
      message,
      service,
      budget,
      timeline
    } = req.body;

    // Create email transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Subject:</strong> ${subject}</p>
      ${service ? `<p><strong>Service of Interest:</strong> ${service}</p>` : ''}
      ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ''}
      ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>This message was sent from the KPM Global Services website contact form.</small></p>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Send to admin email
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: emailContent
    });

    // Send confirmation email to user
    const userEmailContent = `
      <h2>Thank you for contacting KPM Global Services!</h2>
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.</p>
      <p>In the meantime, if you have any urgent questions, please feel free to call us at +971-552490091.</p>
      <p>Best regards,<br>KPM Global Services Team</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting KPM Global Services',
      html: userEmailContent
    });

    res.json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later or contact us directly.'
    });
  }
});

// @route   GET /api/contact/status
// @desc    Get contact form status (for monitoring)
// @access  Public
router.get('/status', (req, res) => {
  res.json({
    success: true,
    data: {
      status: 'operational',
      lastChecked: new Date().toISOString(),
      emailService: process.env.SMTP_HOST ? 'configured' : 'not-configured',
      contactEmail: process.env.CONTACT_EMAIL || 'not-configured'
    }
  });
});

// @route   POST /api/contact/test-email
// @desc    Test email configuration (development only)
// @access  Public (should be restricted in production)
router.post('/test-email', async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({
      success: false,
      message: 'Test endpoint not available in production'
    });
  }

  try {
    const { testEmail } = req.body;

    if (!testEmail) {
      return res.status(400).json({
        success: false,
        message: 'Test email address is required'
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const testMailOptions = {
      from: process.env.SMTP_USER,
      to: testEmail,
      subject: 'Test Email - Dubai Business Setup Consulting',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify the email configuration.</p>
        <p>If you receive this, the email service is working correctly.</p>
        <p>Sent at: ${new Date().toLocaleString()}</p>
      `
    };

    await transporter.sendMail(testMailOptions);

    res.json({
      success: true,
      message: 'Test email sent successfully',
      data: {
        sentTo: testEmail,
        sentAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Test email error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send test email',
      error: error.message
    });
  }
});

module.exports = router;
