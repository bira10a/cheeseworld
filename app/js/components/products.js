import { getProduct } from "./data";

const products = () => {
    const title = document.querySelector('.catalog__title'),
        text = document.querySelector('.catalog__text'),
        img = document.querySelector('.catalog__img'),
        price = document.querySelector('.catalog__price-new');

    const addDataHtml = (img, title, descr) => {     
      const li = document.createElement('li');

        li.classList.add('catalog__item');
        li.innerHTML = `
          <div class="catalog__images">
            <img class="catalog__img" src="${img}" alt="картинка" width="200" height="300">
          </div>

          <h3 class="catalog__title">${title}</h3>

          <div class="catalog__text">${descr}</div>

          <div class="catalog__price">
            <span class="catalog__price-old">290 <span>Р</span></span>
            <span class="catalog__price-new">210 <span>Р</span></span>
          </div>

          <div class="catalog__buttons">
            <button class="catalog__btn btn" type="button">Добавить в корзину</button>
            <button class="catalog__favorites" type="button" aria-label="добавить в избранное"></button>
          </div>
        `     

      const parentContainer = document.querySelector('.catalog__list');

      parentContainer.appendChild(li);
    }

  // https://fakestoreapi.com/products
  // https://fakerapi.it/api/v2/products
  getProduct('https://fakestoreapi.com/products')
        .then(res => {
            console.log(res);
            res.forEach(i => {
              console.log(i);
              addDataHtml(i.image, i.title, i.description)
            })
        })
}

export {products};