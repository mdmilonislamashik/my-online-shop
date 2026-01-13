function orderNow(productName, price) {
    let phoneNumber = "8801975805326"; // আপনার WhatsApp নাম্বার (88 সহ)

    let message = 
        "Hello, আমি একটি অর্ডার করতে চাই.%0A%0A" +
        "Product: " + productName + "%0A" +
        "Price: " + price + "৳";

    let whatsappURL = 
        "https://wa.me/" + phoneNumber + "?text=" + message;

    window.open(whatsappURL, "_blank");
}
