// Automatically directs booking requests to WhatsApp
function sendToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById('client-name').value;
    const phone = document.getElementById('client-phone').value;
    const service = document.getElementById('client-service').value;

    // Primary WhatsApp Number
    const fatherPhoneNumber = "918282964725"; 

    const message = `Hello Mana Aya Centre,%0A%0AI would like to request care services.%0A%0A👤 *Name:* ${name}%0A📱 *Phone:* ${phone}%0A🩺 *Service Needed:* ${service}`;

    const whatsappUrl = `https://wa.me/${fatherPhoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
}