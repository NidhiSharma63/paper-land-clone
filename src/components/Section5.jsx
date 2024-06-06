import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const data = [
  {
    image: "src/assets/kitchen.webp",
    heading1: "Frozen Blush",
    heading2: "Skipton Art Place",
  },
  {
    image: "src/assets/Cards.webp",
    heading1: "Sunrise Blush",
    heading2: "Skipton Art Place",
  },
  {
    image: "src/assets/Art.webp",
    heading1: "Calm Blush",
    heading2: "Skipton Art Place",
  },
  {
    image: "src/assets/sunrise.webp",
    heading1: "Twilight Blush",
    heading2: "sunrise Art Place",
  },
];

const Section5 = () => {
  useGSAP(() => {
    gsap.from(".section-5-card-image", {
      scale: 1.5,
      scrollTrigger: {
        start: "top 20%",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: 1,
        // markers: true,
        trigger: ".section-5",
      },
    });
  });
  return (
    <div className="section-5 h-auto flex  bg-[#fccff6] text-[#373637] align-middle justify-between md:p-[4rem] pt-[4rem] p-[1rem] pl-[1rem] md:pl-[7rem] flex-col gap-16">
      <div className="flex align-middle justify-start gap-12">
        <h3 className="text-2xl font-bold heading">More Products</h3>
        <button className="border-2 px-4 py-1 rounded text-[11px] font-medium tracking-wide border-[#181816cc]">
          VIEW ALL
        </button>
      </div>

      <div className="image-grid grid md:grid-cols-4 grid-cols-2 gap-2 ">
        {data.map((elem) => {
          return (
            <div
              className="section-5-card group flex flex-col gap-3 align-middle cursor-pointer hover:scale-105 transition-transform duration-300 ease-out"
              key={elem.heading1}
            >
              <div className="w-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full transition-transform duration-300 ease-out group-hover:scale-110 section-5-card-image"
                  src={elem.image}
                  alt={elem.heading1}
                />
              </div>
              <div className="flex flex-col align-middle text-center">
                <p className="md:text-[22px] text-[15px] font-bold transition-transform duration-300 ease-out group-hover:scale-125">
                  {elem.heading1}
                </p>
                <p>Skipton Art Place</p>
                <p className="md:text-[20px] text-[15px] md:mt-2 mt-1">
                  £24.00 – £42.00
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section5;
