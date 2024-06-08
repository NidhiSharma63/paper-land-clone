import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import LandingPage from "./components/LandingPage";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

gsap.registerPlugin(ScrollTrigger);

let posX = 0;
let posY = 0;

let mouseX = 0;
let mouseY = 0;
const App = () => {
  const cursorRef = useRef(null);
  const scrollRef = useRef();
  useGSAP(() => {
    gsap.to(".cursor-example", {
      duration: 0.018,
      repeat: -1,
      onRepeat: () => {
        posX += (mouseX - posX) / 2;
        posY += (mouseY - posY) / 2;

        // Clamp the positions to ensure they stay within visible boundaries
        posX = Math.max(
          1,
          Math.min(posX, document.documentElement.clientWidth - 10)
        ); // Adjust '10' based on cursor size
        posY = Math.max(
          1,
          Math.min(posY, document.documentElement.clientHeight - 10)
        );

        gsap.set(".cursor-example", {
          css: {
            left: posX - 0,
            top: posY - 0,
          },
        });
      },
    });
  });

  useEffect(() => {
    // --- SETUP START ---
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
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

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
    // --- SETUP END ---

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // return () => {
    //   window.removeEventListener("mousemove", (e) => {
    //     mouseX = e.clientX;
    //     mouseY = e.clientY;
    //   });
    // };
  }, []);

  return (
    <div ref={scrollRef} className="smooth-scroll ">
      {/* <div className="cursor" /> */}
      <div className="cursor-example" ref={cursorRef} />
      <LandingPage ref={cursorRef} />
      <Section2 />
      <Section3 ref={cursorRef} />
      <Section4 ref={cursorRef} />
      <Section5 ref={cursorRef} />
      <Section6 />
    </div>
  );
};

export default App;
