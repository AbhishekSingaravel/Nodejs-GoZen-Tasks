document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `Username: ${user.username}`;
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching users:', error));

    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                const listItem = document.createElement('li');
                listItem.textContent = `Name: ${product.name}, Price: $${product.price}`;
                productList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching products:', error));

    const productForm = document.getElementById('product-form');
    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('product-name').value;
        const price = document.getElementById('product-price').value;

        fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, price }),
        })
        .then(response => response.json())
        .then(product => {
            const productList = document.getElementById('product-list');
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${product.name}, Price: $${product.price}`;
            productList.appendChild(listItem);
        })
        .catch(error => console.error('Error adding product:', error));
    });
});
