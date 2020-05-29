const productGrid = document.querySelector('#product-container');
const quickviewModal = document.getElementById('quickview-modal');
const quickviewTitle = quickviewModal.querySelector('.quickview-title');
const quickviewPrice = quickviewModal.querySelector('.quickview-price');
const quickviewDescription = quickviewModal.querySelector('.quickview-description');
const quickviewImage = quickviewModal.querySelector('.quickview-image');
const quickviewCloseIcon = quickviewModal.querySelector('.quickview-close-icon');
const quickviewForm = quickviewModal.querySelector('form.modal-form');

let activeImage = {};
let cart = [];

images.forEach(image => createProductItem(image));


function createProductItem(image){
    //create product grid item
    const container = document.createElement('div');
    container.classList.add('product-item');

    //create product image container
    const productImageContainer = document.createElement('div');
    productImageContainer.classList.add('product-image-container');

    //create product image
    const productImage = document.createElement('img');
    productImage.setAttribute('src', image.imagePath);
    productImage.setAttribute('alt', image.name);


    //create quickview button
    const quickview = document.createElement('button');
    quickview.textContent = "Quickview";
    quickview.classList.add('quickview');
    quickview.addEventListener('click', () => {
        document.querySelector('body').classList.add('modal-open');
        activeImage = image;
        quickviewModal.style.display = 'block';
        quickviewTitle.textContent = `${image.name}`;
        quickviewPrice.textContent = `$${image.price}`;
        quickviewDescription.textContent = `${image.description}`;
        quickviewImage.setAttribute('src', image.imagePath);
    })


    //append everything to everyhthing
    productImageContainer.appendChild(productImage);
    productImageContainer.appendChild(quickview);
    container.appendChild(productImageContainer);
    productGrid.appendChild(container);
}



quickviewCloseIcon.addEventListener('click', () => {
    document.querySelector('body').classList.remove('modal-open')
    quickviewModal.style.display = 'none';
})


quickviewForm.addEventListener('submit', (e) => {
    const size = document.getElementById('sizing-options')
    const view = document.getElementById('view-options')
    e.preventDefault();
    let selectedItem = {
        image: activeImage.name,
        price: activeImage.price,
        size: size.value,
        view: view.value
    }
    cart.push(selectedItem)
    window.localStorage.setItem('cart', JSON.stringify(cart));
})