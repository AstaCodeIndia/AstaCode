gsap.to("#part-2  #left  #l-txt  h2  span h2", {
    bottom: 0,
    // stagger: .2,
    duration: .5,
    scrollTrigger: {
        trigger: "#part-2",
        start: "top 40%",
        end: " top 40%",
        // markers: true,
        scrub: 1
    }
})
gsap.from("#part-2  #left  #l-txt  h3", {
    opacity: .5,
    scale: .9,
    duration: .5,
    scrollTrigger: {
        trigger: "#part-2",
        start: "top 40%",
        end: " top 40%",
        // markers: true,
        scrub: 1
    }
})
gsap.from("#part-2 #right #r-txt h2",{
    opacity: 0.2,
    // scale: 0.8,
    duration: 1,
    // delay: 1,
    scrollTrigger: {
        trigger: "#part-2 ",
        start: "top 40%",
        end: " top 40%",
        // markers: true,
        scrub: 1
    }
})
gsap.from("#text-4",{
    opacity: 0.2,
    // scale: 0.8,
    duration: 1,
    // delay: 1,
    scrollTrigger: {
        trigger: "#part-4 ",
        start: "top 40%",
        end: " top 40%",
        // markers: true,
        scrub: 1
    }
})
gsap.to("#part-3  #part-3-right  #right-top  h1  span", {
    bottom: 0,
    // stagger: .2,
    duration: .5,
    scrollTrigger: {
        trigger: "#part-3",
        start: "top 20%",
        end: " top 20%",
        // markers: true,
        scrub: 1
    }
})
