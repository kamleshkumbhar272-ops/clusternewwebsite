# Cluster Studio - Premium Custom E-Commerce Platform

A modern, fully responsive e-commerce website for selling custom and ready-made products. Built with HTML, CSS, and vanilla JavaScript.

## 🎯 Features

### Core Features
- ✅ **Modern Responsive Design** - Works perfectly on all devices
- ✅ **Custom Product Designer** - Image upload, text customization, live preview
- ✅ **Shopping Cart** - Add/remove items, quantity adjustment
- ✅ **Wishlist** - Save favorite products
- ✅ **Product Gallery** - Multiple image support with image slider
- ✅ **Product Customization** - Colors, sizes, front/back design
- ✅ **Search & Filter** - Find products easily
- ✅ **Order Management** - Complete checkout process
- ✅ **WhatsApp Integration** - Orders sent directly to your WhatsApp
- ✅ **Local Storage** - Cart and wishlist persistence

### Pages Included
1. **index.html** - Homepage with hero, categories, featured products
2. **custom-product.html** - Custom product designer with live preview
3. **product-detail.html** - Detailed product view with images, colors, sizes
4. **cart.html** - Shopping cart with summary and coupon support
5. **checkout.html** - Order form with WhatsApp integration

## 📋 File Structure

```
Cluster Studio/
├── index.html              # Homepage
├── custom-product.html     # Custom designer page
├── product-detail.html     # Product details page
├── cart.html              # Shopping cart page
├── checkout.html          # Checkout & order page
├── styles.css             # Global styles
└── script.js              # Core functionality
```

## 🚀 Getting Started

### 1. Basic Setup
1. Download all files
2. Place them in a folder on your web server or local directory
3. Open `index.html` in a web browser
4. No build process needed - it's ready to use!

### 2. WhatsApp Integration Setup
Replace the WhatsApp number in `script.js`:

```javascript
// In script.js, find this line:
const WhatsAppManager = {
    phone: '+91 83808 08435', // Change this to your WhatsApp number
    // ...
};
```

Also update in `checkout.html`:
```javascript
const whatsappPhone = '918380808435'; // Your WhatsApp number without + or spaces
```

### 3. Customize Your Logo
Edit the logo in the navigation bar in all HTML files:

```html
<div class="logo-placeholder">
    <i class="fas fa-leaf"></i> <!-- Change this icon -->
    <div>
        <div class="logo-text">CLUSTER</div>      <!-- Your brand name -->
        <div class="logo-subtext">STUDIO</div>     <!-- Your tagline -->
    </div>
</div>
```

Or replace with an image:
```html
<img src="your-logo.png" alt="Logo" style="height: 40px;">
```

## 🎨 Customization Guide

### Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #8B2E3C;        /* Main brand color */
    --primary-dark: #6B1F2D;         /* Darker shade */
    --primary-light: #A63D52;        /* Lighter shade */
    --secondary-color: #F4E4D7;      /* Accent color */
    --accent-color: #D4A574;         /* Gold accent */
    /* ... more colors ... */
}
```

### Fonts
The site uses Google Fonts:
- **Headers**: Cormorant Garamond (serif)
- **Body**: Poppins (sans-serif)

To change fonts, update the `@import` links in HTML files.

### Contact Information
Update across all pages:
- **Phone**: Change phone number in footer and checkout
- **Email**: Update in footer
- **Address**: Update in footer

## 📦 Adding Products

### 1. Via Product Manager
Edit `script.js`:

```javascript
const ProductManager = {
    products: [
        {
            id: 1,
            name: 'Your Product Name',
            category: 'men',  // or 'women', 'casual', etc.
            price: 499,
            description: 'Product description',
            image: null,  // Add image path when ready
            colors: ['Black', 'White', 'Gray'],
            sizes: ['S', 'M', 'L', 'XL'],
        },
        // Add more products here
    ],
};
```

### 2. Add Product Images
1. Create a `products/` folder
2. Add your product images
3. Update the `image` field in ProductManager with the path:
   ```javascript
   image: 'products/product-1.jpg',
   ```

### 3. Featured Products Section
To display products on homepage, they'll automatically load from ProductManager.

## 🛒 Shopping Features

### Cart Management
- Products automatically save to localStorage
- Customers can adjust quantities
- Automatic total calculation with tax (18%)
- Free shipping (can be customized)
- Coupon support (edit codes in cart.html)

### Sample Coupon Codes
In `cart.html`, add more coupons:

```javascript
const coupons = {
    'SAVE10': 10,      // ₹10 discount
    'WELCOME20': 20,   // ₹20 discount
    'CLUSTER15': 15,   // ₹15 discount
    'CUSTOM25': 25,    // ₹25 discount
};
```

## 🎨 Custom Product Designer Features

The custom designer supports:
- **Image Upload**: Users can upload their own images
- **Text Addition**: Add custom text with font options
- **Color Selection**: Choose from 8 preset colors
- **Font Styles**: Arial, Georgia, Courier, Times New Roman, Verdana
- **Text Positioning**: Top, center, or bottom placement
- **Real-time Preview**: See changes instantly
- **Size & Quantity**: Select product size and quantity

### Price Calculation
Base prices for custom products (edit in `custom-product.html`):

```javascript
const products = {
    tshirt: { name: 'Custom T-Shirt', basePrice: 499, sizes: ['S', 'M', 'L', 'XL'] },
    mug: { name: 'Custom Mug', basePrice: 299, sizes: ['Normal'] },
    hoodie: { name: 'Custom Hoodie', basePrice: 799, sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    // Add more products...
};
```

## 📱 Mobile Responsive

The website is fully responsive with breakpoints for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (480px - 767px)
- Small Mobile (<480px)

## 🔧 Features & Functions

### Cart Functions
```javascript
CartManager.addToCart(product)           // Add item to cart
CartManager.removeFromCart(id, color, size)  // Remove item
CartManager.updateQuantity(id, color, size, quantity)  // Update qty
CartManager.getCartTotal()               // Get total amount
CartManager.getCartItemCount()           // Get item count
```

### Wishlist Functions
```javascript
WishlistManager.addToWishlist(product)   // Add to wishlist
WishlistManager.removeFromWishlist(id)   // Remove from wishlist
WishlistManager.isInWishlist(id)         // Check if in wishlist
```

### Storage Functions
```javascript
StorageManager.getCart()                 // Get cart from storage
StorageManager.setCart(cart)             // Save cart to storage
StorageManager.getWishlist()             // Get wishlist
StorageManager.setWishlist(wishlist)     // Save wishlist
```

### WhatsApp Integration
```javascript
WhatsAppManager.sendOrderToWhatsApp(orderDetails)  // Send order to WhatsApp
WhatsAppManager.formatMessage(order)               // Format order message
```

## 📊 Analytics & Tracking

Google Analytics integration is ready:

```javascript
Analytics.trackPageView(page)             // Track page views
Analytics.trackEvent(category, action, label)  // Track events
Analytics.trackAddToCart(productId, name, price)  // Track cart actions
Analytics.trackCheckout(orderId, total)   // Track checkout
```

Add your Google Analytics ID in the HTML `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 🛡️ Security Notes

- **Payment Security**: No actual payments are processed. For real payments, integrate a payment gateway like Razorpay, Stripe, etc.
- **WhatsApp Orders**: Orders are sent as messages to your WhatsApp. You'll process them manually.
- **Data Storage**: Customer data is stored locally in the browser. For production, use a database.
- **Order Database**: Implement a backend database to store orders permanently.

## 🚀 Deployment

### Hosting Options
1. **Netlify** (Free): Drag & drop your files
2. **Vercel** (Free): Connect GitHub repo
3. **GitHub Pages** (Free): Push to GitHub
4. **Traditional Hosting**: FTP upload to your server
5. **AWS S3**: Host as static website

### Pre-deployment Checklist
- [ ] Update all contact information
- [ ] Set correct WhatsApp number
- [ ] Add product images and details
- [ ] Test all features on mobile
- [ ] Set up Google Analytics
- [ ] Test WhatsApp integration
- [ ] Review all links
- [ ] Set up SSL certificate (HTTPS)

## 🔗 Links & Resources

### Google Fonts
- Cormorant Garamond: https://fonts.google.com/specimen/Cormorant+Garamond
- Poppins: https://fonts.google.com/specimen/Poppins

### Icons
- Font Awesome: https://fontawesome.com/

### Color Palette
Current colors (burgundy & cream theme):
- Primary: #8B2E3C (Burgundy)
- Secondary: #F4E4D7 (Cream)
- Accent: #D4A574 (Gold)

## 🐛 Troubleshooting

### Cart Not Saving
- Check browser localStorage settings
- Clear cache and try again
- Ensure cookies are enabled

### Images Not Showing
- Verify image paths are correct
- Check file exists in the correct folder
- Use absolute URLs if in different folder

### WhatsApp Not Opening
- Verify phone number format (no spaces, starts with country code)
- Test the WhatsApp link: `https://wa.me/91XXXXXXXXXX?text=Hello`
- Ensure WhatsApp is installed on the device

### Mobile Menu Not Working
- Check JavaScript is enabled
- Clear browser cache
- Try different browser

## 📞 Support & Updates

To get support or request features:
1. Check the code comments for implementation details
2. Review JavaScript functions in `script.js`
3. Customize CSS variables for styling changes

## 📄 License

This template is provided as-is for your e-commerce business. Modify as needed for your brand.

## 🎉 Getting Started Checklist

- [ ] Download all files
- [ ] Update brand name/logo
- [ ] Set WhatsApp number
- [ ] Update contact information
- [ ] Add product details and images
- [ ] Test on mobile devices
- [ ] Test cart functionality
- [ ] Test checkout process
- [ ] Deploy to hosting
- [ ] Share with customers!

---

**Made with ❤️ for Cluster Studio**
Your complete e-commerce solution for custom products.
