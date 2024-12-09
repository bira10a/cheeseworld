const BurgerMenu = () => {
    const burger = document.querySelector('.burger'),
      headerMenu = document.querySelector('.header-nav__inner'),
      headerMenuItem = document.querySelectorAll('.header-nav__item'),
      btnCloseMemu = document.querySelector('.header-nav__btn'),
      btnCloseMemuLineOne = document.querySelector('.header-nav__btn-one'),
      btnCloseMemuLineTwo = document.querySelector('.header-nav__btn-two'),
      body = document.querySelector('body'),
      content = document.querySelector('.content');


burger.addEventListener('click', () => {
  headerMenu.classList.add('header-nav__inner--active');

  body.classList.add('body-lock');
  content.classList.add('lock');

  // setTimeout(() => {
  //   btnCloseMemuLineOne.style.animation = 'btnLineOn 1s linear forwards';
  // }, 1000);

  // setTimeout(() => {
  //   btnCloseMemuLineTwo.style.animation = 'btnLineOn 1s linear forwards';
  // }, 2000);
});

btnCloseMemu.addEventListener('click', () => {
  // btnCloseMemuLineOne.style.animation = 'btnLineOff 1s linear forwards';
  // btnCloseMemuLineTwo.style.animation = 'btnLineOff 1s linear forwards';

  headerMenu.classList.remove('header-nav__inner--active');
  content.classList.remove('lock');

  body.classList.remove('body-lock');
  
  headerMenuItem.forEach(i => {
    i.style.animation = 'opacity 0.4s linear forwards';
  })
  
  setTimeout(() => {
    headerMenuItem.forEach(i => {
      i.style.cssText = '';
    })
  }, 2000);
});
};
export default BurgerMenu;