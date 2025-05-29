const fruits = [
  { name: 'Apple', price: 1.00 },
  { name: 'Banana', price: 0.50 },
  { name: 'Strawberry', price: 2.00 },
  { name: 'Grapes', price: 1.50 }
];

// Function to update the cart count badge in the header
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartCountEl = document.getElementById('cart-count');
  if (cartCountEl) {
    cartCountEl.textContent = totalQty;
  }
}

document.querySelectorAll('button').forEach((button, index) => {
  button.addEventListener('click', () => {
    const fruit = fruits[index];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if item already exists in cart
    const existing = cart.find(item => item.name === fruit.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...fruit, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); // Update cart quantity in header after adding product

    // Removed redirect to cart page per your request
  });
});

// Initial call to update cart count in case there are items on page load
updateCartCount();
