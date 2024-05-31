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
      y: 10,
      duration: 0.2,
      ease: "ease.in",
      stagger: 0.1,
    });

    timeline.to(".pinkish-div", {
      top: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    timeline.to(".greenish-div", {
      // right: 0,
      width: "100%",
      duration: 0.1,
      ease: "power2.out",
      scale: 1,
      onComplete: () => {
        document.querySelector(".main-div").style.display = "block";
      },
    });
    timeline.to(".main-div", {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
      // ease: "bounce.out",
    });

    timeline.from(".header", {
      y: -100,
      duration: 0.5,
      ease: "power2.out",
    });

    // add scroll trigger to animate the text

    // gsap.to(".main-text", {
    // 	scrollTrigger: {
    // 		trigger: ".main-text",
    // 		scroller: "body",
    // 		start: "top top",
    // 		end: "bottom bottom",
    // 		scrub: 3,
    // 		markers: true,
    // 	},
    // 	// y: -200,
    // 	duration: 0.2,
    // 	ease: "slow(0.7,0.7,false)",
    // });
    // apply parallax effect to any element with a data-speed attribute
    gsap.to("[data-speed]", {
      y: (i, el) =>
        (1 - Number.parseFloat(el.getAttribute("data-speed"))) *
        ScrollTrigger.maxScroll(window),
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 0,
      },
    });
  });
  return (
    <>
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
          <h1 className="main-text relative top-[2rem] capitalize flex w-full flex-wrap border-2 m-auto text-center justify-center">
            {/* Positively uplifting landscapes */}
            <div className="flex">
              <span data-speed="1.3" className="block">
                P
              </span>
              <span data-speed="1.3" className="block">
                O
              </span>
              <span data-speed="1.4" className="block">
                S
              </span>
              <span data-speed="1.4" className="block">
                I
              </span>
              <span data-speed="1.49" className="block">
                T
              </span>
              <span data-speed="1.49" className="block">
                I
              </span>
              <span data-speed="1.49" className="block">
                V
              </span>
              <span data-speed="1.49" className="block">
                E
              </span>
              <span data-speed="1.49" className="block">
                L
              </span>
              <span data-speed="1.49" className="block">
                Y
              </span>
            </div>
            &nbsp;
            <div className="flex">
              <span data-speed="1.49" className="block">
                U
              </span>
              <span data-speed="1.49" className="block">
                P
              </span>
              <span data-speed="1.49" className="block">
                L
              </span>
              <span data-speed="1.49" className="block">
                F
              </span>
              <span data-speed="1.49" className="block">
                T
              </span>
              <span data-speed="1.4" className="block">
                I
              </span>
              <span data-speed="1.4" className="block">
                N
              </span>
              <span data-speed="1.3" className="block">
                G
              </span>
            </div>
            &nbsp;
            <div className="flex">
              <span data-speed="1.23" className="block">
                L
              </span>
              <span data-speed="1.23" className="block">
                A
              </span>
              <span data-speed="1.23" className="block">
                N
              </span>
              <span data-speed="1.29" className="block">
                D
              </span>
              <span data-speed="1.29" className="block">
                S
              </span>
              <span data-speed="1.29" className="block">
                C
              </span>
              <span data-speed="1.23" className="block">
                A
              </span>
              <span data-speed="1.23" className="block">
                P
              </span>
              <span data-speed="1.23" className="block">
                E
              </span>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

{
  /* covert the word of each text of "Positively uplifting landscapes" into individual span */
}
{
  /* <span className="main-text">P</span>
            <span>O</span>
            <span>S</span>
            <span>I</span>
            <span>T</span>
            <span>I</span>
            <span>V</span>
            <span>E</span>
            <span>L</span>
            <span>Y</span>
            <span> </span>
            <span>U</span>
            <span>P</span>
            <span>L</span>
            <span>F</span>
            <span>T</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span> </span>
            <span>L</span>
            <span>A</span>
            <span>N</span>
            <span>D</span>
            <span>S</span> */
}
