const headImg = document.querySelector('.header-content__img')
const headWrapper = document.querySelector('.header-content__w')

headWrapper.style.height = headImg.scrollHeight + 'px'

// about slider

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});