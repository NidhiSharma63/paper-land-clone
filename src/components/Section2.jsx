import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Section2 = () => {
  useGSAP(() => {
    // apply parallax effect to any element with a data-speed attribute
    gsap.from(".section-2-text span", {
      opacity: 0,
      y: 10, // Increased duration
      ease: "ease.in",
      stagger: 0.1,
      scrollTrigger: {
        start: "top 80%",
        end: "bottom bottom",
        scrub: 2, // Increased scrub duration,
        // markers: true,
        trigger: ".section-2",
      },
    });
  });
  return (
    <div
      data-scroll
      data-scroll-speed="0"
      className="section-2 max-w-[1920px] m-auto h-screen flex bg-[#fccff6] text-[#373637] items-center justify-center md:p-[4rem] p-[2rem] pt-[8rem] md:gap-12 gap-6 flex-col lg:flex-row"
    >
      {/* <div className="w-[80%] h-[80%] m-auto border-2 flex gap-24"> */}
      <div className="">
        <p
          className="md:text-4xl 2xl:text-5xl  text-3xl font-bold section-2-text w-[300px]"
          data-scroll
          data-scroll-speed="-2"
          direction="vertical"
        >
          <span className="inline-block">W</span>
          <span className="inline-block">E</span>
          <span className="inline-block">L</span>
          <span className="inline-block">C</span>
          <span className="inline-block">O</span>
          <span className="inline-block">M</span>
          <span className="inline-block">E</span>
        </p>
      </div>
      <div className="">
        <p className="section-2-text md:text-3xl 2xl:text-4xl  text-xl tracking-[.1rem] 2xl:leading-[5rem] md:leading-[4rem] leading-[2.8rem] italic">
          <span className="inline-block">Paper</span>&nbsp;
          <span className="inline-block">+</span>&nbsp;
          <span className="inline-block">Land</span>&nbsp;
          <span className="inline-block">is</span>&nbsp;
          <span className="inline-block">an</span>&nbsp;
          <span className="inline-block">art</span>&nbsp;
          <span className="inline-block">and</span>&nbsp;
          <span className="inline-block">design</span>&nbsp;
          <span className="inline-block">studio</span>&nbsp;
          <span className="inline-block">based</span>&nbsp;
          <span className="inline-block">in</span>&nbsp;
          <span className="inline-block">Leeds,</span>&nbsp;
          <span className="inline-block">creating</span>&nbsp;
          <span className="inline-block">contemporary</span>&nbsp;
          <span className="inline-block">landscape</span>&nbsp;
          <span className="inline-block">art</span>&nbsp;
          <span className="inline-block">prints,</span>&nbsp;
          <span className="inline-block">cards</span>&nbsp;
          <span className="inline-block">and</span>&nbsp;
          <span className="inline-block">homewares.</span>&nbsp;
          <span className="inline-block">We</span>&nbsp;
          <span className="inline-block">combine</span>&nbsp;
          <span className="inline-block">Indian</span>&nbsp;
          <span className="inline-block">ink</span>&nbsp;
          <span className="inline-block">with</span>&nbsp;
          <span className="inline-block">digital</span>&nbsp;
          <span className="inline-block">methods</span>&nbsp;
          <span className="inline-block">to</span>&nbsp;
          <span className="inline-block">create</span>&nbsp;
          <span className="inline-block">joyful,</span>&nbsp;
          <span className="inline-block">vibrant</span>&nbsp;
          <span className="inline-block">artwork</span>&nbsp;
          <span className="inline-block">that</span>&nbsp;
          <span className="inline-block">feeds</span>&nbsp;
          <span className="inline-block">your</span>&nbsp;
          <span className="inline-block">soul.</span>&nbsp;
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Section2;
