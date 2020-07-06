const cartImage = document.querySelector('select[id="cart-image"]');
const addNewItemBtn = document.getElementById('add-new-btn');
const cartProducts = document.querySelector('.cart-products');

let productId = 1;

images.forEach(image => createOptions(image.name, cartImage));

//create options for select elements
function createOptions(type, select){
    const option = document.createElement('option');
    option.setAttribute('name', type);
    option.setAttribute('value', type);
    option.textContent = `${type}`;
    select.appendChild(option);
}

addNewItemBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const productWrapper = document.createElement('div');
    productWrapper.classList.add('cart-product');
    productWrapper.setAttribute('id', `cart-product-${productId}`);
    productId ++;

    const imageLabel = document.createElement('label');
    imageLabel.textContent = 'Select Photo: ';
    const imageSelect = document.createElement('select')
    imageSelect.setAttribute('name', 'cart-image');
    images.forEach(image => createOptions(image.name, imageSelect));
    imageLabel.appendChild(imageSelect);

    productWrapper.appendChild(imageLabel);
    cartProducts.appendChild(productWrapper);
});