function buyNow(productName) {
    var phoneNumber = "8801975805326";
    var message = "আমি " + productName + " অর্ডার করতে চাই";
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}
