// cart.js

// Function to load cart items from local storage
function loadCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // Retrieve cart from local storage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Display items in the cart
    cartItemsContainer.innerHTML = ""; // Clear existing items
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>$${itemTotal.toFixed(2)}</span>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Update total price
    totalPriceElement.innerText = total.toFixed(2);
}

// Function to remove item from cart
function removeFromCart(productName) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter(item => item.name !== productName);

    // Save updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    loadCartItems(); // Refresh cart display
}

// Function to place order (clears the cart)
document.getElementById("place-order").addEventListener("click", () => {
    
    localStorage.removeItem("cart");
    alert("Thank you for your order!");
    loadCartItems(); // Refresh cart display
});

// Load cart items on page load
loadCartItems();






document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
