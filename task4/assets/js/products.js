const products = [
    { id: 1, name: 'Laptop', category: 'electronics', price: 999, rating: 4.5, image: 'assets/images/product1.jpg' },
    { id: 2, name: 'T-Shirt', category: 'clothing', price: 29, rating: 3.8, image: 'assets/images/product2.jpg' },
    { id: 3, name: 'Smartphone', category: 'electronics', price: 699, rating: 4.2, image: 'assets/images/product3.jpg' },
];

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});

function filterAndSort() {
    const category = document.getElementById('categoryFilter').value;
    const sortOption = document.getElementById('sortOption').value;

    let filteredProducts = [...products];
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (sortOption === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating-desc') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(filteredProducts);
}

function renderProducts(products) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <p class="rating">Rating: ${product.rating} ★</p>
        `;
        productGrid.appendChild(card);
    });
}