const checkoutForm = document.querySelector('.checkout form');
const cartImage = document.querySelector('select[name="cart-image"]');
const cartSize = document.querySelector('select[name="cart-size"]');
const cartLayout = document.querySelector('select[name="cart-layout"]');
const cartPrice = document.querySelector('input[name="cart-price"]');
const cartProducts = document.querySelector('.cart-products');
const addNewItemBtn = document.querySelector('.add-new-item');
let selectedImage;

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
    cartProducts.appendChild(productWrapper);
});