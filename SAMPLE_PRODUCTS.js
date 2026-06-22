// ==================== SAMPLE PRODUCTS DATABASE ====================
// 
// This file contains sample products for your Cluster Studio store.
// Copy this into script.js to use these products in your store.
// 
// Instructions:
// 1. Copy the products array below
// 2. Paste it into script.js, replacing the existing products array
// 3. Update with your own product details
// 4. Add image paths when you have your product photos
//

const SAMPLE_PRODUCTS = [
    // MEN'S COLLECTION
    {
        id: 1,
        name: 'Classic Premium T-Shirt',
        category: 'men',
        price: 499,
        originalPrice: 799,
        description: 'Our premium cotton t-shirt is crafted from the finest quality materials. Perfect for everyday wear with superior comfort and durability. Available in multiple colors and sizes to suit your style.',
        image: 'products/mens-tshirt.jpg', // Add your image path
        colors: ['Black', 'White', 'Gray', 'Navy', 'Red'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        inStock: true,
        rating: 4.5,
        reviews: 128,
    },
    {
        id: 2,
        name: 'Casual Cotton Hoodie',
        category: 'men',
        price: 799,
        originalPrice: 1299,
        description: 'Cozy and stylish hoodie perfect for cool weather. Made from soft cotton blend with kangaroo pockets.',
        image: 'products/mens-hoodie.jpg',
        colors: ['Black', 'Gray', 'Navy', 'White'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        inStock: true,
        rating: 4.7,
        reviews: 89,
    },
    {
        id: 3,
        name: 'Fitted Casual Jacket',
        category: 'men',
        price: 1299,
        originalPrice: 1999,
        description: 'Lightweight jacket perfect for layering. Water-resistant and breathable fabric.',
        image: 'products/mens-jacket.jpg',
        colors: ['Black', 'Navy', 'Olive', 'Brown'],
        sizes: ['S', 'M', 'L', 'XL'],
        inStock: true,
        rating: 4.6,
        reviews: 67,
    },

    // WOMEN'S COLLECTION
    {
        id: 4,
        name: 'Women\'s Premium T-Shirt',
        category: 'women',
        price: 549,
        originalPrice: 899,
        description: 'Elegant women\'s t-shirt with a perfect fit. Soft fabric that feels great all day.',
        image: 'products/womens-tshirt.jpg',
        colors: ['Black', 'White', 'Pink', 'Blue', 'Purple'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        inStock: true,
        rating: 4.8,
        reviews: 156,
    },
    {
        id: 5,
        name: 'Stylish Women\'s Hoodie',
        category: 'women',
        price: 899,
        originalPrice: 1499,
        description: 'Comfortable and fashionable hoodie for women. Perfect for casual outings.',
        image: 'products/womens-hoodie.jpg',
        colors: ['Black', 'Gray', 'Pink', 'Purple', 'Blue'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        inStock: true,
        rating: 4.7,
        reviews: 94,
    },

    // CASUAL WEAR
    {
        id: 6,
        name: 'Cotton Tank Top',
        category: 'casual',
        price: 349,
        originalPrice: 599,
        description: 'Perfect for summer. Breathable and comfortable cotton tank top.',
        image: 'products/tank-top.jpg',
        colors: ['Black', 'White', 'Yellow', 'Blue'],
        sizes: ['S', 'M', 'L', 'XL'],
        inStock: true,
        rating: 4.5,
        reviews: 78,
    },
    {
        id: 7,
        name: 'Casual Shorts',
        category: 'casual',
        price: 599,
        originalPrice: 999,
        description: 'Comfortable shorts for casual wear. Perfect for summer and outdoor activities.',
        image: 'products/shorts.jpg',
        colors: ['Black', 'Gray', 'Blue', 'Khaki'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        inStock: true,
        rating: 4.4,
        reviews: 65,
    },

    // ACCESSORIES
    {
        id: 8,
        name: 'Personalized Coffee Mug',
        category: 'accessories',
        price: 299,
        originalPrice: 499,
        description: 'Custom printed mug. Perfect for gifts. Microwave and dishwasher safe.',
        image: 'products/mug.jpg',
        colors: ['White'],
        sizes: ['Normal (330ml)'],
        inStock: true,
        rating: 4.6,
        reviews: 112,
    },
    {
        id: 9,
        name: 'Custom Keychain',
        category: 'accessories',
        price: 149,
        originalPrice: 249,
        description: 'Durable custom keychain with your personal design.',
        image: 'products/keychain.jpg',
        colors: ['Black', 'Silver', 'Gold'],
        sizes: ['Normal'],
        inStock: true,
        rating: 4.5,
        reviews: 203,
    },

    // BAGS & CARRIERS
    {
        id: 10,
        name: 'Canvas Tote Bag',
        category: 'bags',
        price: 499,
        originalPrice: 799,
        description: 'Durable canvas bag perfect for shopping and travel. Eco-friendly option.',
        image: 'products/tote-bag.jpg',
        colors: ['Black', 'Natural', 'Navy'],
        sizes: ['Normal', 'Large'],
        inStock: true,
        rating: 4.7,
        reviews: 89,
    },
    {
        id: 11,
        name: 'Backpack with Custom Print',
        category: 'bags',
        price: 899,
        originalPrice: 1499,
        description: 'Stylish backpack with multiple compartments. Water-resistant.',
        image: 'products/backpack.jpg',
        colors: ['Black', 'Gray', 'Navy'],
        sizes: ['Normal'],
        inStock: true,
        rating: 4.6,
        reviews: 76,
    },

    // HOME & LIVING
    {
        id: 12,
        name: 'Custom Printed Cushion',
        category: 'home',
        price: 599,
        originalPrice: 999,
        description: 'Soft cushion with custom print. Perfect for home decoration. Machine washable.',
        image: 'products/cushion.jpg',
        colors: ['White', 'Beige', 'Gray'],
        sizes: ['16x16', '18x18', '20x20'],
        inStock: true,
        rating: 4.8,
        reviews: 134,
    },
    {
        id: 13,
        name: 'Personalized Phone Case',
        category: 'home',
        price: 399,
        originalPrice: 699,
        description: 'Durable phone case with custom design. Available for multiple phone models.',
        image: 'products/phonecase.jpg',
        colors: ['Black', 'Clear'],
        sizes: ['iPhone 12', 'iPhone 13', 'iPhone 14', 'Samsung A12'],
        inStock: true,
        rating: 4.7,
        reviews: 198,
    },
    {
        id: 14,
        name: 'Custom Water Bottle',
        category: 'home',
        price: 399,
        originalPrice: 699,
        description: 'Stainless steel water bottle with custom print. Keep drinks hot or cold.',
        image: 'products/bottle.jpg',
        colors: ['Black', 'White', 'Blue'],
        sizes: ['500ml', '750ml', '1L'],
        inStock: true,
        rating: 4.6,
        reviews: 145,
    },
];

// ==================== HOW TO USE ====================
// 
// 1. Copy the SAMPLE_PRODUCTS array above
// 2. Find this section in script.js:
//    const ProductManager = {
//        products: [
//            // products here
//        ],
//
// 3. Replace the products array with:
//    products: SAMPLE_PRODUCTS,
//
// 4. Or merge with existing products:
//    products: [
//        ...SAMPLE_PRODUCTS,
//        // your other products
//    ],
//
// ==================== CUSTOMIZATION TIPS ====================
//
// UPDATE THESE FIELDS FOR EACH PRODUCT:
// 
// id:              Unique number for each product (1, 2, 3...)
// name:            Product name
// category:        men, women, casual, accessories, bags, home
// price:           Current selling price
// originalPrice:   Original price (for showing discount)
// description:     Product description (100-200 words)
// image:           Path to product image (e.g., 'products/my-product.jpg')
// colors:          Array of available colors
// sizes:           Array of available sizes
// inStock:         true or false
// rating:          Rating out of 5 (4.5, 4.8, etc.)
// reviews:         Number of customer reviews
//
// ==================== ADDING IMAGES ====================
//
// 1. Create a 'products' folder in the same location as your HTML files
// 2. Add your product images to this folder
// 3. Update the 'image' field with the path:
//    image: 'products/my-tshirt.jpg'
//
// IMAGE RECOMMENDATIONS:
// - Format: JPG or PNG
// - Size: 800x800 pixels minimum
// - File size: Less than 500KB each
// - Name: Use descriptive names (my-tshirt.jpg, not IMG_123.jpg)
//
// ==================== PRICING ====================
//
// Set competitive prices:
// - T-Shirts: ₹399-₹599
// - Hoodies: ₹699-₹999
// - Custom Mugs: ₹249-₹399
// - Custom Keychains: ₹149-₹199
// - Water Bottles: ₹399-₹599
// - Cushions: ₹499-₹799
//
// Always show original price higher than current price to indicate discount.
//
// ==================== EXAMPLE: ADDING YOUR OWN PRODUCT ====================
//
// {
//     id: 15,
//     name: 'My Custom Product',
//     category: 'men',  // Choose appropriate category
//     price: 499,       // Your selling price
//     originalPrice: 799,  // Original price for discount
//     description: 'Write a detailed description of your product here. Include material, size, features, and care instructions.',
//     image: 'products/my-custom-product.jpg',  // Path to image
//     colors: ['Black', 'White', 'Blue'],  // Available colors
//     sizes: ['S', 'M', 'L', 'XL'],  // Available sizes
//     inStock: true,  // Is it in stock?
//     rating: 4.5,    // Customer rating (0-5)
//     reviews: 42,    // Number of reviews
// },
//
// ==================== QUICK REFERENCE ====================
//
// CATEGORIES:
// - men: Men's collection
// - women: Women's collection
// - casual: Casual wear for all
// - accessories: Mugs, keychains, etc.
// - bags: Bags and carriers
// - home: Home and living items
//
// EXAMPLE COLORS:
// ['Black', 'White', 'Gray', 'Navy', 'Blue', 'Red', 'Pink', 'Green', 'Purple', 'Yellow']
//
// EXAMPLE SIZES:
// T-Shirts: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
// Hoodies: ['S', 'M', 'L', 'XL', 'XXL']
// Mugs: ['Normal (330ml)', 'Large (450ml)']
// Phone Cases: ['iPhone 12', 'iPhone 13', 'iPhone 14', 'Samsung A12']
// Bottles: ['500ml', '750ml', '1L']
//
// ==================== NEXT STEPS ====================
//
// 1. Update SAMPLE_PRODUCTS with your actual products
// 2. Add product images to the 'products' folder
// 3. Set correct prices and descriptions
// 4. Test your store
// 5. Launch!
//
// For more information, see README.md and QUICK_START.md
