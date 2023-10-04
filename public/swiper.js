import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

document.addEventListener('DOMContentLoaded', () => {
  const currentSwiper = document.querySelector('.swiperProducts')
  const currentButtonNext = document.querySelector(
    '.swiperProducts .swiper-button-next'
  )
  const currentButtonPrev = document.querySelector(
    '.swiperProducts .swiper-button-prev'
  )
  const currentPagination = document.querySelector(
    '.swiperProducts .swiper-pagination'
  )

  const swiper = new Swiper(currentSwiper, {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: currentPagination
    },
    navigation: {
      nextEl: currentButtonNext,
      prevEl: currentButtonPrev
    }
  })
})