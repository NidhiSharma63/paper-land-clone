import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const data = [
  {
    image: "src/assets/kitchen.webp",
    heading1: "Midsummer",
    heading2: "Honey",
    className: "first-section",
  },
  {
    image: "src/assets/sunrise.webp",
    heading1: "Sunrise",
    heading2: "Calm",
    className: "second-section",
  },
];

const Section4 = () => {
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
  return (
    <div className="section-4 h-auto flex  bg-[#fccff6] text-[#373637] align-middle justify-between p-[4rem] pt-[4rem]  pl-[7rem] flex-col gap-24">
      <div className="flex align-middle justify-start gap-12">
        <h3 className="text-2xl font-bold heading">Bestsellers</h3>
        <button className="border-2 px-4 py-1 rounded text-[11px] font-medium tracking-wide border-[#181816cc]">
          VIEW ALL PRODUCTS
        </button>
      </div>
      <div className="flex flex-col gap-36 relative">
        {data.map((item) => {
          return (
            <div
              className={`bottom-container relative ${item.className}`}
              key={item.image}
            >
              <h1
                className={`section-4-text-${item.className} text-7xl text-white uppercase absolute z-20 top-[200px] left-[100px] w-[540px] text-wrap`}
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
                  src={item.image}
                  alt="art"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section4;
