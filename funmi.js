function placeOrder() {
  const phone = "+2348140379905";

  const message = "Hello, I would like to order Pleadel Rice Flour.";
  const url = `https://wa.me/${phone}?text = ${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
