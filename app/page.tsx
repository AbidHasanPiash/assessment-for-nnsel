import Hero from "@/components/home/Hero";
import Project from "@/components/home/Project";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <div className="space-y-40 py-40">
      <Hero/>
      <Project/>
      <Testimonial/>
    </div>
  );
}
