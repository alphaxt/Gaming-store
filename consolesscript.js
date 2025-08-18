  // Mobile navigation toggle
        document.querySelector('.mobile-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });
        
        // Tab switching functionality
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        // ======= TAB FILTERING LOGIC =======
        const products = document.querySelectorAll('.product');

        // Helper: get filter name from tab text
        function getFilterName(tab) {
            return tab.textContent.trim().toLowerCase().replace(/ /g, '-');
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const filter = getFilterName(this);

                products.forEach(product => {
                    // Get badge/category for each product
                    let badge = product.querySelector('.product-badge');
                    let category = '';
                    if (badge) {
                        const badgeText = badge.textContent.trim().toLowerCase();
                        if (badgeText.includes('pre-order')) category = 'pre-orders';
                        else if (badgeText.includes('new')) category = 'new-releases';
                        else if (badgeText.includes('best')) category = 'best-sellers';
                        else if (badgeText.includes('sale')) category = 'on-sale';
                        else if (badgeText.includes('hot')) category = 'best-sellers';
                        else category = badgeText.replace(/ /g, '-');
                    }

                    // "All Consoles" tab shows all
                    if (filter === 'all-consoles') {
                        product.style.display = '';
                    } else if (filter === category) {
                        product.style.display = '';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });
        
        // Add to cart functionality
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const product = this.closest('.product');
                const title = product.querySelector('.product-title').textContent;
                const price = product.querySelector('.product-price').textContent;
                
                // Animation effect
                this.innerHTML = '<i class="fas fa-check"></i> Added!';
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
                }, 2000);
                
                // Update cart badge
                const badge = document.querySelector('.cart-badge');
                let count = parseInt(badge.textContent);
                count++;
                badge.textContent = count;
                
                // Add animation to badge
                badge.style.transform = 'scale(1.5)';
                setTimeout(() => {
                    badge.style.transform = 'scale(1)';
                }, 300);
                
                console.log(`Added to cart: ${title} - ${price}`);
            });
        });
        
        // Buy Now functionality
        const buyNowButtons = document.querySelectorAll('.buy-now');
        buyNowButtons.forEach(button => {
            button.addEventListener('click', function() {
                const product = this.closest('.product');
                const title = product.querySelector('.product-title').textContent;
                const price = product.querySelector('.product-price').textContent;
                
                // Animation effect
                this.innerHTML = '<i class="fas fa-bolt"></i> Purchasing...';
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-bolt"></i> Buy Now';
                    alert(`Thank you for purchasing ${title} for ${price}!`);
                }, 1000);
            });
        });
        
        // Newsletter form submission
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