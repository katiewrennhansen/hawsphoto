const images = [
    {
        id: 1,
        name: 'Illusion',
        imagePath: 'images/illusion.jpg',
        description: 'testing the json-like data structure',
        price: '100',
        sizes: ['13x15']
    },
    {
        id: 2,
        name: 'Milky Way',
        imagePath: 'images/milky_way.jpg',
        description: 'testing the json-like data structure again',
        price: '101',
        sizes: ['13x16']
    },
    {
        id: 3,
        name: 'Painted Walk',
        imagePath: 'images/painted_walk.jpg',
        description: 'testing the json-like data structure again',
        price: '101',
        sizes: ['13x16']
    },
    {
        id: 4,
        name: 'Rocky Falls',
        imagePath: 'images/rocky_falls.jpg',
        description: 'testing the json-like data structure again',
        price: '101',
        sizes: ['13x16']
    },
    {
        id: 5,
        name: 'Shape Shifter',
        imagePath: 'images/shape_shifter.jpg',
        description: 'testing the json-like data structure again',
        price: '101',
        sizes: ['13x16']
    },
    {
        id: 6,
        name: 'Shore Side',
        imagePath: 'images/shore_side.jpg',
        description: 'testing the json-like data structure again',
        price: '101',
        sizes: ['13x16']
    },
    {
        id: 7,
        name: 'The Awakening',
        imagePath: 'images/the_awakening.jpg',
        description: 'testing the json-like data structure again',
        price: '101',
        sizes: ['13x16']
    },
    {
        id: 8,
        name: 'The Glow',
        imagePath: 'images/the_glow.jpg',
        description: 'testing the json-like data structure again',
        price: '101',
        sizes: ['13x16']
    },
    {
        id: 9,
        name: 'The Shallows',
        imagePath: 'images/the_shallows.jpg',
        description: 'testing the json-like data structure again',
        price: '101',
        sizes: ['13x16']
    },
    {
        id: 10,
        name: 'Untitled',
        imagePath: 'images/unititled.jpg',
        description: 'testing the json-like data structure again',
        price: '101',
        sizes: ['13x16']
    },
    {
        id: 11,
        name: 'Waves',
        imagePath: 'images/waves.jpg',
        description: 'testing the json-like data structure again',
        price: '101',
        sizes: ['13x16']
    },
    {
        id: 12,
        name: 'Be Bold-er',
        imagePath: 'images/be_bolder.jpg',
        description: 'testing the json-like data structure again',
        price: '101',
        sizes: ['13x16']
    },
    {
        id: 13,
        name: 'Blue Hour',
        imagePath: 'images/blue_hour.jpg',
        description: 'testing the json-like data structure again',
        price: '101',
        sizes: ['13x16']
    },
    {
        id: 14,
        name: 'Burn Bright',
        imagePath: 'images/burn_bright.jpg',
        description: 'testing the json-like data structure again',
        price: '101',
        sizes: ['13x16']
    }
]

const productGrid = document.querySelector('#product-container');

var totalImages = images.length;
console.log(totalImages)


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

    //create quickview modal
    const modal = document.createElement('div');
    modal.classList.add('modal');

    //create modal content
    const title = document.createElement('h3')
    title.textContent = `${image.name}`;
    modal.appendChild(title);

    //create quickview button
    const quickview = document.createElement('button');
    quickview.textContent = "Quickview";
    quickview.classList.add('quickview');
    quickview.addEventListener('click', () => {
        modal.style.display = 'block';
    })

  


    //append everything to everyhthing
    productImageContainer.appendChild(productImage);
    productImageContainer.appendChild(quickview);
    container.appendChild(modal);
    container.appendChild(productImageContainer);
    productGrid.appendChild(container);
}