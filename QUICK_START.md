# 🚀 QUICK START GUIDE - Cluster Studio E-Commerce

## ⚡ 5-Minute Setup

### Step 1: Update Business Information (5 minutes)

#### A. Contact Information
Find and replace these in ALL HTML files (use Find & Replace):

**Current WhatsApp Number:**
```
+91 83808 08435
```

**Replace with your number:**
```
+91 YOUR_PHONE_NUMBER
```

**Email (in footer):**
```
info@clusterstudio.com
```

**Address (in footer):**
```
Pune, India
```

#### B. Brand Name & Logo
In the `<nav>` section of all HTML files:

**Current:**
```html
<div class="logo-text">CLUSTER</div>
<div class="logo-subtext">STUDIO</div>
```

**Change to your brand name:**
```html
<div class="logo-text">YOUR BRAND</div>
<div class="logo-subtext">YOUR TAGLINE</div>
```

### Step 2: Customize Colors (2 minutes)

Edit `styles.css` and update the color variables:

```css
:root {
    --primary-color: #8B2E3C;        /* Your main brand color */
    --secondary-color: #F4E4D7;      /* Background/accent color */
    --accent-color: #D4A574;         /* Highlight color */
    --text-dark: #1A1A1A;            /* Text color */
}
```

**Popular Color Combinations:**
- Fashion: Burgundy (#8B2E3C) + Cream (#F4E4D7)
- Modern: Navy (#1A3A52) + Light Blue (#E8F0FE)
- Minimalist: Black (#1A1A1A) + White (#FFFFFF)
- Vibrant: Purple (#8E44AD) + Pink (#FFB6C1)

### Step 3: Add Your Products (10 minutes)

#### A. Add Ready-Made Products
Edit `script.js` and update the ProductManager:

```javascript
const ProductManager = {
    products: [
        {
            id: 1,
            name: 'Your T-Shirt Name',
            category: 'men',  // men, women, casual, accessories, bags, home
            price: 499,
            description: 'Your product description here',
            image: null,  // We'll add this after images
            colors: ['Black', 'White', 'Gray'],
            sizes: ['S', 'M', 'L', 'XL'],
        },
        // Add more products...
    ],
};
```

#### B. Add Product Images
1. Create a `products/` folder in the same directory as HTML files
2. Add your product images (JPG or PNG)
3. Update image paths:

```javascript
image: 'products/my-tshirt.jpg',
```

#### C. Update Custom Product Prices
In `custom-product.html`:

```javascript
const products = {
    tshirt: { name: 'Custom T-Shirt', basePrice: 499, sizes: ['S', 'M', 'L', 'XL'] },
    mug: { name: 'Custom Mug', basePrice: 299, sizes: ['Normal'] },
    hoodie: { name: 'Custom Hoodie', basePrice: 799, sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    cushion: { name: 'Custom Cushion', basePrice: 599, sizes: ['16x16', '18x18', '20x20'] },
    phonecase: { name: 'Custom Phone Case', basePrice: 399, sizes: ['iPhone 12', 'iPhone 13', 'iPhone 14', 'Samsung A12'] },
    bottle: { name: 'Custom Water Bottle', basePrice: 399, sizes: ['500ml', '750ml', '1L'] },
};
```

### Step 4: Test Your Site

1. Open `index.html` in a web browser
2. Test navigation and links
3. Try adding products to cart
4. Test checkout (it will open WhatsApp with your message)
5. Test on mobile device

### Step 5: Deploy Online

#### Option A: Netlify (Easiest)
1. Go to netlify.com
2. Drag & drop your project folder
3. Get a live link instantly

#### Option B: GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Get automatic HTTPS link

#### Option C: Your Own Server
1. FTP upload all files to your hosting
2. Make sure HTML files are in the root or correct folder
3. Test the live site

## 📋 Important Files to Edit

### 1. **All HTML files** - Update:
- [ ] WhatsApp number (+91 XXXXXXXXXX)
- [ ] Email address
- [ ] Business address
- [ ] Brand name and tagline
- [ ] Social media links (in footer)

### 2. **styles.css** - Customize:
- [ ] Color variables (primary, secondary, accent)
- [ ] Font sizes
- [ ] Spacing and padding
- [ ] Border radius

### 3. **script.js** - Configure:
- [ ] Product list
- [ ] Product prices
- [ ] WhatsApp number
- [ ] Coupon codes

### 4. **custom-product.html** - Set up:
- [ ] Custom product names
- [ ] Base prices
- [ ] Available sizes
- [ ] Color options

## 🎨 Design Customization

### Change Accent Color
```css
--accent-color: #D4A574;  /* Change this hex code */
```

### Change Font
Replace in HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap" rel="stylesheet">
```

### Add Your Own Images
```html
<img src="your-image.jpg" alt="Description" style="width: 100%; border-radius: 12px;">
```

## ✅ Pre-Launch Checklist

- [ ] WhatsApp number is correct
- [ ] All contact info updated
- [ ] Products added with correct prices
- [ ] Product images added (if available)
- [ ] Colors customized to match brand
- [ ] Logo/brand name updated
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Cart functionality working
- [ ] Checkout sends to WhatsApp
- [ ] All links working
- [ ] Coupon codes configured
- [ ] Deployed to hosting
- [ ] Domain name configured (if using custom domain)

## 🆘 Common Issues & Solutions

### Issue: WhatsApp doesn't open
**Solution:** Check the phone number format
```
✓ Correct: 918380808435 (no +, space, or hyphen)
✗ Wrong: +91-8380-808435
```

### Issue: Products not showing
**Solution:** Check ProductManager in script.js has products defined

### Issue: Images not displaying
**Solution:** Verify image path is correct
```
✓ Correct path: products/my-image.jpg
✗ Wrong path: /products/my-image.jpg (if not in root)
```

### Issue: Styles not working
**Solution:** Clear browser cache (Ctrl+Shift+Del) and refresh

### Issue: Cart not saving
**Solution:** Ensure localStorage is enabled in browser settings

## 📞 WhatsApp Setup

### To Get Your WhatsApp Business Number:
1. Download WhatsApp Business app
2. Set up your account
3. Go to Settings → Business Account
4. Get your number in format: `91XXXXXXXXXX` (country code + number)

### Test WhatsApp Link:
Open this URL in browser (replace with your number):
```
https://wa.me/91XXXXXXXXXX?text=Hello
```

If WhatsApp opens, your number is correct!

## 🎯 Next Steps After Launch

1. **Add More Products** - Keep updating your catalog
2. **Marketing** - Share with customers on Instagram, Facebook, WhatsApp
3. **Analytics** - Add Google Analytics to track visitors
4. **Reviews** - Add customer reviews section (manual updates)
5. **SEO** - Add meta descriptions and keywords
6. **Email** - Set up email notifications for orders
7. **Database** - Migrate to real database for order history

## 💡 Pro Tips

1. **Mobile First**: Always test on mobile before launching
2. **Fast Images**: Use compressed images for faster loading
3. **SEO**: Add descriptive product names and descriptions
4. **Social**: Add social media links in footer
5. **Trust**: Add customer testimonials
6. **Analytics**: Track which products sell best
7. **Inventory**: Keep track of stock manually (for now)

## 🚀 Going Live Checklist

```
Pre-Launch (Before sharing)
- [ ] All branding done
- [ ] All products added
- [ ] Prices confirmed
- [ ] WhatsApp number verified
- [ ] Tested on mobile and desktop
- [ ] All links working
- [ ] Images loading correctly

Launch Day
- [ ] Deploy to hosting
- [ ] Test live site
- [ ] Share WhatsApp link with customers
- [ ] Post on social media
- [ ] Enable Google Analytics
- [ ] Monitor WhatsApp for orders

Post-Launch
- [ ] Respond to customer inquiries
- [ ] Process orders quickly
- [ ] Add customer reviews
- [ ] Keep inventory updated
- [ ] Monitor website performance
```

## 📞 Support Resources

### Built-in Tools:
- **Product Manager** - Manage products in script.js
- **Cart System** - Uses browser localStorage
- **Order Processing** - Direct WhatsApp messaging
- **Analytics Ready** - Add Google Analytics ID

### External Services to Consider:
- **Google Analytics** - Free website traffic tracking
- **WhatsApp Business API** - For automated messages (paid)
- **Firebase** - Free database backend
- **Stripe/Razorpay** - For actual payments
- **Mailchimp** - Email marketing

## 🎓 Learning Resources

- CSS Guide: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Font Awesome Icons: https://fontawesome.com/icons
- Google Fonts: https://fonts.google.com/

## ✨ Features Overview

✅ **Responsive Design** - Works on all devices
✅ **Product Gallery** - Multiple images per product
✅ **Custom Designer** - Full product customization
✅ **Shopping Cart** - Add/remove items, adjust quantity
✅ **Wishlist** - Save favorite products
✅ **Order Checkout** - Complete order form
✅ **WhatsApp Integration** - Orders sent to your WhatsApp
✅ **Mobile Optimized** - Fast loading on mobile
✅ **No Backend Needed** - Works completely on frontend
✅ **Easy Customization** - Change colors, products, text easily

---

## 🎉 You're Ready!

Your e-commerce website is ready to launch. Follow the steps above and you'll have your site live in minutes!

**Questions?** Check the README.md file for more detailed information.

**Ready to launch?** Share your site with customers and start taking orders! 🚀

---

**Made with ❤️ for Cluster Studio**
