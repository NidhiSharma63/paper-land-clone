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
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".smooth-scroll").style.transform
        ? "transform"
        : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
    // --- SETUP END ---
  }, []);

  // useEffect(() => {
  //   const locoScroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });

  //   locoScroll.on("scroll", ScrollTrigger.update);

  //   ScrollTrigger.scrollerProxy(scrollRef.current, {
  //     scrollTop(value) {
  //       return arguments.length
  //         ? locoScroll.scrollTo(value, 0, 0)
  //         : locoScroll.scroll.instance.scroll.y;
  //     },
  //     getBoundingClientRect() {
  //       return {
  //         top: 0,
  //         left: 0,
  //         width: window.innerWidth,
  //         height: window.innerHeight,
  //       };
  //     },
  //     pinType: scrollRef.current.style.transform ? "transform" : "fixed",
  //   });

  //   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  //   ScrollTrigger.refresh();

  //   return () => {
  //     locoScroll.destroy();
  //     ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
  //   };
  // }, []);

  return (
    <div ref={scrollRef} className="smooth-scroll">
      <LandingPage />
      <Section2 />
    </div>
  );
};

export default App;
