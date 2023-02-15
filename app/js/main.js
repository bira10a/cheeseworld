const burger = document.querySelector('.burger'),
      headerMenu = document.querySelector('.header-nav__inner'),
      headerMenuItem = document.querySelectorAll('.header-nav__item'),
      btnCloseMemu = document.querySelector('.header-nav__btn'),
      btnCloseMemuLineOne = document.querySelector('.header-nav__btn-one'),
      btnCloseMemuLineTwo = document.querySelector('.header-nav__btn-two'),
      body = document.querySelector('body');

burger.addEventListener('click', () => {
  headerMenu.classList.add('header-nav__inner--active');

  body.classList.toggle('black');

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
  
  headerMenuItem.forEach(i => {
    i.style.animation = 'opacity 0.4s linear forwards';
  })
  
  setTimeout(() => {
    headerMenuItem.forEach(i => {
      i.style.cssText = '';
    })
  }, 2000);
});

///////////////////////////////////////// GSAP

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// if (ScrollTrigger.isTouch !== 1) {

//   ScrollSmoother.create({
//     wrapper: '.wrapper',
//     content: '.content',
//     smooth: 1.5,
//     effects: true
//   })

//   gsap.fromTo('.header', { opacity: 1 }, {
//     opacity: 0,
//     scrollTrigger: {
//       trigger: '.header',
//       start: 'center',
//       end: '650',
//       scrub: true
//     }
//   })

//   let itemsL = gsap.utils.toArray('.gallery__left')

//   itemsL.forEach(item => {
//     gsap.fromTo(item, { opacity: 0, x: -100 }, {
//       opacity: 1, x: 0,
//       scrollTrigger: {
//         trigger: item,
//         start: '-650',
//         end: '-100',
//         scrub: true
//       }
//     })
//   })
  
//   itemsL.forEach(item => {
//     gsap.fromTo(item, { opacity: 1, x:  0}, {
//       opacity: 0, x: -100,
//       scrollTrigger: {
//         trigger: item,
//         start: 'top',
//         end: '400',
//         scrub: true
//       }
//     })
//   })

//   let itemsR = gsap.utils.toArray('.gallery__right')

//   itemsR.forEach(item => {
//     gsap.fromTo(item, { opacity: 0, x: 50 }, {
//       opacity: 1, x: 0,
//       scrollTrigger: {
//         trigger: item,
//         start: '-550',
//         end: 'top',
//         scrub: true
//       }
//     })
//   })



//   gsap.fromTo('.assortment__list', { x: -40 }, {
//     x: -400,
//     scrollTrigger: {
//       trigger: '.assortment__list',
//       start: '-850',
//       end: 'bottom',
//       scrub: true
//     }
//   })

//   gsap.fromTo('.assortment__list', { opacity: 1 }, {
//     opacity: 0,
//     scrollTrigger: {
//       trigger: '.assortment__list',
//       start: '-200',
//       end: '200',
//       scrub: true
//     }
//   })


// }