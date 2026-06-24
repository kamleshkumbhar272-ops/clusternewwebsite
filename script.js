// ==================== CART & STORAGE MANAGEMENT ====================

// WhatsApp Auto-Fill Function
function sendToWhatsApp(event, productName, productPrice) {
    event.preventDefault();
    
    // Create message
    const message = `Hi! I'm interested in ordering:\n\n📦 *Product:* ${productName}\n💰 *Price:* ${productPrice}\n\nPlease provide more details and confirm availability.`;
    
    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number (with country code)
    const whatsappNumber = "918380808435";
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}