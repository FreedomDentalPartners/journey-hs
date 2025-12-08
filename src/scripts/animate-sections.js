import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import lottie from 'lottie-web';

// animateSections.js
const AnimateSections = function () {
    gsap.registerPlugin(ScrollTrigger);    

    // === 3 Column Section ===
    let sec_3_columns = document.querySelectorAll('.grid-3-col-sec');
    if (sec_3_columns.length) {
        sec_3_columns.forEach((section) => {
            let blocks = section.querySelectorAll('.grid-3-col__block');
            blocks.forEach((block, i) => {
                let lottieBlock = block.querySelector('.lottie-block');
                let lottieSrc = lottieBlock?.getAttribute('data-lottie');

                let lottieInstance = null;
                if (lottieBlock && lottieSrc) {
                    lottieInstance = lottie.loadAnimation({
                        container: lottieBlock,
                        renderer: 'svg',
                        loop: true,
                        autoplay: false,
                        path: lottieSrc
                    });

                    //  Wait for Lottie to fully render before refreshing ScrollTrigger
                    lottieInstance.addEventListener('DOMLoaded', () => {
                        ScrollTrigger.refresh();
                        setTimeout(() => ScrollTrigger.refresh(), 500);
                    });
                }

                let hasPlayed = false;

                gsap.to(block, {
                    scrollTrigger: {
                        trigger: block,
                        start: '0% 85%',
                        end: '0% 100%',
                        scrub: false,
                        // markers: true,
                        onEnter: () => {
                            if (lottieInstance && !hasPlayed) {
                                lottieInstance.goToAndPlay(0, true);
                                hasPlayed = true;
                            }
                        }
                    },
                    delay: i * 0.1,
                    translateY: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out'
                });
            });
        });
    }

    
    // === List Column Section ===
    let listColSec = document.querySelectorAll('.list-column-sec');
    if ( Object.keys(listColSec).length ) {
        ScrollTrigger.matchMedia({
            "(min-width: 992px)": function() {
                listColSec.forEach(section => {
                    let listsBlocks = section.querySelectorAll('.list-column--block');
                    listsBlocks.forEach(block => {
                        let items = block.querySelectorAll('li');
                        items.forEach((item, i) => {
                            gsap.to(item, {
                                scrollTrigger: {
                                    trigger: listColSec,
                                    start: '0% 70%',
                                    end: '0% 100%',
                                    reversed: false,
                                    scrub: false,
                                    // markers: true
                                },
                                translateY: 0,
                                opacity: 1,
                                duration : 1,  
                                delay: i * 0.1,
                                ease : 'power2.out'
                            });
                        });
                    });
                });
            },
            "(max-width: 991px)": function() {
                listColSec.forEach(section => {
                    let items = section.querySelectorAll('li');
                    items.forEach((item, i) => {
                        gsap.to(item, {
                            scrollTrigger: {
                                trigger: listColSec,
                                start: '0% 70%',
                                end: '0% 100%',
                                reversed: false,
                                scrub: false,
                                // markers: true
                            },
                            translateY: 0,
                            opacity: 1,
                            duration : 1,  
                            delay: i * 0.1,
                            ease : 'power2.out'
                        });
                    });
                });
            }
        });
    }
};

export default AnimateSections;

