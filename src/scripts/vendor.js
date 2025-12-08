import AnimateSections from "./animate-sections";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 👇 Add this where the script is initialized
window.addEventListener('load', () => {
    AnimateSections();
    ScrollTrigger.refresh(); // Make sure ScrollTrigger recalculates after full page load
    setTimeout(() => ScrollTrigger.refresh(), 500);
});