import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const LandingPage = () => {
  // add text animation using gsap

  useGSAP(() => {
    gsap.from("span", {
      opacity: 0,
      scale: 0.1,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.3,
    });
  });
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <h1 className="text-7xl text-white uppercase font-bold flex gap-2">
        <span className="block">P</span>
        <span className="block">A</span>
        <span className="block">P</span>
        <span className="block">E</span>
        <span className="block">R</span>
        <span className="block">+</span>
        <span className="block">L</span>
        <span className="block">A</span>
        <span className="block">N</span>
        <span className="block">D</span>
      </h1>
    </div>
  );
};

export default LandingPage;
