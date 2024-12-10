const foodBasket = () => {
    const basket = document.querySelector('.basket'),
          btnShowBasket = document.querySelector('.header-nav__basketBtn'),
          btnHideBasket = document.querySelector('.basket__close'),
          header = document.querySelector('.header'),
          body = document.querySelector('body');

    btnShowBasket.addEventListener('click', () => {
        basket.classList.add('basket--active');
        header.style.display = 'none';
        body.classList.add('body-lock');
    });

    btnHideBasket.addEventListener('click', () => {
        basket.classList.remove('basket--active');
        header.style.display = '';
        body.classList.remove('body-lock');
    })
}

export {foodBasket};