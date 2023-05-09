const tl =gsap.timeline({defaults: {duration: 0.75}, ease: "Power3.easeOut"})

tl.fromTo('.hero-img', {scale:1.3, borderRadius: "0rem"}, {scale:1, borderRadius:"2rem", delay:0.35, duration:2.5, ease: "elastic.out(1.5,1)"})

tl.fromTo('.cta1', {opacity:0.5, x:"100%"}, {opacity:1, x:0},"<20%")
tl.fromTo('.cta3', {opacity:0.5, x:"-100%"}, {opacity:1, x:0},"<20%")
tl.fromTo('.cta2', {opacity:0.5, y:"100%"}, {opacity:1, y:0},"<20%")

tl.fromTo('.cta4', {opacity:0.5, x:"100%"}, {opacity:1, x:0},"<20%")
tl.fromTo('.cta6', {opacity:0.5, x:"-100%"}, {opacity:1, x:0},"<20%")
tl.fromTo('.cta5', {opacity:0.5, y:"100%"}, {opacity:1, y:0},"<20%")

tl.fromTo('.cta-btn', {y:20, opacity:0}, {y:0, opacity:1},"<")


//split text animation

const logo = document.querySelector('.logo');
const letters = logo.textContent.split('');

logo.textContent ="";

letters.forEach((l) =>{
    logo.innerHTML += `<span class="letter">` + l + `</span>`
})
gsap.set('.letter', {display: 'inline-block'})
gsap.fromTo('.letter', {y:"100%"}, {y:0, delay:2, stagger:0.07, ease: 'back.out(3)'})
