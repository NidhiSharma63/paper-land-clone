import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useCallback, useState } from "react";

const Section3 = React.forwardRef((_, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [categorySelected, setCategorySelected] = useState("Art Prints");
  const [imageUrl, setimageUrl] = useState("/assets/Art.webp");
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
    ref.current?.classList.add("section-3-cursor-animation-img");
  }, [ref]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    ref.current?.classList.remove("section-3-cursor-animation-img");
  }, [ref]);

  const handleCategorySelection = useCallback((event) => {
    setCategorySelected(event.target.dataset.category);
    setRemoveImage(true);
    // change image url
    setTimeout(() => {
      setimageUrl(
        `/assets/${event.target.dataset.category?.split(" ")[0]}.webp`
      );
      setRemoveImage(false);
    }, 400);
  }, []);

  const handleMouseEnterCursor = useCallback(() => {
    ref.current?.classList.add("section-3-cursor-animation");
  }, [ref]);

  const handleMouseLeaveCursor = useCallback(() => {
    ref.current?.classList.remove("section-3-cursor-animation");
  }, [ref]);

  return (
    <div className="section-3 max-w-[1920px] m-auto my-8 h-auto gap-8 flex  bg-[#fccff6] text-[#373637] align-middle justify-between md:p-[4rem] p-[1rem] pt-[4rem] md:pl-[7rem] pl-[1rem] flex-col ">
      <div className="section3-bottom   justify-center flex md:gap-16 gap-1 flex-col ">
        <div className="flex align-middle justify-start gap-12">
          <h3 className="md:text-2xl text-sm 2xl:text-3xl 3xl:text-4xl font-bold heading">
            Product Collections
          </h3>
          <button
            onMouseEnter={handleMouseEnterCursor}
            onMouseLeave={handleMouseLeaveCursor}
            className="md:text-[0.7rem] text-[0.5rem] 2xl:text-lg 3xl:text-xl border-2 px-4 py-1 rounded text-[11px] font-medium tracking-wide border-[#181816cc] hover:bg-[#181816ee] hover:text-white transition-all duration-500"
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
        <div className="md:flex-row flex-col-reverse flex justify-start gap-14">
          <div className="image-container 2xl:w-[1000px] 3xl:w-[1300px] max-w-[750px] max-h-[600px] 2xl:h-[900px] 3xl:h-[1200px] rounded-xl overflow-hidden">
            <img
              src={imageUrl}
              alt="showcase-image"
              className={`w-full h-full ${
                isHovered ? "scale-125" : "scale-100"
              } transition-all duration-500 cursor-pointer object-cover 
            ${removeImage ? "removeImage" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className="section-3-text flex md:flex-col  flex-wrap md:gap-8 gap-8 flex-row 2xl:gap-8 3xl:gap-12 mt-3 md:text-2xl 2xl:text-3xl 3xl:text-4xl text-md">
            <p
              onMouseEnter={handleMouseEnterCursor}
              onMouseLeave={handleMouseLeaveCursor}
              className={` cursor-pointer hover:translate-x-2 transition ${
                categorySelected?.includes("Art Prints")
                  ? "active-category"
                  : "text-[#4e4d4e3a]"
              }`}
              onClick={handleCategorySelection}
              data-category="Art Prints"
            >
              Art Prints
              <hr
                data-category="Art Prints"
                // className="border-[1px] border-[#4e4d4e3a]"
                className={` border-[1px] ${
                  categorySelected?.includes("Art Prints")
                    ? "active-category"
                    : "border-[#4e4d4e3a]"
                }`}
              />
            </p>

            <p
              onMouseEnter={handleMouseEnterCursor}
              onMouseLeave={handleMouseLeaveCursor}
              className={` cursor-pointer hover:translate-x-5 transition ${
                categorySelected?.includes("Cards & Stationery")
                  ? "active-category"
                  : "text-[#4e4d4e3a]"
              }`}
              data-category="Cards & Stationery"
              onClick={handleCategorySelection}
            >
              Cards & Stationery
              <hr
                data-category="Cards & Stationery"
                className={` border-[1px] ${
                  categorySelected?.includes("Cards & Stationery")
                    ? "active-category"
                    : "border-[#4e4d4e3a]"
                }`}
              />
            </p>

            <p
              onMouseEnter={handleMouseEnterCursor}
              onMouseLeave={handleMouseLeaveCursor}
              className={` cursor-pointer hover:translate-x-5 transition ${
                categorySelected?.includes("Homewares")
                  ? "active-category"
                  : "text-[#4e4d4e3a]"
              }`}
              data-category="Homewares"
              onClick={handleCategorySelection}
            >
              Homewares
              <hr
                data-category="Homewares"
                className={`border-[1px] ${
                  categorySelected?.includes("Homewares")
                    ? "active-category"
                    : "border-[#4e4d4e3a]"
                }`}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

Section3.displayName = "Section3";
export default Section3;
