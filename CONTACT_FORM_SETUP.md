# Contact Form Setup Instructions

Your contact form is now ready to send emails directly to your inbox! Follow these steps to activate it:

## Step 1: Get Your Free Web3Forms Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click on "Get Started" or "Create Access Key"
3. Enter your email: **sriram182719@gmail.com**
4. You'll receive a verification email with your **Access Key**
5. Copy this access key

## Step 2: Add Your Access Key to the Contact Form

1. Open `/app/components/Contact.tsx`
2. Find this line (around line 16):
   ```typescript
   const accessKey = 'YOUR_WEB3FORMS_ACCESS_KEY';
   ```
3. Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual key from Web3Forms
4. It should look like:
   ```typescript
   const accessKey = 'abc123def-your-actual-key-here';
   ```

## Step 3: Test Your Form

1. Run your development server: `npm run dev`
2. Navigate to the Contact section on your portfolio
3. Fill out the form and click "Send Message"
4. You should receive an email at **sriram182719@gmail.com**

## What Happens When Someone Submits the Form?

✅ **You will receive an email with:**
- Their name
- Their email address (so you can reply)
- Subject line
- Their message
- Source: "Portfolio Contact Form"

✅ **The visitor will see:**
- Success message: "✓ Message sent successfully! I'll get back to you soon."
- Or error message if something goes wrong

## Features Included:

- ✅ Direct email to your inbox (sriram182719@gmail.com)
- ✅ Form validation (all fields required)
- ✅ Loading state while sending
- ✅ Success/error messages
- ✅ Automatic form reset after successful submission
- ✅ Disabled state during submission to prevent double-sends
- ✅ Fallback links to email and LinkedIn if form fails

## Additional Direct Contact Options:

The contact section also includes:
- **Email**: sriram182719@gmail.com (clickable mailto link)
- **WhatsApp**: +91 9490147819 (clickable link)
- **LinkedIn**: Direct link to your profile
- **GitHub**: Direct link to your profile

## Alternative: LinkedIn Messages

LinkedIn doesn't allow direct form submissions to DMs, but the contact section includes:
1. A prominent LinkedIn button that opens your profile
2. People can message you directly there
3. Your LinkedIn link: https://www.linkedin.com/in/vishal-epu-646822222/

## Web3Forms Free Tier Limits:

- ✅ 250 submissions per month (Free forever)
- ✅ Spam protection included
- ✅ No credit card required
- ✅ Email notifications
- ✅ Custom reply-to address

## Need Help?

If you have issues:
1. Check that your access key is correct
2. Verify your email is confirmed with Web3Forms
3. Check browser console for errors
4. Email will include fallback contact info if form fails

## Pro Tip:

Consider setting up email filters in Gmail for "Portfolio Contact Form" so these messages go to a specific folder!
