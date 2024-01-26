let iconcart = document.querySelector('.icon-cart');
let closecart = document.querySelector('.close');
let body = document.querySelector('body');
let listproductHTML = document.querySelector('.listproduct');

let listproduct = [];

iconcart.addEventListener('click', () => {
    body.classList.toggle('showcart')
})
closecart.addEventListener('click', () => {
    body.classList.toggle('showcart')
})

const addDataToHTML = () =>{
    listproductHTML.innerHTML = '';
    if(listproduct.length > 0){
        listproduct.forEach(product => {
            let newproduct = documentcreateElement('div');
            newproduct.classList.add('item');
            newproduct.innerHTML = `<img src="${product.iamge}" alt="">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button class="addcart">
                Add To Cart
            </button>`
            listproductHTML.appendChild(newproduct);
        })
    }
}

listproductHTML.addEventListener('click', (event) => {
    let positionclick = event.target;
    if(positionclick.classList.contains('addcart')){
        let product_id = positionclick.parentElement.dataset.id;
        alert('1');
    }
})

const initApp = () => {
//get data from json
fetch('products.json')
.then(response => response.json())
.then(data => {
    listproduct = data; 
    addDataToHTML();
})
}
initApp();