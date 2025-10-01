# Copilot Instructions for Gaming Store

## Project Overview

Alpha Gaming (Nexus Gaming Store) is a frontend-focused e-commerce gaming storefront that allows users to browse games, consoles, and accessories. This is a static website built with vanilla HTML, CSS, and JavaScript (no build tools or frameworks like React are used despite what the README mentions).

**Developer:** Muhammad Danish  
**License:** MIT License

## Tech Stack

- **HTML5:** Semantic markup for all pages
- **CSS3:** Styling with custom properties (CSS variables) for theming
- **JavaScript (Vanilla):** DOM manipulation, cart functionality, and interactive features
- **Font Awesome 6.4.0:** Icon library
- **No build tools:** Direct HTML/CSS/JS files served statically

## Project Structure

```
Gaming-store/
├── index.html              # Main homepage
├── style.css              # Main stylesheet
├── script.js              # Main JavaScript file
├── script1.js             # Additional scripts
├── html-child/            # Individual page HTML files
│   ├── games.html         # Games catalog
│   ├── consoles.html      # Consoles catalog
│   ├── accessories.html   # Accessories catalog
│   ├── special.html       # Special offers
│   ├── contact.html       # Contact page
│   ├── cart.html          # Shopping cart
│   ├── checkout.html      # Checkout page
│   ├── Gamingnews.html    # Gaming news
│   └── [game-name].html   # Individual game detail pages
├── styles-child/          # Page-specific stylesheets
├── script-child/          # Page-specific JavaScript
└── images/                # Product images and assets
```

## Coding Standards

### HTML
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`, etc.)
- Include proper meta tags for charset and viewport
- Link Font Awesome CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- Use consistent navigation structure across all pages
- Keep file naming lowercase with underscores for multi-word files (e.g., `black_myth.html`)

### CSS
- Use CSS custom properties (variables) defined in `:root` for theming:
  - `--primary: #e74c3c` (red)
  - `--secondary: #ff7675` (light red)
  - `--dark: #2d0606` (dark red)
  - `--darker: #1a0303` (darker red)
  - `--light: #f8f9fa` (light gray)
  - `--accent: #ff3838` (bright red)
  - `--warning: #fdcb6e` (yellow)
  - `--success: #00b894` (green)
- Use responsive design with `@media` queries
- Implement modern CSS features: flexbox, grid, gradients, transforms, transitions
- Keep consistent spacing and layout patterns
- Use `backdrop-filter` for glassmorphism effects

### JavaScript
- Use vanilla JavaScript (no jQuery or frameworks)
- Implement cart functionality with localStorage
- Use event listeners for interactivity
- Keep functions modular and reusable
- Use consistent naming conventions (camelCase for variables and functions)

## File Organization

### Creating New Pages
When creating a new game detail page:
1. Place HTML file in `html-child/` directory
2. Create corresponding CSS in `styles-child/` (e.g., `game_name.css`)
3. Link CSS using relative path: `href="styles-child/game_name.css"`
4. Include navigation header with links to main sections
5. Add product details, images, system requirements, and "Add to Cart" button
6. Include footer with copyright information

### Styling Conventions
- Main pages use `style.css`
- Child pages use individual stylesheets in `styles-child/`
- Keep style naming descriptive (e.g., `consolesstyle.css`, `gamesweb.css`)
- Use consistent class naming patterns across pages

### JavaScript Organization
- Main functionality in `script.js` and `script1.js`
- Page-specific scripts in `script-child/` directory
- Cart functionality should persist using localStorage

## Common Patterns

### Navigation Structure
All pages should include consistent navigation:
```html
<header>
    <nav>
        <div class="logo">
            <i class="fas fa-gamepad"></i>
            <span>Nexus Gaming</span>
        </div>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="html-child/games.html">Games</a>
            <a href="html-child/consoles.html">Consoles</a>
            <a href="html-child/accessories.html">Accessories</a>
            <a href="html-child/contact.html">Contact</a>
        </div>
    </nav>
</header>
```

### Product Card Structure
Use consistent product card markup:
```html
<div class="product">
    <span class="product-badge">New</span>
    <img src="../images/product.jpg" alt="Product Name">
    <h3>Product Name</h3>
    <p class="price">$XX.XX</p>
    <button class="add-to-cart">Add to Cart</button>
</div>
```

### Footer Structure
Include comprehensive footer with links:
```html
<footer>
    <div class="footer-grid">
        <div class="footer-column">
            <h4>Nexus Gaming</h4>
            <p>Description...</p>
            <div class="social-links">...</div>
        </div>
        <div class="footer-column">
            <h4>Quick Links</h4>
            <ul class="footer-links">...</ul>
        </div>
        <!-- Additional columns -->
    </div>
    <div class="copyright">
        <p>&copy; 2025 Nexus Gaming Store. All Rights Reserved.</p>
    </div>
</footer>
```

## Path Handling

- From root (`index.html`): Use `html-child/page.html`, `images/image.jpg`
- From child pages: Use `../index.html`, `../images/image.jpg`
- CSS in child pages: Use `styles-child/filename.css` or `../style.css`
- Scripts: Use `script.js` or `script-child/filename.js`

## Design Guidelines

### Color Scheme
- Primary theme: Red/dark gaming aesthetic
- Background: Dark gradients with radial overlays
- Accents: Bright red (`--accent`) for CTAs and highlights
- Use translucent backgrounds with `backdrop-filter` for modern look

### Typography
- Primary font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Use Font Awesome icons for visual elements
- Maintain consistent heading hierarchy

### Responsive Design
- Mobile-first approach
- Use CSS Grid and Flexbox for layouts
- Implement hamburger menu for mobile navigation
- Ensure touch-friendly button sizes on mobile

## Development Notes

### Starting the Project
The README mentions `npm install` and `npm run dev`, but this is **incorrect** as the project doesn't use npm or build tools. To run the project:
1. Simply open `index.html` in a browser
2. Or use a simple HTTP server like `python -m http.server` or VS Code Live Server

### Adding New Features
- Keep changes minimal and focused
- Test cart functionality across pages
- Ensure all links work correctly (relative paths)
- Verify responsive design on multiple screen sizes
- Test in different browsers

### Contact Information (in footer/pages)
- Address: 123 Gaming Street, Virtual City
- Phone: +1 (555) 123-4567
- Email: support@nexusgaming.com
- Hours: Mon-Fri: 9AM - 10PM, Sat-Sun: 10AM - 8PM

## Important Notes

- **No build process required** - this is a static site
- Cart data is stored in browser localStorage
- All prices can be in USD or PKR (check existing pages for consistency)
- Maintain the gaming aesthetic with dark themes and red accents
- Keep the "Developed by Muhammad Danish" attribution
- Ensure all external links (social media) are placeholder `#` links
- Product images should be placed in the `images/` directory

## Testing Checklist

When making changes:
- [ ] Test navigation links work correctly
- [ ] Verify cart functionality (add/remove items)
- [ ] Check responsive design on mobile, tablet, and desktop
- [ ] Ensure all images load properly
- [ ] Verify color scheme consistency
- [ ] Test cross-browser compatibility
- [ ] Check for broken links
- [ ] Validate HTML/CSS if possible
