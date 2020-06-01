const checkoutForm = document.querySelector('.checkout form');
const cartImage = document.querySelector('select[name="cart-image"]');
const cartSize = document.querySelector('select[name="cart-size"]');
const cartLayout = document.querySelector('select[name="cart-layout"]');
const cartPrice = document.querySelector('input[name="cart-price"]');
const cartProducts = document.querySelector('.cart-products');
const addNewItemBtn = document.querySelector('.add-new-item-btn');
let selectedImage
let productId = 1;

images.forEach(image => createSelectItem(image));

function createSelectItem(image){
    const imageOption = document.createElement('option');
    imageOption.setAttribute('name', image.name);
    imageOption.setAttribute('value', image.name);
    imageOption.textContent = `${image.name}`
    cartImage.appendChild(imageOption)
}


function populateSize(image){
    const sizes = image.sizes;
    if(image.name != selectedImage){
        removeOptions(cartSize);
    }
    sizes.forEach(size => {
        const sizeOption = document.createElement('option');
        sizeOption.setAttribute('name', size);
        sizeOption.setAttribute('value', size);
        sizeOption.textContent = `${size}`
        cartSize.appendChild(sizeOption)
    })
}

function populateLayout(image){
    const sizes = image.layout;
    if(image.name != selectedImage){
        removeOptions(cartLayout);
    }
    sizes.forEach(layout => {
        const layoutOption = document.createElement('option');
        layoutOption.setAttribute('name', layout);
        layoutOption.setAttribute('value', layout);
        layoutOption.textContent = `${layout}`
        cartLayout.appendChild(layoutOption)
    })
}

function removeOptions(selectOption){
    const length = selectOption.options.length - 1;
    for(i = length; i >= 0; i--) {
        selectOption.remove(i);
    }
}

cartImage.addEventListener('change', function(e){
    let selectedImageData = images.find(image => e.target.value === image.name);
    console.log(selectedImageData)
    populateSize(selectedImageData);
    populateLayout(selectedImageData);
    console.log(cartPrice)
    cartPrice.setAttribute('value', selectedImageData.price[0]);
});

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
    imageLabel.appendChild(imageSelect);

    const sizeLabel = document.createElement('label');
    sizeLabel.textContent = 'Select Size: ';
    const sizeSelect = document.createElement('select')
    sizeSelect.setAttribute('name', 'cart-size');
    sizeLabel.appendChild(sizeSelect);

    const layoutLabel = document.createElement('label');
    layoutLabel.textContent = 'Select Layout: ';
    const layoutSelect = document.createElement('select')
    layoutSelect.setAttribute('name', 'cart-layout');
    layoutLabel.appendChild(layoutSelect);

    const priceLabel = document.createElement('label');
    priceLabel.textContent = 'Calculated Price: ';
    const priceSelect = document.createElement('input')
    priceSelect.setAttribute('type', 'text');
    priceSelect.setAttribute('name', 'cart-price');
    priceLabel.appendChild(priceSelect);

    productWrapper.appendChild(imageLabel);
    productWrapper.appendChild(sizeLabel);
    productWrapper.appendChild(layoutLabel);
    productWrapper.appendChild(priceLabel);

    cartProducts.appendChild(productWrapper);
});