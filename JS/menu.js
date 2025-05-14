
        const pizzas = [
                {
                    name: "Chicken Fajita",
                    desc: "Grilled chicken, capsicum, onions, and fajita seasoning.",
                    img: "../Assests/Card1.png"
                },
            {
                name: "Fajita Sicilian",
                desc: "Spicy chicken, black olives, capsicum, onions, and herbs.",
                img: "../Assests/Card2.png"
            },
            {
                name: "Cheese Lover",
                desc: "Mozzarella, cheddar, parmesan, and creamy cheese sauce.",
                img: "../Assests/Card3.png"
            },
            {
                name: "Peri Peri",
                desc: "Peri peri chicken, red onions, capsicum, and tangy sauce.",
                img: "../Assests/Card4.png"
            }
            ,
            {
                name: "Peri Peri",
                desc: "Peri peri chicken, red onions, capsicum, and tangy sauce.",
                img: "../Assests/Card6.png"
            }
            ,
            {
                name: "Peri Peri",
                desc: "Peri peri chicken, red onions, capsicum, and tangy sauce.",
                img: "../Assests/Card7.png"
            }
        ];

        const prices = {
            "Small": 445,
            "Medium": 675,
            "Large": 895
        };

        const cart = [];

        const menuContainer = document.getElementById("pizzaMenu");
        const cartItemsContainer = document.getElementById("cartItems");
        const totalPriceSpan = document.getElementById("totalPrice");

        function renderMenu() {
            pizzas.forEach(pizza => {
                const col = document.createElement("div");
                col.className = "col";

                col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${pizza.img}" class="card-img-top" alt="${pizza.name}">
          <div class="card-body">
            <h5 class="card-title">${pizza.name}</h5>
            <p class="card-text">${pizza.desc}</p>
            <div class="d-flex justify-content-between align-items-center">
              <select class="form-select form-select-sm w-50 size-select">
                <option value="Small">Small - Rs. 445</option>
                <option value="Medium">Medium - Rs. 675</option>
                <option value="Large">Large - Rs. 895</option>
              </select>
              <button class="btn btn-danger btn-sm add-btn">Add</button>
            </div>
          </div>
        </div>
      `;

                const addBtn = col.querySelector(".add-btn");
                const sizeSelect = col.querySelector(".size-select");

                addBtn.addEventListener("click", () => {
                    const size = sizeSelect.value;
                    addToCart(pizza.name, size);
                });

                menuContainer.appendChild(col);
            });
        }

        function addToCart(name, size) {
            const index = cart.findIndex(item => item.name === name && item.size === size);
            if (index !== -1) {
                cart[index].qty += 1;
            } else {
                cart.push({ name, size, qty: 1 });
            }
            updateCartDisplay();
        }

        function updateCartDisplay() {
            cartItemsContainer.innerHTML = "";
            let total = 0;

            cart.forEach((item, i) => {
                const price = prices[item.size];
                const subtotal = price * item.qty;
                total += subtotal;

                const div = document.createElement("div");
                div.className = "cart-item d-flex justify-content-between align-items-center";
                div.innerHTML = `
        <div>
          <strong>${item.name}</strong> (${item.size}) - Rs. ${price} x ${item.qty} = Rs. ${subtotal}
        </div>
        <div>
          <button class="quantity-btn" onclick="decreaseQty(${i})">−</button>
          <button class="quantity-btn" onclick="increaseQty(${i})">+</button>
        </div>
      `;
                cartItemsContainer.appendChild(div);
            });

            totalPriceSpan.textContent = total;
        }

        function increaseQty(index) {
            cart[index].qty += 1;
            updateCartDisplay();
        }

        function decreaseQty(index) {
            if (cart[index].qty > 1) {
                cart[index].qty -= 1;
            } else {
                cart.splice(index, 1);
            }
            updateCartDisplay();
        }

        renderMenu();

        function addToCart(name, size) {
            const index = cart.findIndex(item => item.name === name && item.size === size);
            if (index !== -1) {
                cart[index].qty += 1;
            } else {
                cart.push({ name, size, qty: 1 });
            }
            saveCart();
            updateCartDisplay();
        }

        function saveCart() {
            localStorage.setItem("cart", JSON.stringify(cart));
        }

        function updateCartDisplay() {
            cartCount.textContent = cart.reduce((acc, item) => acc + item.qty, 0);
            renderFullCart();
        }

        function renderFullCart() {
            const fullCartItems = document.getElementById("fullCartItems");
            const fullTotalPrice = document.getElementById("fullTotalPrice");

            fullCartItems.innerHTML = "";
            let total = 0;

            cart.forEach((item, i) => {
                const price = prices[item.size];
                const subtotal = price * item.qty;
                total += subtotal;

                const div = document.createElement("div");
                div.className = "d-flex justify-content-between align-items-center mb-2 border-bottom pb-2";
                div.innerHTML = `
                    <div>
                        <strong>${item.name}</strong><br>
                        <small>${item.size} - Rs. ${price} x ${item.qty} = Rs. ${subtotal}</small>
                    </div>
                    <div>
                        <button class="quantity-btn" onclick="decreaseQty(${i})">−</button>
                        <button class="quantity-btn" onclick="increaseQty(${i})">+</button>
                        <span class="remove-btn" onclick="removeItem(${i})">&times;</span>
                    </div>
                `;
                fullCartItems.appendChild(div);
            });

            fullTotalPrice.textContent = total;
        }

        function increaseQty(index) {
            cart[index].qty += 1;
            saveCart();
            updateCartDisplay();
        }

        function decreaseQty(index) {
            if (cart[index].qty > 1) {
                cart[index].qty -= 1;
            } else {
                cart.splice(index, 1);
            }
            saveCart();
            updateCartDisplay();
        }

        function removeItem(index) {
            cart.splice(index, 1);
            saveCart();
            updateCartDisplay();
        }

        document.getElementById("cartIcon").addEventListener("click", (e) => {
            e.preventDefault();
            fullCart.style.display = fullCart.style.display === "block" ? "none" : "block";
            renderFullCart();
        });

        renderMenu();
        updateCartDisplay();