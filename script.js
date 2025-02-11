// Cart Array to store added products
let cart = [];

// Function to add product to cart
function addToCart(productName, price) {
    let product = { name: productName, price: price };
    cart.push(product);
    alert(productName + " added to cart!");
    updateCartCount();
}

// Function to update cart count
function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

// Function to display cart items
function showCart() {
    let cartItems = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        cartItems += `<p>${index + 1}. ${item.name} - $${item.price}</p>`;
        totalPrice += item.price;
    });

    if (cart.length === 0) {
        cartItems = "<p>Cart is empty!</p>";
    }

    document.getElementById("cart-items").innerHTML = cartItems;
    document.getElementById("total-price").innerText = "Total: $" + totalPrice.toFixed(2);
}

// Clear cart function
function clearCart() {
    cart = [];
    updateCartCount();
    showCart();
}

// Search functionality
function searchProduct() {
    let searchInput = document.getElementById("search-bar").value.toLowerCase();
    let products = document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {
        let productName = products[i].getElementsByTagName("h2")[0].innerText.toLowerCase();
        if (productName.includes(searchInput)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}

// Event Listener for search bar
document.getElementById("search-bar").addEventListener("keyup", searchProduct);
