import HeroSection from "@/app/components/HeroSection/page";
import AboutUs from "@/app/components/AboutUs";
import Vision from "@/app/components/Vision";
import OurWorks from "./components/OurWorks";
import TeamSection from "./components/Team";
import Resolution from "./components/Resolution";
import Testimonials from "@/app/components/Testimonials";
import Blogs from "@/app/components/Blogs";
export default function ScrollSections() {
  return (
    <div className="   scroll-smooth">
      <section className="h-screen  bg-pink-500 flex items-center justify-center text-white text-5xl">
        <HeroSection />
      </section>
      <section className=" snap-start  flex items-center justify-center  text-5xl">
        <AboutUs />
      </section>
      <section className=" snap-start  flex items-center justify-center text-white text-5xl">
        <Vision />
      </section>
      <section className=" snap-start  flex items-center justify-center text-white text-5xl">
        <OurWorks />
      </section>
      <section className=" snap-start  flex items-center justify-center text-white text-5xl">
        <TeamSection />
      </section>
      <section className=" snap-start  flex items-center justify-center text-white text-5xl">
        <Resolution />
      </section>
      <section className=" snap-start  flex items-center justify-center text-white text-5xl">
        <Testimonials />
      </section>
      <section className=" snap-start  flex items-center justify-center text-white text-5xl">
        <Blogs />
      </section>
    </div>
  );
}
