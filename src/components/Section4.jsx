import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Section4 = () => {
  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.from(".bottom-container", {
      x: "100%",
      duration: 1,
      scrollTrigger: {
        trigger: ".bottom-container",
        start: "top 80%",
        end: "bottom bottom",
        scrub: 8,
        // markers: true,
      },
    });

    timeline.from(".section-4-text span", {
      opacity: 0,
      scale: 0.1,
      y: 10, // Increased duration
      ease: "ease.in",
      stagger: 0.1, // Increased stagger
      scrollTrigger: {
        start: "top 20%",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: 3,
        // markers: true,
        trigger: ".section-4",
      },
    });

    timeline.to(".section-4-text span", {
      y: -100,
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: 3,
        markers: true,
        trigger: ".bottom-container",
      },
    });
    timeline.to(".bottom-container .card", {
      y: -100,
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: 3,
        // markers: true,
        trigger: ".bottom-container",
      },
    });
  });
  return (
    <div className="section-4 h-[850px] flex  bg-[#fccff6] text-[#373637] align-middle justify-between p-[4rem] pt-[4rem]  pl-[7rem] flex-col gap-34">
      <div className="flex align-middle justify-start gap-12">
        <h3 className="text-2xl font-bold heading">Bestsellers</h3>
        <button className="border-2 px-4 py-1 rounded text-[11px] font-medium tracking-wide border-[#181816cc]">
          VIEW ALL PRODUCTS
        </button>
      </div>
      <div className="bottom-container relative">
        <h1 className="section-4-text text-7xl text-white uppercase font-bold flex gap-2 absolute z-20 top-[200px] left-[100px] w-[300px] border-2 text-wrap flex-wrap">
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
        <div className="card flex gap-6 flex-col absolute w-[220px] px-8 py-4 rounded-xl bg-[#f4f6f3c7] right-[157px] bottom-[130px] z-10">
          <div className="flex gap-1 flex-col">
            <p className="text-[18px]">ART PRINT</p>
            <p className="font-bold text-[20px]">£24.00 – £42.00</p>
          </div>
          <button className="font-bold text-white bg-black rounded-md text-[18px] py-3 w-[130px]">
            Shop Now
          </button>
        </div>
        <div className="imageContainer max-w-[1050px] max-h-[650px] rounded-xl overflow-hidden">
          <img
            className="image w-full h-full object-cover translate-y-[-90px]"
            src="src/assets/kitchen.webp"
            alt="art"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
