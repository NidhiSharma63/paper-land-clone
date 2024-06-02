import { useCallback, useState } from "react";
// import Image1 from "../assets/Art.webp";

const Section3 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [categorySelected, setCategorySelected] = useState("Art Prints");
  const [imageUrl, setimageUrl] = useState("src/assets/Art.webp");
  const [removeImage, setRemoveImage] = useState(false);

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
    }, 500);
  }, []);

  return (
    <div className="section-3 h-[800px] flex border-2 bg-[#fccff6] text-[#373637] align-middle justify-between p-[4rem] pt-[4rem] flex-col">
      <div className="flex align-middle justify-start gap-12 border-2">
        <h3 className="text-2xl font-bold heading">Product Collections</h3>
        <button className="border-2 px-4 py-1 rounded text-[11px] font-medium tracking-wide border-[#181816cc]">
          VIEW ALL PRODUCTS
        </button>
      </div>
      <div className="section3-bottom flex gap-10">
        <div className="image-container w-[750px] h-[600px] rounded-xl overflow-hidden">
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
        <div className="section-3-text flex flex-col gap-4 mt-3 text-2xl">
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
          </p>
          <hr
            // className="border-[1px] border-[#4e4d4e3a]"
            className={` border-[1px] ${
              categorySelected.includes("Art Prints")
                ? "active-category"
                : "border-[#4e4d4e3a]"
            }`}
          />
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
          </p>
          <hr
            className={` border-[1px] ${
              categorySelected.includes("Cards & Stationery")
                ? "active-category"
                : "border-[#4e4d4e3a]"
            }`}
          />
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
          </p>
          <hr
            className={`border-[1px] ${
              categorySelected.includes("Homewares")
                ? "active-category"
                : "border-[#4e4d4e3a]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
