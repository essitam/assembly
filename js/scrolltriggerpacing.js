var randomnumber = Math.floor(Math.random() * 600) + 100;

gsap.registerPlugin(ScrollTrigger);

const boxes = gsap.utils.toArray('.box');
boxes.forEach(box => {
  gsap.to('.box', { // this will animate ALL boxes
    x: 300,
    scrollTrigger: {
      trigger: '.box',  // this will use the first box as the trigger
      scrub: true,
      pin: ".box"
    }
  })
});
gsap.to(".c", {
  scrollTrigger: {
    trigger: ".c",
    //top center bottom or pixels percentages (relative to the top)
    //top of the viewport hits the center
    start: "top center",
    markers: true,
    //toggle Actions:
    //play pause resume reverse restart reset complete none
    //1 bring into view
    //2 past view port
    //3 when it comes back in
    //4 scroll all the way back past the start (improves performance)
    toggleActions: "restart pause reverse pause",
    // endTrigger:".c",
    // end: "bottom 80%",
    //true = trigger , or a class
    //adds the end as padding
     // pinspacing false makes things overlap
    pin: ".b",
    //scrub: true or false or a number
    scrub: 1
  },
  x: 400,
  //bottom of element hits top of viewport
  // relative prefix +=
  ease: "none",
  rotation: 360,
  duration: 3
});
