import Hero from "@/components/home/Hero";
import ScrollChapter from "@/components/home/ScrollChapter";
import ProblemSolution from "@/components/home/ProblemSolution";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MotionHighlight from "@/components/home/MotionHighlight";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollChapter />
      <ProblemSolution />
      <ServicesPreview />
      <WhyChooseUs />
      <MotionHighlight />
      <CTASection />
    </>
  );
}

