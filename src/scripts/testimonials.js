import Swiper, { Pagination, Navigation } from 'swiper';

const Testimonials = function () {
    const swiperSection = document.querySelector('.testimonial-swiper-sec');
    if (swiperSection) {
        let testimonialSwipersMobile = document.querySelectorAll('.testimonial-swiper-mobile');
        testimonialSwipersMobile.forEach(testimonial => {;
            let testimonialSwiperMobile = new Swiper(testimonial, {
                loop: true,
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 30,
                autoHeight: true,
                modules: [Navigation, Pagination],
                navigation: {
                    nextEl: '.testimonial-swiper-mobile .swiper-button-next',
                    prevEl: '.testimonial-swiper-mobile .swiper-button-prev',
                },
    
                pagination: {
                    el: '.testimonial-swiper-mobile .swiper-pagination',
                    clickable: true
                },
    
                breakpoints: {
                    1192: {
                        allowTouchMove: false,
                        spaceBetween: 20
                    }
                }
            });
        });
    
    
        let testimonialSwipersDesktop = document.querySelectorAll('.testimonial-swiper-desktop');
        testimonialSwipersDesktop.forEach(testimonial => {;
            let testimonialSwiperDesktop = new Swiper(testimonial, {
                loop: true,
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 30,
                autoHeight: true,
                modules: [Navigation, Pagination],
                navigation: {
                    nextEl: '.header-wrap .swiper-button-next',
                    prevEl: '.header-wrap .swiper-button-prev',
                },
    
                pagination: {
                    el: '.header-wrap .swiper-pagination',
                    clickable: true
                },
    
                breakpoints: {
                    1192: {
                        allowTouchMove: false,
                        spaceBetween: 20
                    }
                }
            });
        });
    }


}

export default Testimonials;
