import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import LandingPage from "./components/LandingPage";
import Section2 from "./components/Section2";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
    };
  }, []);

  return (
    <div ref={scrollRef} className="smooth-scroll">
      <LandingPage />
      <Section2 />
    </div>
  );
};

export default App;
