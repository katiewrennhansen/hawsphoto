const productGrid = document.querySelector('#product-container');
const quickviewModal = document.getElementById('quickview-modal');
const quickviewTitle = quickviewModal.querySelector('.quickview-title');
const quickviewPrice = quickviewModal.querySelector('.quickview-price');
const quickviewDescription = quickviewModal.querySelector('.quickview-description');
const quickviewImage = quickviewModal.querySelector('.quickview-image');
const quickviewCloseIcon = quickviewModal.querySelector('.quickview-close-icon');
const quickviewForm = quickviewModal.querySelector('form.modal-form');

images.forEach(image => createProductItem(image));

//allow quickview button hover depending on if modal is open/closed
function displayButtons(display){
    const buttons = document.querySelectorAll('.quickview');
    buttons.forEach(button => {
        button.style.display = display;
    });
}

function closeModal(){
    document.querySelector('body').classList.remove('modal-open');
    quickviewModal.style.display = 'none';
    displayButtons('block');
}

function openModal(image){
    document.querySelector('body').classList.add('modal-open');
    quickviewModal.style.display = 'block';
    quickviewTitle.textContent = `${image.name}`;
    quickviewImage.setAttribute('src', image.imagePath);
    quickviewImage.setAttribute('alt', image.name);
    displayButtons('none');
    //jump focus to first select on desktop
    if(window.innerWidth > 450){
        document.querySelector('select[name="sizing-options"]').focus()
    }
}

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
    productImage.classList.add('shop-product-image');

    //create quickview button
    const quickview = document.createElement('button');
    quickview.textContent = "Quickview";
    quickview.classList.add('quickview');
    
    //event listener to open modal on click
    quickview.addEventListener('click', () => openModal(image));
   
    //append everything to everyhthing
    productImageContainer.appendChild(productImage);
    productImageContainer.appendChild(quickview);
    container.appendChild(productImageContainer);
    productGrid.appendChild(container);
}

//event listener to close modal on click
quickviewCloseIcon.addEventListener('click', closeModal);


