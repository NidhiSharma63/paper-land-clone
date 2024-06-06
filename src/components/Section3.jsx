import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useState } from "react";
// import Image1 from "../assets/Art.webp";

const Section3 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [categorySelected, setCategorySelected] = useState("Art Prints");
  const [imageUrl, setimageUrl] = useState("src/assets/Art.webp");
  const [removeImage, setRemoveImage] = useState(false);

  useGSAP(() => {
    gsap.from(".image-container", {
      x: "-100%",
      duration: 1,
      scrollTrigger: {
        trigger: ".section-3",
        start: "top 80%",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
      },
    });
  });

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleCategorySelection = useCallback((event) => {
    setCategorySelected(event.target.dataset.category);
    setRemoveImage(true);
    // change image url
    setTimeout(() => {
      setimageUrl(
        `src/assets/${event.target.dataset.category.split(" ")[0]}.webp`
      );
      setRemoveImage(false);
    }, 400);
  }, []);

  return (
    <div className="section-3 h-auto gap-8 flex  bg-[#fccff6] text-[#373637] align-middle justify-between md:p-[4rem] p-[2rem] pt-[4rem] md:pl-[7rem] pl-[2rem] flex-col ">
      <div className="flex align-middle justify-start gap-12">
        <h3 className="text-2xl font-bold heading">Product Collections</h3>
        <button className="border-2 px-4 py-1 rounded text-[11px] font-medium tracking-wide border-[#181816cc]">
          VIEW ALL PRODUCTS
        </button>
      </div>
      <div className="section3-bottom flex gap-10 md:flex-row flex-col-reverse">
        <div
          // data-scroll
          // data-scroll-speed="-1"
          // data-scroll-direction="horizontal"
          className="image-container max-w-[750px] max-h-[600px] rounded-xl overflow-hidden"
        >
          <img
            src={imageUrl}
            alt="showcase-image"
            className={`w-full h-full ${
              isHovered ? "scale-110" : "scale-100"
            } transition-all duration-500 cursor-pointer object-cover 
            ${removeImage ? "removeImage" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="section-3-text flex md:flex-col  flex-wrap flex-row gap-4 mt-3 md:text-2xl text-lg">
          <p
            className={` cursor-pointer hover:translate-x-5 transition ${
              categorySelected.includes("Art Prints")
                ? "active-category"
                : "text-[#4e4d4e3a]"
            }`}
            onClick={handleCategorySelection}
            data-category="Art Prints"
          >
            Art Prints
            <hr
              // className="border-[1px] border-[#4e4d4e3a]"
              className={` border-[1px] ${
                categorySelected.includes("Art Prints")
                  ? "active-category"
                  : "border-[#4e4d4e3a]"
              }`}
            />
          </p>

          <p
            className={` cursor-pointer hover:translate-x-5 transition ${
              categorySelected.includes("Cards & Stationery")
                ? "active-category"
                : "text-[#4e4d4e3a]"
            }`}
            data-category="Cards & Stationery"
            onClick={handleCategorySelection}
          >
            Cards & Stationery
            <hr
              className={` border-[1px] ${
                categorySelected.includes("Cards & Stationery")
                  ? "active-category"
                  : "border-[#4e4d4e3a]"
              }`}
            />
          </p>

          <p
            className={` cursor-pointer hover:translate-x-5 transition ${
              categorySelected.includes("Homewares")
                ? "active-category"
                : "text-[#4e4d4e3a]"
            }`}
            data-category="Homewares"
            onClick={handleCategorySelection}
          >
            Homewares
            <hr
              className={`border-[1px] ${
                categorySelected.includes("Homewares")
                  ? "active-category"
                  : "border-[#4e4d4e3a]"
              }`}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
