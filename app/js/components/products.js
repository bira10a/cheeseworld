import { getProduct } from "./data";

const products = () => {
    const title = document.querySelector('.catalog__title'),
        text = document.querySelector('.catalog__text'),
        img = document.querySelector('.catalog__img'),
        price = document.querySelector('.catalog__price-new');

    console.log(title);
    
    // https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js
    getProduct('https://api.escuelajs.co/api/v1/products/42')
        .then(res => {
            console.log(res);
            title.textContent = `${res.title}`;
            text.textContent = `${res.description}`;
            price.textContent = `${res.price}`;
            img.setAttribute('src', `${res.images}`);
        })
}

export {products};