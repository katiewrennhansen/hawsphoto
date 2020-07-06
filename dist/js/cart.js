const cartImage = document.querySelector('select[id="cart-image"]');


images.forEach(image => createOptions(image.name, cartImage));

//create options for select elements
function createOptions(type, select){
    const option = document.createElement('option');
    option.setAttribute('name', type);
    option.setAttribute('value', type);
    option.textContent = `${type}`;
    select.appendChild(option);
}