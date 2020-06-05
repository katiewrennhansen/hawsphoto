const checkoutForm = document.querySelector('.checkout form');
const cartImage = document.querySelector('select[id="cart-image"]');
const cartSize = document.querySelector('select[id="cart-size"]');
const cartLayout = document.querySelector('select[id="cart-layout"]');
const cartPrice = document.querySelector('input[id="cart-price"]');
const cartProducts = document.querySelector('.cart-products');
const addNewItemBtn = document.querySelector('.add-new-item-btn');

images.forEach(image => createOptions(image.name, cartImage));

//create options for select elements
function createOptions(type, select){
    const option = document.createElement('option');
    option.setAttribute('name', type);
    option.setAttribute('value', type);
    option.textContent = `${type}`;
    select.appendChild(option);
}

//if options are already populating the select menu, remove them
function removeOptions(selectOption){
    const length = selectOption.options.length - 1;
    for(let i = length; i >= 0; i--) {
        selectOption.remove(i);
    }
}

function populateSizeLayout(image){
    //remove current options
    removeOptions(cartSize);
    removeOptions(cartLayout);

    //loop through new data and create new options
    image.sizes.forEach(size => createOptions(size, cartSize));
    image.layout.forEach(layout => createOptions(layout, cartLayout));
}

//update data on change
cartImage.addEventListener('change', function(e){
    let selectedImageData = images.find(image => e.target.value === image.name);
    populateSizeLayout(selectedImageData);
    cartPrice.setAttribute('value', selectedImageData.price[0]);
});