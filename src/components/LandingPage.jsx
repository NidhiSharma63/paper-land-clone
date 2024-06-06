import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useCallback, useRef, useState } from "react";
gsap.registerPlugin(_ScrollTrigger);

const LandingPage = () => {
  const cursorExampleRef = useRef(null);
  const logoRef = useRef(null);
  const [mouseEnter, setMouseEnter] = useState(false);
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
        (1 - Number.parseFloat(el.getAttribute("data-speed"))) * 402,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 2, // Increased scrub duration
        // markers: true,
        trigger: ".smooth-scroll",
      },
    });

    // logoRef.current?.forEach((link) => {
  });

  // useEffect(() => {
  //   if (!logoRef.current) {
  //     return;
  //   }

  //   const handleMouseEnter = () => {
  //     cursorExampleRef.current.classList.add("grow");
  //   };

  //   const handleMouseLeave = () => {
  //     // console.log("mouse out");
  //     cursorExampleRef.current.classList.remove("grow");
  //     cursorExampleRef.current.classList.remove("grow-small");
  //   };

  //   const newRef = logoRef.current;
  //   newRef.addEventListener("mousemove", handleMouseEnter);
  //   newRef.addEventListener("mouseleave", handleMouseLeave); // Use mouseleave instead of mouseout

  //   newRef.addEventListener("mouseenter", () => console.log("Mouse Enter"));
  //   newRef.addEventListener("mouseover", () => console.log("Mouse Over"));
  //   // newRef.addEventListener("mouseleave", () => console.log("Mouse Leave"));
  //   // newRef.addEventListener("mouseout", () => console.log("Mouse Out"));
  //   return () => {
  //     newRef.removeEventListener("mousemove", handleMouseEnter);
  //     newRef.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);

  const handleMouseEnter = useCallback(() => {
    // cursor.classList.add('grow');
    // if
    cursorExampleRef.current.classList.add("grow");
  }, []);

  const handleMouseLeave = () => {
    // console.log("mouse out");
    cursorExampleRef.current.classList.remove("grow");
    cursorExampleRef.current.classList.remove("grow-small");
  };
  return (
    <div data-scroll data-scroll-speed="-3">
      <div className="cursor" />
      <div className="cursor-example" ref={cursorExampleRef} />
      <div className="h-screen bg-black flex items-center justify-center">
        <h1 className="logo md:text-7xl sm:text-4xl text-2xl text-white uppercase font-bold flex gap-2">
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
        <header className="header flex w-full justify-between align-middle text-white md:p-11 p-4">
          {/* <div
            ref={logoRef}
            className="flex align-middle justify-center w-[250px] h-[50px]"
            // onMouseEnter={() => {
            //   console.log("mouseEnter");
            // }}
            onMouseMove={() => {
              console.log("mouseMove");
            }}
            onMouseLeave={() => {
              console.log("mouseLeave");
            }}
          > */}
          <h1 className="md:text-2xl text-lg uppercase font-extrabold md:tracking-[3px] tracking-[1.8px]">
            Paper + Land
          </h1>
          {/* </div> */}
          <div className="flex md:gap-12 gap-4 text-[#272624da] bg-[#cdc5bfa0] align-middle justify-between md:px-12 md:py-6 px-6 py-3 md:text-2xl text-lg rounded-full">
            <i className="fa-solid fa-cart-shopping" />
            <div className="flex items-center justify-between md:gap-3 gap-1">
              <i className="fa-solid fa-magnifying-glass" />
              <i className="fa-solid fa-bars" />
            </div>
          </div>
        </header>
        <div
          className="text-white  lg:text-[5rem] md:text-[4rem] sm:text-[3rem] text-[2.5rem] mt-20 px-11 text-center 
       w-[85%] m-auto text-wrap font-extrabold tracking-[3px] "
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
                I
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
