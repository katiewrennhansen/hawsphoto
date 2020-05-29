const productCart = document.querySelector('.product-cart');
const checkoutCart = JSON.parse(window.localStorage.getItem('cart'));

checkoutCart.forEach(item => {
    console.log(item)
    //create item
    const cartItem = document.createElement('li');
    cartItem.classList.add('product-item');

    //create item img
    // const cartItemImage = document.createElement('img');
    // cartItemImage.setAttribute('src', item.imagePaty);

    //create item title
    const cartItemTitle = document.createElement('h3');
    cartItemTitle.textContent = `${item.image}`;

    cartItem.appendChild(cartItemTitle);
    productCart.appendChild(cartItem);
})




