// ==================== CART & STORAGE MANAGEMENT ====================
const StorageManager = {
    getCart: () => JSON.parse(localStorage.getItem('cart')) || [],
    setCart: (cart) => localStorage.setItem('cart', JSON.stringify(cart)),
    
    getWishlist: () => JSON.parse(localStorage.getItem('wishlist')) || [],
    setWishlist: (wishlist) => localStorage.setItem('wishlist', JSON.stringify(wishlist)),
    
    getRecentlyViewed: () => JSON.parse(localStorage.getItem('recentlyViewed')) || [],
    setRecentlyViewed: (items) => localStorage.setItem('recentlyViewed', JSON.stringify(items)),
    
    getCustomOrder: () => JSON.parse(localStorage.getItem('customOrder')) || {},
    setCustomOrder: (order) => localStorage.setItem('customOrder', JSON.stringify(order)),
    
    clearCart: () => localStorage.removeItem('cart'),
    clearCustomOrder: () => localStorage.removeItem('customOrder'),
};

// ==================== CART OPERATIONS ====================
const CartManager = {
    addToCart: (product) => {
        const cart = StorageManager.getCart();
        const existingItem = cart.find(item => 
            item.id === product.id && 
            item.color === product.color && 
            item.size === product.size
        );

        if (existingItem) {
            existingItem.quantity += product.quantity || 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                color: product.color,
                size: product.size,
                quantity: product.quantity || 1,
                image: product.image || null,
            });
        }

        StorageManager.setCart(cart);
        updateCartCount();
        showToast('Added to cart!', 'success');
    },

    removeFromCart: (id, color, size) => {
        let cart = StorageManager.getCart();
        cart = cart.filter(item => !(item.id === id && item.color === color && item.size === size));
        StorageManager.setCart(cart);
        updateCartCount();
        showToast('Removed from cart', 'success');
    },

    updateQuantity: (id, color, size, quantity) => {
        const cart = StorageManager.getCart();
        const item = cart.find(item => item.id === id && item.color === color && item.size === size);
        if (item) {
            item.quantity = Math.max(1, quantity);
            StorageManager.setCart(cart);
            updateCartCount();
        }
    },

    getCartTotal: () => {
        const cart = StorageManager.getCart();
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    getCartItemCount: () => {
        const cart = StorageManager.getCart();
        return cart.reduce((count, item) => count + item.quantity, 0);
    },
};

// ==================== WISHLIST OPERATIONS ====================
const WishlistManager = {
    addToWishlist: (product) => {
        const wishlist = StorageManager.getWishlist();
        const exists = wishlist.find(item => item.id === product.id);
        
        if (!exists) {
            wishlist.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image || null,
            });
            StorageManager.setWishlist(wishlist);
            updateWishlistCount();
            showToast('Added to wishlist!', 'success');
        } else {
            showToast('Already in wishlist', 'error');
        }
    },

    removeFromWishlist: (id) => {
        let wishlist = StorageManager.getWishlist();
        wishlist = wishlist.filter(item => item.id !== id);
        StorageManager.setWishlist(wishlist);
        updateWishlistCount();
        showToast('Removed from wishlist', 'success');
    },

    isInWishlist: (id) => {
        const wishlist = StorageManager.getWishlist();
        return wishlist.some(item => item.id === id);
    },
};

// ==================== CUSTOM ORDER MANAGEMENT ====================
const CustomOrderManager = {
    createOrder: (productType, customization) => {
        const order = {
            productType,
            customization,
            timestamp: new Date().toISOString(),
        };
        StorageManager.setCustomOrder(order);
    },

    addCustomToCart: (product) => {
        const cart = StorageManager.getCart();
        const customOrder = StorageManager.getCustomOrder();
        
        const cartItem = {
            id: Date.now(),
            name: product.name,
            type: 'custom',
            price: product.price,
            color: product.color,
            size: product.size,
            quantity: 1,
            customization: customOrder.customization,
        };

        cart.push(cartItem);
        StorageManager.setCart(cart);
        StorageManager.clearCustomOrder();
        updateCartCount();
        showToast('Custom product added to cart!', 'success');
    },
};

// ==================== UI UPDATES ====================
function updateCartCount() {
    const count = CartManager.getCartItemCount();
    const cartBadges = document.querySelectorAll('.cart-count');
    cartBadges.forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    });
}

function updateWishlistCount() {
    const count = StorageManager.getWishlist().length;
    const wishlistBadges = document.querySelectorAll('.wishlist-count');
    wishlistBadges.forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    });
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== SEARCH FUNCTIONALITY ====================
const SearchManager = {
    init: () => {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length > 0) {
                SearchManager.performSearch(query);
            }
        });
    },

    performSearch: (query) => {
        // This would typically search through products
        // For now, just show a toast
        showToast(`Searching for "${query}"...`, 'success');
    },
};

