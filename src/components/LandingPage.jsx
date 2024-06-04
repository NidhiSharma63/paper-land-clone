import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(_ScrollTrigger);

const LandingPage = () => {
  // add text animation using gsap

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.from(".logo span", {
      opacity: 0,
      scale: 0.1,
      y: 10, // Increased duration
      ease: "ease.in",
      stagger: 0.1, // Increased stagger
    });

    timeline.to(".pinkish-div", {
      top: 0, // Increased duration
      ease: "power2.out",
    });

    timeline.to(".greenish-div", {
      width: "100%", // Increased duration
      ease: "power2.out",
      scale: 1,
      onComplete: () => {
        document.querySelector(".main-div").style.display = "block";
      },
    });

    timeline.to(".main-div", {
      scale: 1, // Increased duration
      ease: "power2.out",
    });

    timeline.from(".header", {
      y: -100, // Increased duration
      ease: "power2.out",
    });

    // apply parallax effect to any element with a data-speed attribute
    gsap.to("[data-speed]", {
      y: (i, el) =>
        (1 - Number.parseFloat(el.getAttribute("data-speed"))) * 302,
      // ease: "ease.in",
      scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 2, // Increased scrub duration
        markers: true,
      },
      onScroll: () => {
        // locoScroll.update();
        console.log("first", ScrollTrigger.maxScroll(window));
      },
      // paused: true,
    });
  });

  return (
    <div data-scroll data-scroll-speed="-3">
      <div className="h-screen bg-black flex items-center justify-center">
        <h1 className="logo text-7xl text-white uppercase font-bold flex gap-2">
          <span className="block">P</span>
          <span className="block">A</span>
          <span className="block">P</span>
          <span className="block">E</span>
          <span className="block">R</span>
          <span className="block">+</span>
          <span className="block">L</span>
          <span className="block">A</span>
          <span className="block">N</span>
          <span className="block">D</span>
        </h1>
      </div>
      <div className="pinkish-div absolute bottom-0 z-1 bg-[#D6BAD0] w-full" />
      <div className="greenish-div absolute w-0 top-0 right-0 z-2 bg-[#16a991] h-full" />
      <div className="main-div absolute w-full h-full top-0 right-0 z-3 flex justify-between">
        <header className="header flex w-full justify-between text-white p-11 align-middle">
          <h1 className="text-2xl uppercase font-extrabold tracking-[3px]">
            Paper + Land
          </h1>
          <div className="flex gap-12 text-[#272624da] bg-[#cdc5bfa0] align-middle justify-between px-12 py-6 text-2xl rounded-full">
            <i className="fa-solid fa-cart-shopping" />
            <div className="flex gap-3">
              <i className="fa-solid fa-magnifying-glass" />
              <i className="fa-solid fa-bars" />
            </div>
          </div>
        </header>
        <div
          className="text-white text-[5rem] mt-20 px-11 text-center 
       w-[85%] m-auto text-wrap font-extrabold tracking-[3px] flha"
        >
          <h1 className="main-text relative top-[2rem] capitalize flex w-full flex-wrap m-auto text-center justify-center">
            <div className="flex">
              <span data-speed="1.255">P</span>
              <span data-speed="1.255" className="block">
                O
              </span>
              <span data-speed="1.244" className="block">
                S
              </span>
              <span data-speed="1.233" className="block">
                I
              </span>
              <span data-speed="1.233" className="block">
                T
              </span>
              <span data-speed="1.233" className="block">
                I
              </span>
              <span data-speed="1.222" className="block">
                V
              </span>
              <span data-speed="1.222" className="block">
                E
              </span>
              <span data-speed="1.222" className="block">
                L
              </span>
              <span data-speed="1.211" className="block">
                Y
              </span>
            </div>
            &nbsp;
            <div className="flex">
              <span data-speed="1.211" className="block">
                U
              </span>
              <span data-speed="1.211" className="block">
                P
              </span>
              <span data-speed="1.199" className="block">
                L
              </span>
              <span data-speed="1.199" className="block">
                F
              </span>
              <span data-speed="1.199" className="block">
                T
              </span>
              <span data-speed="1.166" className="block">
                I
              </span>
              <span data-speed="1.166" className="block">
                N
              </span>
              <span data-speed="1.166" className="block">
                G
              </span>
            </div>
            &nbsp;
            <div className="flex">
              <span data-speed="1.277" className="block">
                L
              </span>
              <span data-speed="1.277" className="block">
                A
              </span>
              <span data-speed="1.277" className="block">
                N
              </span>
              <span data-speed="1.244" className="block">
                D
              </span>
              <span data-speed="1.244" className="block">
                S
              </span>
              <span data-speed="1.244" className="block">
                C
              </span>
              <span data-speed="1.222" className="block">
                A
              </span>
              <span data-speed="1.222" className="block">
                P
              </span>
              <span data-speed="1.222" className="block">
                E
              </span>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
