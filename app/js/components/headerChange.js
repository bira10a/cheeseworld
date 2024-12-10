const headerActive = () => {
    const sectionHeader = document.querySelector('.header');
    document.addEventListener('scroll', () => {   
      if (document.documentElement.scrollTop >= 300) {
        sectionHeader.classList.add('header--active')
      } else {
        sectionHeader.classList.remove('header--active')
      }
    });
  };

const handleCheckbox = () => {
    const headerCheckbox = document.querySelector('.header__input'),
          body = document.querySelector('body');
    
    headerCheckbox.addEventListener('change', () => {
      if (headerCheckbox.checked) {
        body.classList.add('black-theme');
      } else {
        body.classList.remove('black-theme');
      }
    })
}



  export {headerActive, handleCheckbox};