document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...

    // ======= CONTACT FORM SUBMIT SUCCESS MESSAGE =======
    const contactForm = document.querySelector('.contact-section form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Create animated popup
            const popup = document.createElement('div');
            popup.innerHTML = `
                <i class="fas fa-paper-plane" style="font-size:2rem;margin-bottom:0.5rem;display:block;color:#fff;"></i>
                <span style="display:block;font-size:1.2rem;font-weight:600;">Message Sent!</span>
                <span style="display:block;font-size:1rem;margin-top:0.2rem;">Thank you for contacting us.</span>
            `;
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%) scale(0.8)';
            popup.style.background = 'linear-gradient(90deg, #e74c3c, #fdcb6e)';
            popup.style.color = '#fff';
            popup.style.padding = '2rem 3rem';
            popup.style.borderRadius = '30px';
            popup.style.fontSize = '1.3rem';
            popup.style.fontWeight = 'bold';
            popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)';
            popup.style.zIndex = '9999';
            popup.style.textAlign = 'center';
            popup.style.letterSpacing = '1px';
            popup.style.opacity = '0';
            popup.style.transition = 'opacity 0.4s, transform 0.4s';

            document.body.appendChild(popup);

            // Animate in
            setTimeout(() => {
                popup.style.opacity = '1';
                popup.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 10);

            // Animate out and remove
            setTimeout(() => {
                popup.style.opacity = '0';
                popup.style.transform = 'translate(-50%, -50%) scale(0.8)';
                setTimeout(() => popup.remove(), 500);
            }, 2000);

            contactForm.reset();
        });
    }

    // ...rest of your code...
});