import locomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef } from "react";
import LandingPage from "./components/LandingPage";
import Section2 from "./components/Section2";

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });
const App = () => {
  const scrollRef = useRef();

  useEffect(() => {
    new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  }, []);

  return (
    <div ref={scrollRef}>
      <LandingPage />
      <Section2 />
    </div>
  );
};

export default App;
