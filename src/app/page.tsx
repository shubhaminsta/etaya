// import HeroSection from "@/app/components/HeroSection/page";
// import AboutUs from "@/app/components/AboutUs";
// import Vision from "@/app/components/Vision";
// import OurWorks from "./components/OurWorks";
// import TeamSection from "./components/Team";
// import Resolution from "./components/Resolution";
// import Testimonials from "@/app/components/Testimonials";
// import Blogs from "@/app/components/Blogs";
// import Footer from "@/app/components/Footer";
// import BottomBar from "@/app/components/BottomBar";
// export default function ScrollSections() {
//   return (
//     <div className="">
// <section className=" flex items-center justify-center text-white text-5xl">
//   <HeroSection />
// </section>
// <section className="  flex items-center justify-center text-white text-5xl">
//   <BottomBar />
// </section>

// <section className="   flex items-center justify-center  text-5xl">
//   <AboutUs />
// </section>
// <section className="  flex items-center justify-center text-white text-5xl">
//   <Vision />
// </section>
// <section className="   flex items-center justify-center text-white text-5xl">
//   <OurWorks />
// </section>
// <section className="   flex items-center justify-center text-white text-5xl">
//   <TeamSection />
// </section>
// <section className="   flex items-center justify-center text-white text-5xl">
//   <Resolution />
// </section>
// <section className="   flex items-center justify-center text-white text-5xl">
//   <Testimonials />
// </section>
// <section className="   flex items-center justify-center text-white text-5xl">
//   <Blogs />
// </section>
// <section className="   flex items-center justify-center text-white text-5xl">
//   <Footer />
// </section>
//     </div>
//   );
// }

// // "use client";
// // import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// // import { useRef } from "react";

// // import HeroSection from "@/app/components/HeroSection/page";
// // import AboutUs from "@/app/components/AboutUs";
// // import Vision from "@/app/components/Vision";
// // import OurWorks from "./components/OurWorks";
// // import TeamSection from "./components/Team";
// // import Resolution from "./components/Resolution";
// // import Testimonials from "@/app/components/Testimonials";
// // import Blogs from "@/app/components/Blogs";
// // import Footer from "@/app/components/Footer";
// // import BottomBar from "@/app/components/BottomBar";

// // function ScrollSection({ children, fromY = 10, toY = 0 }) {
// //   const ref = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset: ["start 0.8", "end 0.2"], // triggers when near viewport
// //   });

// //   const smoothProgress = useSpring(scrollYProgress, {
// //     stiffness: 100,
// //     damping: 20,
// //   });

// //   // Only y-axis transform (no opacity now)
// //   const y = useTransform(smoothProgress, [0, 1], [fromY, toY]);

// //   return (
// //     <section ref={ref} className="snap-start flex items-center justify-center ">
// //       <motion.div style={{ y }} className="w-full ">
// //         {children}
// //       </motion.div>
// //     </section>
// //   );
// // }

// // export default function ScrollSections() {
// //   return (
// //     <div className="scroll-smooth">
// //       <ScrollSection fromY={20} toY={0}>
// //         <HeroSection />
// //       </ScrollSection>
// //       <ScrollSection fromY={20} toY={0}>
// //         <BottomBar />
// //       </ScrollSection>
// //       <ScrollSection fromY={0} toY={0}>
// //         <AboutUs />
// //       </ScrollSection>
// //       <ScrollSection fromY={20} toY={0}>
// //         <Vision />
// //       </ScrollSection>
// //       <ScrollSection fromY={20} toY={0}>
// //         <OurWorks />
// //       </ScrollSection>
// //       <ScrollSection fromY={20} toY={0}>
// //         <TeamSection />
// //       </ScrollSection>
// //       <ScrollSection fromY={20} toY={0}>
// //         <Resolution />
// //       </ScrollSection>
// //       <ScrollSection fromY={20} toY={0}>
// //         <Testimonials />
// //       </ScrollSection>
// //       <ScrollSection fromY={0} toY={0}>
// //         <Blogs />
// //       </ScrollSection>
// //       <ScrollSection fromY={0} toY={0}>
// //         <Footer />
// //       </ScrollSection>
// //     </div>
// //   );
// // }

"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import HeroSection from "@/app/components/HeroSection/page";
import AboutUs from "@/app/components/AboutUs";
import Vision from "@/app/components/Vision";
import OurWorks from "./components/OurWorks";
import TeamSection from "./components/Team";
import Resolution from "./components/Resolution";
import Testimonials from "@/app/components/Testimonials";
import Blogs from "@/app/components/Blogs";
import Footer from "@/app/components/Footer";
import BottomBar from "@/app/components/BottomBar";

export default function ScrollSections() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth acceleration
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <section className=" flex items-center justify-center text-white text-5xl">
        <HeroSection />
      </section>
      <section className="  flex items-center justify-center text-white text-5xl">
        <BottomBar />
      </section>

      <section className="   flex items-center justify-center  text-5xl">
        <AboutUs />
      </section>
      <section className="  flex items-center justify-center text-white text-5xl">
        <Vision />
      </section>
      <section className="   flex items-center justify-center text-white text-5xl">
        <OurWorks />
      </section>
      <section className="   flex items-center justify-center text-white text-5xl">
        <TeamSection />
      </section>
      <section className="   flex items-center justify-center text-white text-5xl">
        <Resolution />
      </section>
      <section className="   flex items-center justify-center text-white text-5xl">
        <Testimonials />
      </section>
      <section className="   flex items-center justify-center text-white text-5xl">
        <Blogs />
      </section>
      <section className="   flex items-center justify-center text-white text-5xl">
        <Footer />
      </section>
    </div>
  );
}
