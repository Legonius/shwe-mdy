gsap.registerPlugin(ScrollTrigger);
// ------------------------- services -------------------------
gsap.from("#services .container h2", {
  x: -15,
  y: 15,
  opacity: 0,
  scrollTrigger: {
    trigger: "#services",
    start: "top 50%",
    end: "10px 40%",
    duration: 1,
  },
});
gsap.from("#services li", {
  x: -15,
  y: 35,
  stagger: 0.2,
  color: "orange",
  scrollTrigger: {
    trigger: "#services",
    start: "top 50%",
    end: "10px 30%",
  },
});
// ------------------------- Core Values -------------------------
gsap.from("#strength h2", {
  opacity: 0,
  scale: 10,
  scrollTrigger: {
    trigger: "#strength",
    start: "top 50%",
    end: "10px 30%",
    duration: 1,
  },
});
gsap.from("#strength span", {
  rotate: "-360",
  duration: 3,
  opacity: 0,
  scrollTrigger: {
    trigger: "#strength",
    start: "top 60%",
    end: "10px 50%",
  },
});
gsap.from("#strength .core-value", {
  rotate: "360",
  duration: 3,
  width: 0,
  scrollTrigger: {
    trigger: "#strength",
    start: "top 60%",
    end: "10px 50%",
  },
});
gsap.from(".dashboard i", {
  duration: 3,
  color: "orange",
  scrollTrigger: {
    trigger: ".dashboard",
    start: "top 80%",
    end: "10px 40%",
  },
});
// ---------------------------------- About ----------------------------------

let tl = gsap.timeline();

tl.from(".semi-container.one", { xPercent: -100 })
  .from(".semi-container.two", { xPercent: 100 })
  .from(".semi-container.three", { xPercent: -100 })
  .from(".semi-container.four", { yPercent: 100 });

ScrollTrigger.create({
  animation: tl,
  trigger: "#about .container",
  start: "top top",
  end: "+=3000",
  scrub: 2,
  pin: true,
  anticipatePin: 1,
  snap: 1 / 4,
});
