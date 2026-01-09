# EmailJS Setup Guide for Contact Form

## 🚀 **Make Your Contact Form Work!**

Your contact form is now ready to send real emails, but you need to set it up with EmailJS first.

## 📋 **Step-by-Step Setup:**

### 1. **Create EmailJS Account**
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email

### 2. **Add Email Service**
- In your EmailJS dashboard, click "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, Yahoo, etc.)
- Connect your email account
- Give it a name (e.g., "Portfolio Contact")
- **Copy the Service ID** (you'll need this)

### 3. **Create Email Template**
- Click "Email Templates" in your dashboard
- Click "Create New Template"
- Use this template structure:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**To Email:**
```
shanatnu15feb0000@gmail.com
```

**From Name:**
```
{{from_name}}
```

**From Email:**
```
{{from_email}}
```

**Reply To:**
```
{{reply_to}}
```

**Body (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Message</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #3b82f6;">📬 New Message from Your Portfolio</h2>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
            <p><strong>Subject:</strong> {{subject}}</p>
        </div>

        <div style="background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3>Message:</h3>
            <p style="white-space: pre-line;">{{message}}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
            <p style="color: #6c757d; font-size: 14px;">
                This message was sent from your portfolio contact form.
            </p>
        </div>
    </div>
</body>
</html>
```

- Save the template
- **Copy the Template ID** (you'll need this)

### 4. **Get Your Public Key**
- Go to "Account" in your EmailJS dashboard
- Copy your **Public Key** (starts with a number)

### 5. **Update Your Code**
- Open `script.js` in your portfolio folder
- Find these lines (around line 47-49):
```javascript
const serviceID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

- Replace the placeholder values:
```javascript
const serviceID = 'service_xxxxxxxxx'; // Your actual Service ID
const templateID = 'template_xxxxxxxxx'; // Your actual Template ID
const publicKey = 'xxxxxxxxxxxxxxx'; // Your actual Public Key
```

## ✅ **Test Your Form**

1. Save all changes
2. Open your portfolio in a browser
3. Go to the Contact section
4. Fill out and submit the form
5. Check your email - you should receive the message!

## 🔧 **Troubleshooting**

- **Form not sending?** Check the browser console (F12) for errors
- **Wrong email?** Make sure the template "To Email" is set to your email
- **Still not working?** Verify all IDs and keys are correct

## 📧 **What Happens Now**

- Visitors fill out your contact form
- EmailJS sends you an email with their message
- You can reply directly to their email address
- All messages are stored in your email inbox

## 🎉 **You're Done!**

Your contact form is now fully functional. People can send you messages directly from your website, and you'll receive them in your email inbox!

---

**Need help?** Check the EmailJS documentation or their support forum.