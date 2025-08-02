Shery.mouseFollower();
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr", 
    {videos: ['./0.mp4', './2.mp4', './3.mp4']});



gsap.to(".fleftelem", { //.to is to tell whom to animate
    scrollTrigger: { //to stop the screen
        trigger: "#featured-images",
        pin: true,
        start: "top top",
        endTrigger: ".last", //last elem given class for that whole part or section
        scrub: 1 //scrolling to animate very important
    },
    y: "-300%",
    ease: Power1

})

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
  style: 5,
  config: {onMouse: {value: 1}},
  slideStyle: (setScroll) => {
    sections.forEach(function(section, index){
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            scrub: 1,
            onUpdate: function(prog){
                setScroll(prog.progress+index)
            },
        });
    });

    
  },
});