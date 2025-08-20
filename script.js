document.addEventListener('DOMContentLoaded', () => {
    // ======= MOBILE NAVIGATION TOGGLE =======
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // ======= CATEGORY TABS (Featured Games Options) =======
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ======= ADD TO CART BUTTONS =======
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartBadge = document.querySelector('.cart-badge');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get product info
            let product = this.closest('.product');
            let title = product.querySelector('.product-title') ? product.querySelector('.product-title').textContent : '';
            let price = product.querySelector('.product-price') ? product.querySelector('.product-price').textContent : '';
            let img = product.querySelector('img') ? product.querySelector('img').getAttribute('src') : '';

            // Get cart from localStorage or initialize
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if already in cart
            let found = cart.find(item => item.title === title);
            if (found) {
                found.qty += 1;
            } else {
                cart.push({ title, price, img, qty: 1 });
            }

            // Save back to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Animation effect
            this.innerHTML = '<i class="fas fa-check"></i> Added!';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            }, 2000);

            // Update cart badge
            if (cartBadge) {
                let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
                cartBadge.textContent = totalQty;
                cartBadge.style.transform = 'scale(1.5)';
                setTimeout(() => {
                    cartBadge.style.transform = 'scale(1)';
                }, 300);
            }
        });
    });

    // ======= SHOW CART ITEMS ON CART PAGE =======
    if (window.location.pathname.includes('cart.html')) {
        const cartTableBody = document.querySelector('.cart-table tbody');
        if (cartTableBody) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cartTableBody.innerHTML = '';
            cart.forEach((item, idx) => {
                let row = document.createElement('tr');
                row.innerHTML = `
                    <td><img src="${item.img}" alt="${item.title}" style="width:60px;border-radius:8px;background:#fff;"></td>
                    <td>${item.title}</td>
                    <td>${item.price}</td>
                    <td>${item.qty}</td>
                    <td><button class="remove-btn" data-idx="${idx}"><i class="fas fa-trash"></i></button></td>
                `;
                cartTableBody.appendChild(row);
            });

            // Update total
            const cartTotal = document.querySelector('.cart-total');
            if (cartTotal) {
                let total = cart.reduce((sum, item) => {
                    let priceNum = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
                    return sum + (priceNum * item.qty);
                }, 0);
                let currency = cart.length && cart[0].price.includes('$') ? '$' : 'PKR';
                cartTotal.textContent = `Total: ${currency}${total.toLocaleString()}`;
            }

            // Remove item logic
            cartTableBody.querySelectorAll('.remove-btn').forEach(btn => {
                btn.addEventListener('click', function () {
                    let idx = parseInt(this.getAttribute('data-idx'));
                    cart.splice(idx, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    location.reload();
                });
            });
        }
    }

    // ======= SHOW ORDER SUMMARY ON CHECKOUT PAGE =======
    if (window.location.pathname.includes('checkout.html')) {
        const orderList = document.querySelector('.order-list');
        const orderTotal = document.querySelector('.order-total');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (orderList) {
            orderList.innerHTML = '';
            cart.forEach(item => {
                let li = document.createElement('li');
                li.innerHTML = `<span>${item.title}</span><span>${item.price} x ${item.qty}</span>`;
                orderList.appendChild(li);
            });
        }
        if (orderTotal) {
            let total = cart.reduce((sum, item) => {
                let priceNum = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
                return sum + (priceNum * item.qty);
            }, 0);
            let currency = cart.length && cart[0].price.includes('$') ? '$' : 'PKR';
            orderTotal.textContent = `Total: ${currency}${total.toLocaleString()}`;
        }
    }

    // ======= WISHLIST/FAVORITE BUTTONS =======
    const wishlistButtons = document.querySelectorAll('.wishlist');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function () {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.replace('far', 'fas');
                icon.style.color = '#fdcb6e';
                this.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
                alert('Added to favorites!');
            } else {
                icon.classList.replace('fas', 'far');
                icon.style.color = '';
                alert('Removed from favorites!');
            }
        });
    });

    // ======= SEARCH FUNCTIONALITY =======
    const searchInput = document.querySelector('.search-container input');
    const products = document.querySelectorAll('.product');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase();
            products.forEach(product => {
                const title = product.querySelector('.product-title');
                if (title && title.textContent.toLowerCase().includes(query)) {
                    product.style.display = '';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }

    // ======= NEWSLETTER FORM =======
    const newsletterBtn = document.querySelector('.newsletter-form button');
    const newsletterInput = document.querySelector('.newsletter-form input');
    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', function () {
            if (newsletterInput.value && newsletterInput.value.includes('@')) {
                newsletterInput.value = '';
                this.textContent = 'Subscribed!';
                this.style.background = 'var(--success)';
                setTimeout(() => {
                    this.textContent = 'Subscribe';
                    this.style.background = '';
                }, 2000);
                alert('Thank you for subscribing!');
            } else {
                newsletterInput.style.borderColor = '#ff7675';
                setTimeout(() => {
                    newsletterInput.style.borderColor = '';
                }, 2000);
                alert('Please enter a valid email address.');
            }
        });
    }

    // ======= GO TO CART LOGIC =======
    // Make all elements with class 'cart' go to cart.html when clicked
    document.querySelectorAll('.cart').forEach(cartIcon => {
        cartIcon.addEventListener('click', function () {
            window.location.href = 'cart.html';
        });
    });

    // Proceed to Checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            window.location.href = 'checkout.html';
        });
    }
});
