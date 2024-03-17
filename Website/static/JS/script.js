gsap.registerPlugin(ScrollTrigger);
const menuItems = [...document.querySelectorAll('.menu-item')];
menuItems.forEach(item => {
    let word = item.children[0].children[0].innerText.split('');
    // console.log(word)
    item.children[0].innerHTML = '';
    word.forEach((letter, idx) => {
        item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
    })
    let cloneDIv = item.children[0].cloneNode(true);
    cloneDIv.style.position = "absolute";
    cloneDIv.style.color = "var(--accent-color)"
    cloneDIv.style.left = "0"
    cloneDIv.style.top = "0"
    item.appendChild(cloneDIv);
})

function navToggler() {
    let btn = document.querySelector("#show");
    let btn2 = document.querySelector("#close");
    let nav = document.getElementById("Navbar");
    btn.addEventListener("click", () => {
        nav.style.top = "0px";
    })
    btn2.addEventListener("click", () => {
        nav.style.top = "-100%";
    })
}
navToggler();


// Hero Page Animation 

const line1 = new SplitType('.line-1 h1')
const line2 = new SplitType('.line-2 h1')
const line3 = new SplitType('.line-3 h1')
const line4 = new SplitType('#service-intro h1')
// const line5 = new SplitType('.S-heading h1')

gsap.to('.char', {
    y: 0,
    stagger: 0.01,
    delay: 0.2,
    duration: 0.1
})

function MouseFollower() {
    let crsr = document.querySelector("#cursor")
    let main = document.querySelector("body")


    main.addEventListener('mousemove', (dets) => {
        let detsY = dets.y - "100px"
        gsap.to(crsr, {
            x: dets.x,
            y: dets.y
            // delay: 0.01,

        })
    })
}
MouseFollower()


gsap.from(" #header-left #logo ", {
    x: -200,
    y:-20,
    duration: 1.2,
    opacity: 0,
    scale: 0

})
gsap.from(" #header-right #contact", {
    // x: 200,
    y: -50,
    delay:.3,
    duration: 1.2,
    opacity: 0,
    scale: 0

})
gsap.from(" #header-right h3", {
    // x: 200,
    y: -50,
    delay:.5,
    duration: 1.2,
    opacity: 0,
    scale: 0

})
