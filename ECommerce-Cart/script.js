document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
    },
  ];

  // add to product in this cart

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // call all ID
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  // render all products list
  products.forEach((product) => {
    // create new list item
    const productDiv = document.createElement("div");
    // add class for this div
    productDiv.classList.add("product");
    // add text in this div
    productDiv.innerHTML = `
    <span>${product.name} - ${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to Cart</button>
    `;
    // attach to the productList (aray of object data)
    productList.appendChild(productDiv);
  });

  // add event listner for each button of the product

  productList.addEventListener("click", (e) => {
    // need to click only on the button while add product

    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
    saveCart();
  }

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotal.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
       ${item.name} - $${item.price.toFixed(2)}
       <button data-id="${item.id}" class="remove-btn">Remove</button>
       `;
        cartItems.appendChild(cartItem);

        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
      cartTotal.classList.add("hidden");
    }
  }

  cartItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const productId = parseInt(e.target.getAttribute("data-id"));
      removeFromCart(productId);
    }
  });

  function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    saveCart();
    renderCart();
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout Successfully");
    renderCart();
  });

  renderCart();
});
