const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

//   function circleMouseFollower(xscale, yscale){
//     window.addEventListener("mousemove", function(dets){
//         document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
//     })
//   }
  var timeout;
  function mousechapta(){
    clearTimeout(timeout);
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;

    window.addEventListener("mousemove", function(dets){
        var xscale= gsap.utils.clamp(0.6, 1.4, dets.clientX- xprev);
        var xscale= gsap.utils.clamp(0.8, 1.2, dets.clientY- yprev);

        xprev=dets.clientX;
        yprev=dets.clientY;

        circleMouseFollower(xscale,yscale);

        // timeout=setTimeout(function(){
        //     document.querySelector(
        //         "minicircle"
        //     ).style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
        // })
    })
  }

  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }

  circleMouseFollower();
  mousechapta();

  gsap.from("#heading,#secondary",{
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#hero",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#cheading,#herofooter",{
    y: -90,
    opacity: 0,
    duration: 2,
    stagger: .2,
    scrollTrigger: {
      trigger: "#hero",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 3,
      
    },
  });
  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });