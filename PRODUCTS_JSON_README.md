# Products JSON Documentation

## Overview

`products.json` is a comprehensive data file containing all products available in the Nexus Gaming Store. This file can be used to dynamically load and display products, create catalog pages, implement search functionality, and integrate with e-commerce systems.

## File Structure

The JSON file contains the following main sections:

- **meta**: Store metadata and information
- **games**: Array of video game products
- **consoles**: Array of gaming console products
- **accessories**: Array of gaming accessory products
- **categories**: List of product categories
- **contact**: Store contact information

## Data Structure

### Meta Information

```json
{
  "meta": {
    "store_name": "Nexus Gaming Store",
    "version": "1.0.0",
    "last_updated": "2025-01-01",
    "currency": "USD",
    "developer": "Muhammad Danish",
    "license": "MIT"
  }
}
```

### Game Product Structure

Each game in the `games` array contains:

```json
{
  "id": "unique-game-id",
  "name": "Game Name",
  "price": 59.99,
  "currency": "USD",
  "category": "games",
  "platforms": ["PC", "PS5", "Xbox"],
  "image": "images/game_image.jpg",
  "page": "html-child/game_page.html",
  "description": "Game description...",
  "features": [
    "Feature 1",
    "Feature 2"
  ],
  "system_requirements": {
    "os": "Windows 10 64-bit",
    "processor": "Intel Core i5",
    "memory": "8 GB RAM",
    "graphics": "NVIDIA GTX 1060",
    "storage": "50 GB available space"
  },
  "tags": ["Action", "RPG", "Adventure"],
  "rating": 4.8,
  "release_year": 2024,
  "free_to_play": false
}
```

### Console Product Structure

```json
{
  "id": "unique-console-id",
  "name": "Console Name",
  "price": 299.99,
  "currency": "USD",
  "category": "consoles",
  "image": "images/console_image.jpg",
  "description": "Console description...",
  "features": [
    "Feature 1",
    "Feature 2"
  ],
  "tags": ["Console", "Handheld"]
}
```

### Accessory Product Structure

```json
{
  "id": "unique-accessory-id",
  "name": "Accessory Name",
  "price": 79.99,
  "currency": "USD",
  "category": "accessories",
  "image": "images/accessory_image.jpg",
  "description": "Accessory description...",
  "features": [
    "Feature 1",
    "Feature 2"
  ],
  "tags": ["Peripheral", "RGB"]
}
```

## Product Statistics

- **Total Games**: 13
  - 8 in USD (ranging from $0 to $69.99)
  - 5 in PKR (ranging from 3,000 to 7,000 PKR)
- **Total Consoles**: 3 (all Nintendo Switch variants)
- **Total Accessories**: 7 (gaming peripherals)
- **Total Products**: 23

## Usage Examples

### 1. Loading JSON with JavaScript (Fetch API)

```javascript
// Load products from JSON file
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    console.log('Store:', data.meta.store_name);
    console.log('Total Games:', data.games.length);
    
    // Display all games
    data.games.forEach(game => {
      console.log(`${game.name} - $${game.price}`);
    });
  })
  .catch(error => console.error('Error:', error));
```

### 2. Loading JSON with JavaScript (Async/Await)

```javascript
async function loadProducts() {
  try {
    const response = await fetch('products.json');
    const data = await response.json();
    
    // Get all PC games
    const pcGames = data.games.filter(game => 
      game.platforms.includes('PC')
    );
    
    console.log('PC Games:', pcGames.length);
    return data;
  } catch (error) {
    console.error('Error loading products:', error);
  }
}
```

### 3. Filtering Products by Category

```javascript
// Get all games under $30
const affordableGames = data.games.filter(game => 
  game.currency === 'USD' && game.price < 30
);

// Get all free-to-play games
const freeGames = data.games.filter(game => 
  game.free_to_play === true
);

// Get all games with specific tag
const rpgGames = data.games.filter(game => 
  game.tags.includes('RPG')
);
```

### 4. Displaying Products in HTML

```javascript
function displayGames(games) {
  const container = document.getElementById('games-container');
  
  games.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.className = 'product-card';
    gameCard.innerHTML = `
      <h3>${game.name}</h3>
      <p class="price">$${game.price}</p>
      <p>${game.description}</p>
      <div class="platforms">
        ${game.platforms.map(p => `<span>${p}</span>`).join('')}
      </div>
      <button onclick="addToCart('${game.id}')">Add to Cart</button>
    `;
    container.appendChild(gameCard);
  });
}
```

### 5. Search Functionality

```javascript
function searchProducts(query) {
  const allProducts = [
    ...data.games,
    ...data.consoles,
    ...data.accessories
  ];
  
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );
}
```

### 6. Price Conversion

```javascript
// Convert PKR to USD (example rate)
function convertPrice(product, targetCurrency = 'USD') {
  const PKR_TO_USD = 0.0036; // Example conversion rate
  
  if (product.currency === 'PKR' && targetCurrency === 'USD') {
    return (product.price * PKR_TO_USD).toFixed(2);
  }
  return product.price;
}
```

### 7. Get Products by Platform

```javascript
function getGamesByPlatform(platform) {
  return data.games.filter(game => 
    game.platforms.includes(platform)
  );
}

// Usage
const ps5Games = getGamesByPlatform('PS5');
const pcGames = getGamesByPlatform('PC');
const switchGames = getGamesByPlatform('Switch');
```

## Example HTML Implementation

See `example-json-usage.html` for a complete working example that demonstrates:
- Loading products from JSON
- Displaying product statistics
- Rendering products in a grid layout
- Filtering by category
- Displaying product details

To run the example:
1. Make sure `products.json` and `example-json-usage.html` are in the same directory
2. Open `example-json-usage.html` in a web browser
3. The page will automatically load and display all products

## Integration Ideas

1. **Dynamic Product Pages**: Generate product detail pages dynamically from JSON data
2. **Search and Filter**: Implement advanced search and filtering based on tags, platforms, price, etc.
3. **Shopping Cart**: Use product IDs to manage cart items
4. **Price Comparison**: Display products sorted by price or filter by price range
5. **Recommendation System**: Suggest games based on tags or similar features
6. **Admin Panel**: Create an admin interface to manage products by editing the JSON
7. **API Endpoint**: Serve the JSON file as an API endpoint for other applications
8. **Mobile App**: Use the JSON data as a data source for a mobile app

## Multi-Currency Support

The JSON file includes products in both USD and PKR currencies. Make sure to:
- Check the `currency` field when displaying prices
- Implement conversion if you want to display all prices in a single currency
- Use appropriate currency symbols ($ for USD, Rs or PKR for Pakistani Rupees)

## Maintenance

To update the product catalog:
1. Edit `products.json` with your text editor
2. Ensure JSON syntax is valid (use a JSON validator)
3. Update the `last_updated` field in `meta`
4. Increment the `version` number if making significant changes

## Notes

- All image paths are relative to the root directory
- All page links point to HTML files in the `html-child` directory
- System requirements are included for PC games
- Platform information is provided for console-exclusive games
- Tags can be used for categorization and search functionality
- Ratings are on a scale of 0-5

## License

This JSON file is part of the Gaming Store project, licensed under MIT License.

**Developed by Muhammad Danish**
