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

/////////////////////////////////////////
const headerCheckbox = document.querySelector('.header__input');

headerCheckbox.addEventListener('change', () => {
  if (headerCheckbox.checked) {
    body.classList.add('black-theme');
  } else {
    body.classList.remove('black-theme');
  }

})


/////////////////////////////////////////

const basket = document.querySelector('.basket'),
      btnOnBasket = document.querySelector('.header-nav__basketBtn');

btnOnBasket.addEventListener('click', () => {
  basket.classList.toggle('basket--active');
});

// document.addEventListener('scroll', () => {
//   if (basket.classList.contains('basket--active')) {
//     console.log(document.documentElement.scrollTop);
//     basket.style.top = document.documentElement.scrollTop + 'px';
//   }
// })


///////////////////////////////////////// 
  const headerActive = () => {
    const sectionTopPromo = document.querySelector('.top-promo');
    const heightSection = window.getComputedStyle(sectionTopPromo).height.replace(/\D/ig, '');
    const sectionHeader = document.querySelector('.header');
    

    document.addEventListener('scroll', () => {
      // console.log(heightSection.replace(/D/ig, ''));

      if (document.documentElement.scrollTop == heightSection || document.documentElement.scrollTop > heightSection) {
        sectionHeader.classList.add('header--active')
      } else {
        sectionHeader.classList.remove('header--active')
      }
    });

  };
  headerActive();

/////////////////////////////////////////
//mobile Slider section Assortment

  if ('ontouchstart' in window) {
    const sliderAssortment = () => {
      const sliderParent = document.querySelector('.assortment__list'),
            sliders = document.querySelectorAll('.assortment__item');

      let index = 1;

      let offset = 0;

      const prevSliderBtn = document.createElement('button');
      prevSliderBtn.style.cssText = `
      display: block; 
      padding: 20px 60px;
      margin: 0 auto;
      background-color: green;
      color: black;
      font-size: 24px;
      `;
      prevSliderBtn.textContent = 'Назад';
      sliderParent.after(prevSliderBtn);

      const nextSliderBtn = document.createElement('button');
      nextSliderBtn.style.cssText = `
      display: block; 
      padding: 20px 60px;
      margin: 0 auto;
      background-color: green;
      color: black;
      font-size: 24px;
      `;
      nextSliderBtn.textContent = 'Вперёд';
      sliderParent.after(nextSliderBtn);

      sliderParent.style.cssText = `
        justify-content: center;
        width: auto;  
      `;

      const wrapper = document.createElement('div');
      sliderParent.before(wrapper);
      wrapper.append(sliderParent);

      const width = window.getComputedStyle(wrapper).width;

      wrapper.style.cssText = `
        overflow: hidden;
        margin: 0 auto;
      `;

      sliders.forEach(i => i.style.width = width);

      sliderParent.style.width = 100 * sliders.length + '%'
      sliderParent.style.transition = 'all 0.4s linear';

      nextSliderBtn.addEventListener('click', () => {
        if (offset == +width.replace(/\D/ig, '') * (sliders.length - 1)) {
          offset = 0;
        } else {
          offset += +width.replace(/\D/ig, '');
        }
        
        sliderParent.style.transform = `translateX(-${offset}px)`
      });

      prevSliderBtn.addEventListener('click', () => {
        if (offset == 0) {
          offset = +width.replace(/\D/ig, '') * (sliders.length - 1)
        } else {
          offset -= +width.replace(/\D/ig, '');
        }
        
        sliderParent.style.transform = `translateX(-${offset}px)`
      });


      setInterval(() => {
        if (offset == +width.replace(/\D/ig, '') * (sliders.length - 1)) {
          offset = 0;
        } else {
          offset += +width.replace(/\D/ig, '');
        }

        sliderParent.style.transform = `translateX(-${offset}px)`
      }, 4000);
      
      
      sliderParent.addEventListener('wheel', (e) => {
        if (e.target == sliderParent) {
          document.querySelector('body').style.overflow = `hidden`;
        } else {
          document.querySelector('body').style.overflow = '';
        }

        console.log(e.target.sliderParent);

        if (offset == +width.replace(/\D/ig, '') * (sliders.length - 1)) {
          offset = 0;
        } else {
          offset += +width.replace(/\D/ig, '');
        }

        sliderParent.style.transform = `translateX(-${offset}px)`
      });

      
    };

    sliderAssortment();
  }

///////////////////////////////////////// GSAP

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {

  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
  })

  gsap.fromTo('.top-promo', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.top-promo',
      start: 'center',
      end: '650',
      scrub: true
    }
  })

  let itemsL = gsap.utils.toArray('.gallery__left')

  itemsL.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -100 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-650',
        end: '-100',
        scrub: true
      }
    })
  })
  
  // itemsL.forEach(item => {
  //   gsap.fromTo(item, { opacity: 1, x:  0}, {
  //     opacity: 0, x: -100,
  //     scrollTrigger: {
  //       trigger: item,
  //       start: 'top',
  //       end: '400',
  //       scrub: true
  //     }
  //   })
  // })

  let itemsR = gsap.utils.toArray('.gallery__right')

  itemsR.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: 50 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-550',
        end: 'top',
        scrub: true
      }
    })
  })



  gsap.fromTo('.assortment__list', { x: -40 }, {
    x: -400,
    scrollTrigger: {
      trigger: '.assortment__list',
      start: '-850',
      end: 'bottom',
      scrub: true
    }
  })

  gsap.fromTo('.assortment__list', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.assortment__list',
      start: '-200',
      end: '200',
      scrub: true
    }
  })


  ////////////////////////

  const contactForm = () => {
    const input = document.querySelectorAll('.contact-us__input'),
          spanText = document.querySelectorAll('.contact-us__label'),
          form = document.querySelector('.contact-us__form');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      input.forEach(i => {
        if (i.classList.contains('.contact-us__input--erorr')) {
          console.log('wooo');
        } else {
          console.log(i.classList.contains('.contact-us__input--erorr'));
        }
      });

      
    });
    
    input.forEach(i => {
      i.addEventListener('input', () => {
        if (i.value != '') {
          i.classList.add('contact-us__input--focus');
        } else {
          i.classList.remove('contact-us__input--focus');
        }

        if (i.value.match(/\d/g) && i.getAttribute('name') != 'phone') {
          i.classList.add('contact-us__input--erorr');
          i.style.borderColor = 'red';
        } else {
          i.style.borderColor = '';
        }
      });

    });

    // https://webkaa.ru/javascript/maska-nomera-telefona-js
    var eventCalllback = function (e) {
      var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          e.target.value = '';
          return;
        }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
  };
  contactForm();

}