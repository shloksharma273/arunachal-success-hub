# 📧 EmailJS Setup Guide for PrepForum Contact Form

Your contact form is now configured to send emails to **shloksharma273@gmail.com** using EmailJS!

## 🚀 Step-by-Step Setup Instructions

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Sign up with your email (preferably shloksharma273@gmail.com)
4. Verify your email address

### Step 2: Add Email Service

1. Once logged in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose **Gmail** (recommended) or another email provider
4. Click **"Connect Account"**
5. Sign in with **shloksharma273@gmail.com**
6. Allow EmailJS to access your Gmail
7. Give your service a name (e.g., "PrepForum Contact")
8. Click **"Create Service"**
9. **Copy the Service ID** (looks like: `service_xxxxxx`)

### Step 3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Delete the default content and paste this template:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from the PrepForum contact form.
Reply to: {{from_email}}
```

4. Click **"Save"** (top right)
5. **Copy the Template ID** (looks like: `template_xxxxxx`)

### Step 4: Get Your Public Key

1. Go to **"Account"** in the left sidebar
2. Scroll down to **"API Keys"** section
3. Find **"Public Key"** (looks like: `xxxxxxxxxxxxxx`)
4. **Copy the Public Key**

### Step 5: Add Credentials to Your Project

1. Open the file `.env.local` in your project root
2. Replace the placeholder values with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

3. Save the file

### Step 6: Restart the Development Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## ✅ Testing the Contact Form

1. Go to http://localhost:8080/
2. Scroll to the "Contact Us" section
3. Fill out the form:
   - Name: Test User
   - Email: your-test-email@example.com
   - Phone: +91 1234567890
   - Message: This is a test message
4. Click "Send Message"
5. You should see a success message
6. Check **shloksharma273@gmail.com** inbox for the email

## 🎯 EmailJS Free Tier Limits

- ✅ 200 emails per month (Free)
- ✅ No credit card required
- ✅ Upgrade available if needed

## 🔧 Troubleshooting

### "Failed to Send Message" Error

1. **Check credentials**: Make sure all three values in `.env.local` are correct
2. **Restart server**: After updating `.env.local`, restart `npm run dev`
3. **Check email service**: Ensure Gmail service is connected in EmailJS dashboard
4. **Check template**: Make sure template uses correct variable names: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`

### Not Receiving Emails

1. **Check spam folder** in shloksharma273@gmail.com
2. **Verify email service** is active in EmailJS dashboard
3. **Check EmailJS dashboard** → "Email History" to see if emails were sent
4. **Verify "To Email"**: Should be set to shloksharma273@gmail.com in template settings

## 📝 Important Notes

- ⚠️ Never commit `.env.local` to Git (it's already in .gitignore)
- 🔐 Keep your EmailJS credentials private
- 📧 All form submissions will be sent to: **shloksharma273@gmail.com**
- ✉️ Users will receive confirmation that their message was sent to their provided email

## 🎉 You're All Set!

Once you complete these steps, your contact form will be fully functional and you'll receive all form submissions directly in your Gmail inbox!

---

Need help? Visit [EmailJS Documentation](https://www.emailjs.com/docs/)
