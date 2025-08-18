// Mobile navigation toggle
        document.querySelector('.mobile-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // ======= FILTER BUTTON FUNCTIONALITY =======
        const filterButtons = document.querySelectorAll('.filter-btn');
        const products = document.querySelectorAll('.product');

        // Helper to get filter name from button text
        function getFilterName(btn) {
            return btn.textContent.trim().toLowerCase().replace(/ /g, '-');
        }

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filter = getFilterName(this);

                products.forEach(product => {
                    // Decide category for each product
                    let badge = product.querySelector('.product-badge');
                    let category = '';
                    if (badge) {
                        const badgeText = badge.textContent.trim().toLowerCase();
                        if (badgeText.includes('pre-order')) category = 'pre-orders';
                        else if (badgeText.includes('new')) category = 'new-releases';
                        else if (badgeText.includes('best')) category = 'best-sellers';
                        else if (badgeText.includes('sale')) category = 'on-sale';
                        else if (badgeText.includes('hot')) category = 'best-sellers';
                    }

                    if (filter === 'all-games' || filter === '' || !category) {
                        product.style.display = '';
                    } else if (filter === category) {
                        product.style.display = '';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });

        // ======= VIEW TOGGLE FUNCTIONALITY =======
        const viewButtons = document.querySelectorAll('.view-btn');
        viewButtons.forEach(button => {
            button.addEventListener('click', function() {
                viewButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                if (this.querySelector('i').classList.contains('fa-th-list')) {
                    document.querySelector('.product-grid').style.gridTemplateColumns = '1fr';
                } else {
                    document.querySelector('.product-grid').style.gridTemplateColumns = 'repeat(auto-fill, minmax(240px, 1fr))';
                }
            });
        });

        // ======= ADD TO CART ANIMATION =======
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Added!';
                const badge = document.querySelector('.cart-badge');
                let count = parseInt(badge.textContent);
                badge.textContent = count + 1;
                badge.style.transform = 'scale(1.5)';
                setTimeout(() => {
                    badge.style.transform = 'scale(1)';
                }, 300);
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            });
        });

        // ======= BUY NOW FUNCTIONALITY =======
        const buyNowButtons = document.querySelectorAll('.buy-now');
        buyNowButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Get product info
                const product = this.closest('.product');
                const title = product.querySelector('.product-title') ? product.querySelector('.product-title').textContent.trim() : '';
                const price = product.querySelector('.product-price') ? product.querySelector('.product-price').textContent.trim() : '';
                const img = product.querySelector('img') ? product.querySelector('img').getAttribute('src') : '';

                // Set only this product as cart in localStorage
                const cart = [{ title, price, img, qty: 1 }];
                localStorage.setItem('cart', JSON.stringify(cart));

                // Animation (optional)
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Processing...';
                setTimeout(() => {
                    this.innerHTML = originalText;
                    // Redirect to checkout page
                    window.location.href = 'checkout.html';
                }, 800);
            });
        });

        // ======= NEWSLETTER FORM SUBMISSION =======
        document.querySelector('.newsletter-form button').addEventListener('click', function() {
            const emailInput = document.querySelector('.newsletter-form input');
            if (emailInput.value && emailInput.value.includes('@')) {
                emailInput.value = '';
                this.textContent = 'Subscribed!';
                this.style.background = 'var(--success)';
                setTimeout(() => {
                    this.textContent = 'Subscribe';
                    this.style.background = '';
                }, 2000);
            } else {
                emailInput.style.borderColor = '#ff7675';
                setTimeout(() => {
                    emailInput.style.borderColor = '';
                }, 2000);
            }
        });

        // ======= FOOTER QUICK LINKS FILTERING =======
        // If the URL contains ?filter=new-releases or ?filter=pre-orders etc, auto-activate the filter
        document.addEventListener('DOMContentLoaded', function() {
            const params = new URLSearchParams(window.location.search);
            const filterParam = params.get('filter');
            if (filterParam) {
                const filterButtons = document.querySelectorAll('.filter-btn');
                filterButtons.forEach(btn => {
                    if (btn.textContent.trim().toLowerCase().replace(/ /g, '-') === filterParam) {
                        btn.click();
                        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                });
            }
        });