// ==================== FILTER FUNCTIONALITY ====================
function filterProducts(category) {
    showToast(`Showing ${category} products...`, 'success');
    // Implement actual filtering logic
}

// ==================== WHATSAPP INTEGRATION ====================
const WhatsAppManager = {
    phone: '+91 83808 08435', // Replace with actual WhatsApp number
    formatPhoneNumber: (phone) => {
        return phone.replace(/[^0-9]/g, '');
    },

    sendOrderToWhatsApp: (orderDetails) => {
        const formattedPhone = WhatsAppManager.formatPhoneNumber(WhatsAppManager.phone);
        const message = WhatsAppManager.formatMessage(orderDetails);
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    },

    formatMessage: (order) => {
        let message = '*Cluster Studio - Order Details*\n\n';
        message += `*Customer Name:* ${order.customerName}\n`;
        message += `*Phone:* ${order.phone}\n`;
        message += `*Email:* ${order.email || 'N/A'}\n`;
        message += `*Delivery Address:* ${order.address}\n\n`;
        message += `*Order Items:*\n`;

        order.items.forEach((item, index) => {
            message += `\n${index + 1}. ${item.name}\n`;
            message += `   Quantity: ${item.quantity}\n`;
            message += `   Price: ₹${item.price}\n`;
            if (item.color) message += `   Color: ${item.color}\n`;
            if (item.size) message += `   Size: ${item.size}\n`;
        });

        message += `\n*Total Amount:* ₹${order.total}\n`;
        message += `*Order Date:* ${new Date().toLocaleDateString('en-IN')}\n\n`;
        message += 'Thank you for your order!';

        return message;
    },
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateWishlistCount();
    SearchManager.init();
    initMobileMenu();
    initSmoothScroll();
});

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ==================== LOCAL STORAGE UTILITIES ====================
function exportOrderData() {
    const cart = StorageManager.getCart();
    const data = JSON.stringify(cart, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `order_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// ==================== ANALYTICS TRACKING ====================
const Analytics = {
    trackPageView: (page) => {
        if (window.gtag) {
            window.gtag('pageview', { page });
        }
        console.log(`Page viewed: ${page}`);
    },

    trackEvent: (category, action, label) => {
        if (window.gtag) {
            window.gtag('event', action, {
                event_category: category,
                event_label: label,
            });
        }
        console.log(`Event: ${category} - ${action} - ${label}`);
    },

    trackAddToCart: (productId, productName, price) => {
        Analytics.trackEvent('ecommerce', 'add_to_cart', productName);
    },

    trackCheckout: (orderId, total) => {
        Analytics.trackEvent('ecommerce', 'checkout', `Order: ${orderId}`);
    },
};

// ==================== ORDER TRACKING ====================
const OrderTracking = {
    getOrderStatus: (orderId) => {
        // Placeholder for order tracking logic
        // In a real app, this would fetch from a database
        return {
            orderId,
            status: 'Processing',
            estimatedDelivery: '5-7 business days',
        };
    },

    trackOrder: (orderId) => {
        const status = OrderTracking.getOrderStatus(orderId);
        console.log(`Order ${orderId} Status: ${status.status}`);
        showToast(`Order Status: ${status.status}`, 'success');
    },
};

// ==================== PRODUCT MANAGEMENT ====================
const ProductManager = {
    // Sample products - Replace with actual product data
    products: [
        {
            id: 1,
            name: 'Premium T-Shirt',
            category: 'men',
            price: 499,
            description: 'High-quality cotton t-shirt',
            image: null,
            colors: ['Black', 'White', 'Gray'],
            sizes: ['S', 'M', 'L', 'XL'],
        },
        {
            id: 2,
            name: 'Women\'s Top',
            category: 'women',
            price: 599,
            description: 'Elegant women\'s top',
            image: null,
            colors: ['Black', 'Pink', 'Blue'],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
        },
    ],

    getProduct: (id) => {
        return ProductManager.products.find(p => p.id === id);
    },

    getProductsByCategory: (category) => {
        return ProductManager.products.filter(p => p.category === category);
    },

    getAllProducts: () => {
        return ProductManager.products;
    },

    addProduct: (product) => {
        product.id = Date.now();
        ProductManager.products.push(product);
        return product;
    },

    searchProducts: (query) => {
        return ProductManager.products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase())
        );
    },
};

// ==================== UTILITY FUNCTIONS ====================
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(price);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(date));
}

function formatPhoneNumber(phone) {
    return phone.replace(/[^0-9+]/g, '');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhoneNumber(phone) {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone);
}

// ==================== EXPORT FOR USE IN OTHER FILES ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        StorageManager,
        CartManager,
        WishlistManager,
        CustomOrderManager,
        WhatsAppManager,
        Analytics,
        OrderTracking,
        ProductManager,
    };
}
