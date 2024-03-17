new SplitType('#right-part h2')
new SplitType('#upper-part h2')
new SplitType('#lower-part h2')
new SplitType('section#part-4 #text-4 h2')

gsap.to("#right-part h2 .word .char",{
    y: 0,
    // stagger: 0.01,
    scrollTrigger: {
        trigger: "section#part-2",
        start: "top 60%",
        end: "top 60%",
        // markers: true,
        scrub: 2
    }
})
gsap.from("#part-3  a",{
   scale: 0,
   duration:1.8,
   delay: 1,
    scrollTrigger: {
        trigger: "section#part-3",
        start: "top 60%",
        end: "top 60%",
        // markers: true,
        scrub: 2
    }
})
gsap.from("#part-4  a",{
   scale: 0,
   duration:1.8,
   delay: 1,
    scrollTrigger: {
        trigger: "section#part-4",
        start: "top 60%",
        end: "top 60%",
        // markers: true,
        scrub: 2
    }
})
gsap.from("#part-5  a",{
   scale: 0,
   duration:1.8,
   delay: 1,
    scrollTrigger: {
        trigger: "section#part-5",
        start: "top 60%",
        end: "top 60%",
        // markers: true,
        scrub: 2
    }
})
gsap.to("#upper-part h2 .word .char",{
    y: 5,
    // stagger: 0.1,
    scrollTrigger: {
        trigger: "section#part-3",
        start: "top 60%",
        end: "top 60%",
        // markers: true,
        scrub: 2
    }
})
gsap.to("#lower-part h2 .word .char",{
    y: 5,
    // stagger: 0.01,
    scrollTrigger: {
        trigger: "section#part-3",
        start: "top 60%",
        end: "top 60%",
        // markers: true,
        scrub: 2
    }
})
gsap.to("section#part-4  #text-4 h2 .word .char",{
    y: 5,
    // stagger: 0.1,
    scrollTrigger: {
        trigger: "section#part-4",
        start: "top 60%",
        end: "top 60%",
        // markers: true,
        scrub: 2
    }
})