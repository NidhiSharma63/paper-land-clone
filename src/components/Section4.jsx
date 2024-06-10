import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useCallback } from "react";

const data = [
  {
    image: "/assets/kitchen.webp",
    heading1: "Midsummer",
    heading2: "Honey",
    className: "first-section",
  },
  {
    image: "/assets/sunrise.webp",
    heading1: "Sunrise",
    heading2: "Calm",
    className: "second-section",
  },
];

const Section4 = React.forwardRef((_, ref) => {
  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.from(".first-section", {
      x: "100%",
      duration: 1,
      scrollTrigger: {
        trigger: ".first-section",
        start: "top 80%",
        end: "bottom bottom",
        scrub: 8,
      },
    });

    // initial animation on span
    timeline.to(".section-4-text-first-section span", {
      opacity: 1,
      scale: 1,
      y: 0, // Increased duration
      ease: "ease.in",
      stagger: 0.1, // Increased stagger
      scrollTrigger: {
        start: "top 20%",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: 3,
        trigger: ".first-section",
      },
    });

    // animation to move span element up
    timeline.to(".section-4-text-first-section span", {
      y: -100,
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: 9,
        trigger: ".first-section",
      },
    });
    timeline.to(".first-section .card", {
      y: -100,
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: 9,
        trigger: ".first-section",
      },
    });

    timeline.from(".second-section", {
      x: "100%",
      duration: 1,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top 80%",
        end: "bottom bottom",
        scrub: 8,
      },
    });

    // initial animation on span
    timeline.to(".section-4-text-second-section span", {
      opacity: 1,
      scale: 1,
      y: 0, // Increased duration
      ease: "ease.in",
      stagger: 0.1, // Increased stagger
      scrollTrigger: {
        start: "top 40%",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: 3,
        // markers: true,
        trigger: ".second-section",
      },
    });
    timeline.to(".section-4-text-second-section span", {
      y: -100,
      scrollTrigger: {
        start: "top top",
        end: "bottom 20%",
        invalidateOnRefresh: true,
        scrub: 9,
        // markers: true,
        trigger: ".second-section",
      },
    });
    timeline.to(".second-section .card", {
      y: -100,
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: 9,
        // markers: true,
        trigger: ".second-section",
      },
    });
  });

  const handleMouseEnter = useCallback(() => {
    ref.current?.classList.add("section-3-cursor-animation-img");
  }, [ref]);

  const handleMouseLeave = useCallback(() => {
    ref.current?.classList.remove("section-3-cursor-animation-img");
  }, [ref]);

  const handleMouseEnterCursor = useCallback(() => {
    ref.current?.classList.add("section-3-cursor-animation");
  }, [ref]);

  const handleMouseLeaveCursor = useCallback(() => {
    ref.current?.classList.remove("section-3-cursor-animation");
  }, [ref]);

  return (
    <div className=" max-w-[1920px] m-auto section-4 h-auto flex  bg-[#fccff6] text-[#373637] align-middle justify-between md:p-[4rem]  md:pl-[4rem] p-[2rem] pl-[2rem] flex-col gap-16">
      <div className="flex flex-col md:gap-36 gap-12 relative  justify-center flex md:gap-16 gap-1 flex-col ">
        <div className="flex align-middle justify-start gap-12">
          <h3 className="md:text-2xl text-sm 2xl:text-3xl 3xl:text-4xl font-bold heading">
            Bestsellers
          </h3>
          <button
            onMouseEnter={handleMouseEnterCursor}
            onMouseLeave={handleMouseLeaveCursor}
            className="md:text-[0.7rem] text-[0.5rem] 2xl:text-lg 3xl:text-xl border-2 px-4 py-1 rounded text-[11px] font-medium tracking-wide border-[#181816cc] hover:bg-[#181816ee] hover:text-white transition-all duration-500"
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
        <div className="flex flex-col gap-28  justify-center">
          {data.map((item) => {
            return (
              <div
                className={`bottom-container relative ${item.className}`}
                key={item.image}
              >
                <h1
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`section-4-text-${item.className} 2xl:text-8xl 3xl:text-9xl md:text-7xl text-3xl text-white uppercase absolute z-20 md:top-[200px] top-[100px] md:left-[100px] left-[50px] md:w-[540px] w-[300px] text-wrap`}
                >
                  <div className="flex">
                    {item.heading1.split("").map((letter, index) => {
                      return (
                        <span
                          key={index}
                          className={`block font-bold scale-0 translate-y-[-10px] opacity-0 ${item.className}-text`}
                        >
                          {letter}
                        </span>
                      );
                    })}
                  </div>
                  {/* <br /> */}
                  <div className="flex">
                    {item.heading2.split("").map((letter, index) => {
                      return (
                        <span
                          key={index}
                          className="block scale-0 translate-y-[-10px] opacity-0"
                        >
                          {letter}
                        </span>
                      );
                    })}
                  </div>
                </h1>
                <div className="card flex md:gap-6 gap-3 flex-col absolute md:w-[220px] 2xl:w-[440px] w-[110px] md:px-8  md:py-4 px-4 py-2 rounded-xl bg-[#f4f6f3c7] md:right-[157px] md:bottom-[130px] right-[30px] bottom-[27px] z-10">
                  <div className="flex gap-1 flex-col">
                    <p className="md:text-[18px] text-[12px] 2xl:text-2xl 3xl:text-2xl">
                      ART PRINT
                    </p>
                    <p className="font-bold md:text-[20px] text-[14px] 2xl:text-2xl 3xl:text-2xl">
                      £24.00 – £42.00
                    </p>
                  </div>
                  <button className="font-bold text-white bg-black rounded-md md:text-[18px] text-[12px] md:py-3 py-1 md:w-[130px] w-[80px]">
                    Shop Now
                  </button>
                </div>
                <div className="imageContainer md:max-w-[1050px] 2xl:max-w-[1400px] 3xl:max-w-[1700px] max-h-[600px] 2xl:max-h-[900px] 3xl:max-h-[1200px] rounded-xl overflow-hidden ">
                  <img
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="image w-full h-full object-cover md:translate-y-[-90px] translate-y-0"
                    src={item.image}
                    alt="art"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

Section4.displayName = "Section4";
  
export default Section4;
