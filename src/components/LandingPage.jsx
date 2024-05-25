import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import mainBgImage from "../assets/mainBgImage.jpg";
const LandingPage = () => {
  // add text animation using gsap

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.from("span", {
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
  });
  return (
    <>
      <div className="h-screen bg-black flex items-center justify-center">
        <h1 className="text-7xl text-white uppercase font-bold flex gap-2">
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
          className="text-white text-[5rem]  mt-20 px-11 text-center 
       w-[85%] m-auto text-wrap font-extrabold tracking-[3px]"
        >
          <h1>Positively uplifting landscapes</h1>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
